/**************************
 **    Import modules    **
 **************************/

let path = require('path');
let glob = require('glob');
let mix = require('laravel-mix');
let webpack = require('webpack');
let tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

let webpackAliases = {
    markjs: 'mark.js/dist/jquery.mark.js',
    jquery: 'jquery/src/jquery',
    $: 'jquery/src/jquery',
};

let WebpackShellPluginNext = require('webpack-shell-plugin-next');
let Dependencies = require('laravel-mix/src/Dependencies.js');
let postCssPlugins = [
    tailwindcss('./tailwind.config.js'),
    require('postcss-nested'),
];


/**************************
 ** Initialize Variables **
 **************************/

// Modules to skip compiling
let dontDiscoverModules = [];
let dontDiscoverAssets = [];

// npm dependencies to be installed
let moduleDependencies = [];

// Extracted vendor libraries
let vendorLibraries = [
    //jQuery
    'jquery',

    'vue',
    'axios',
    'lodash',
    'mark.js',
    'tinymce',
    'pusher-js',
    'laravel-echo',
    'intl-tel-input',
    'vue-template-compiler',

    // Mouse interaction
    'jquery-mousewheel',
    'jquery-slimscroll',

    // Bootstrap
    'bootstrap-sass',
    'bootstrap-notify',

    // Pickers
    'timepicker',
    'datepair.js',
    'bootstrap-datepicker',
    'bootstrap-colorpicker',
    'fontawesome-iconpicker',
    'bootstrap-daterangepicker',
    'datepair.js/src/jquery.datepair',

    // Misc
    'moment',
    'select2',
    'dropzone',

    // Theme
    'admin-lte',
];


let scanForCssSelectors = [
    path.join(__dirname, 'config/*.php'),
    path.join(__dirname, 'app/**/*.js'),
    path.join(__dirname, 'app/**/*.php'),
    path.join(__dirname, 'app/**/*.vue'),
    path.join(__dirname, 'resources/**/*.js'),
    path.join(__dirname, 'resources/**/*.php'),
    path.join(__dirname, 'node_modules/select2/**/*.js'),
    path.join(__dirname, 'node_modules/dropzone/**/*.js'),
    path.join(__dirname, 'node_modules/admin-lte/dist/**/*.js'),
    path.join(__dirname, 'node_modules/datatables.net/**/*.js'),
    path.join(__dirname, 'node_modules/bootstrap-notify/**/*.js'),
    path.join(__dirname, 'node_modules/bootstrap-daterangepicker/**/*.js'),
];

let safelist = [/select2/, /alert/, /iti/, /dt-/, /dataTable/, /text-/, /col-/, /btn-/, /dropdown/, /picker/, /dropzone/, /progress/, /sidebar/, /nav/, /fa-/, /select-item/];

let webpackPlugins = [
    // Reduce bundle size by ignoring moment js local files
    new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
    }),

    // Add shell command plugin to execute shell commands on building
    new WebpackShellPluginNext({
        onBuildStart: {scripts: ['php artisan laroute:generate --ansi --no-interaction', 'php artisan lang:js --ansi --no-lib --no-interaction'], blocking: true, parallel: false},
        onBuildEnd: {scripts: [], blocking: true, parallel: false},
    }),
];

let purgeCssOptions = {
    enabled: true,
    variables: true,
    content: scanForCssSelectors,
    extensions: ['html', 'js', 'php', 'vue'],
    safelist: safelist,
};


/**************************
 **   Dynamic modules    **
 **************************/

glob.sync('app/{modules,extensions}/*/*/resources/js/webpack.mix.js').forEach(function (file) {
    let moduleName = file.split('/')[1] + '/' + file.split('/')[2];

    // Check if we need to skip this module
    if (dontDiscoverModules.includes(moduleName)) {
        return;
    }

    let moduleWebpack = require(path.join(__dirname, file));

    moduleDependencies.push(...moduleWebpack.install || []);
    scanForCssSelectors.push(...moduleWebpack.scanForCssSelectors || []);
    safelist.push(...moduleWebpack.safelist || []);
    webpackPlugins.push(...moduleWebpack.webpackPlugins || []);

    moduleWebpack.mix.js.forEach(function(dependency) {
        if (! dontDiscoverAssets.includes(dependency.input)) {
            mix.js(dependency.input, dependency.output);
        }
    });

    moduleWebpack.mix.css.forEach(function(dependency) {
        if (! dontDiscoverAssets.includes(dependency.input)) {
            mix.sass(dependency.input, dependency.output);
        }
    });

    moduleWebpack.copy.forEach(function(path) {
        if (! dontDiscoverAssets.includes(path.from)) {
            mix.copyDirectory(path.from, path.to);
        }
    });
});

// Install module dependencies
(new Dependencies()).enqueue(moduleDependencies).install();


/**************************
 ** Mix Asset Management **
 **************************/

mix

    .options({
        processCssUrls: true,
        postCss: postCssPlugins,
    })

    .webpackConfig({
        plugins: webpackPlugins,
        resolve: {alias: webpackAliases},
        output: {
            chunkFilename: 'js/chunks/[name].js'
        }
    })

    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sass('resources/sass/vendor.scss', 'public/css/vendor.css')
    .sass('resources/sass/datatables.scss', 'public/css/datatables.css')

    .js('resources/js/vendor/datatables.js', 'public/js/datatables.js')
    .js('resources/js/app.js', 'public/js/app.js')

    .extract(vendorLibraries, 'public/js/vendor.js')
    .purgeCss(purgeCssOptions)
    .version();
