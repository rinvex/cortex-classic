let mix = require('laravel-mix');
let webpack = require('webpack');
let WebpackShellPlugin = require('webpack-shell-plugin');
let Dependencies = require('laravel-mix/src/Dependencies.js');
let moduleDependencies = [];

let glob = require('glob');
require('laravel-mix-purgecss');

let webpackAliases = {markjs: 'mark.js/dist/jquery.mark.js'};

let scanForCssSelectors = [
    path.join(__dirname, 'app/**/*.php'),
    path.join(__dirname, 'config/*.php'),
    path.join(__dirname, 'resources/js/**/*.js'),
    path.join(__dirname, 'resources/views/**/*.php'),
    path.join(__dirname, 'node_modules/select2/**/*.js'),
    path.join(__dirname, 'node_modules/dropzone/**/*.js'),
    path.join(__dirname, 'node_modules/admin-lte/dist/**/*.js'),
    path.join(__dirname, 'node_modules/datatables.net/**/*.js'),
    path.join(__dirname, 'node_modules/bootstrap-notify/**/*.js'),
    path.join(__dirname, 'node_modules/fontawesome-iconpicker/dist/**/*.js'),
];

let whitelistPatterns = [/select2/, /alert/, /turbolinks/, /iti/, /dt-/];

let webpackPlugins = [
    // Reduce bundle size by ignoring moment js local files
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    // Add shell command plugin to execute shell commands on building
    new WebpackShellPlugin({
        onBuildStart: ['php artisan laroute:generate --ansi --no-interaction', 'php artisan lang:js --ansi --no-lib --no-interaction'],
        onBuildEnd: [],
    }),
];

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


// Dynamically import module webpack config
glob.sync('app/*/*/resources/js/webpack.js').forEach(function (file) {
    var moduleWebpack = require(path.join(__dirname, file));

    moduleDependencies.push(...moduleWebpack.install || []);
    scanForCssSelectors.push(...moduleWebpack.scanForCssSelectors || []);
    whitelistPatterns.push(...moduleWebpack.whitelistPatterns || []);
    webpackPlugins.push(...moduleWebpack.webpackPlugins || []);

    moduleWebpack.mix.js.forEach(function(dependency) {
        mix.js(dependency.input, dependency.output);
    });

    moduleWebpack.mix.css.forEach(function(dependency) {
        mix.sass(dependency.input, dependency.output);
    });
});

// Install module dependencies
new Dependencies(moduleDependencies).install(false);


mix
    .webpackConfig({
        plugins: webpackPlugins,
        resolve: { alias: webpackAliases },
    })
    .copyDirectory('resources/favicon', 'public/favicon')
    .copyDirectory('node_modules/tinymce/skins', 'public/tinymce')
    // .autoload({ jquery: ['$', 'jQuery', 'window.$', 'window.jQuery'] })
    .options({
        // processCssUrls: false
        // postCss: [require('postcss-image-inliner')()],
    })

    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sass('resources/sass/vendor.scss', 'public/css/vendor.css')
    .sass('resources/sass/datatables.scss', 'public/css/datatables.css')
    .sass('app/cortex/foundation/resources/sass/theme-frontarea.scss', 'public/css/theme-frontarea.css')
    .sass('app/cortex/foundation/resources/sass/theme-adminarea.scss', 'public/css/theme-adminarea.css')
    .sass('app/cortex/foundation/resources/sass/theme-tenantarea.scss', 'public/css/theme-tenantarea.css')
    .sass(
        'app/cortex/foundation/resources/sass/theme-managerarea.scss',
        'public/css/theme-managerarea.css'
    )

    .js('resources/js/vendor/datatables.js', 'public/js/datatables.js')
    .js('resources/js/app.js', 'public/js/app.js')

    .extract(
        [
            //jQuery
            'jquery',

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
            './resources/js/vendor/bootstrap-popover-picker',

            // Misc
            'moment',
            'select2',
            'dropzone',
            './resources/js/vendor/slugify',
            './resources/js/vendor/jquery.validation',

            // Theme
            'admin-lte',
        ],
        'public/js/vendor.js'
    )
    .purgeCss({
        enabled: true,
        globs: scanForCssSelectors,
        extensions: ['html', 'js', 'php', 'vue'],
        whitelistPatterns: whitelistPatterns,
    })
    .version();
