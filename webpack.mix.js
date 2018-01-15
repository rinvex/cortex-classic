const { mix } = require('laravel-mix');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

let glob = require('glob');

let purifyCssPaths = [
    glob.sync(path.join(__dirname, 'app/**/*.php')),
    glob.sync(path.join(__dirname, 'resources/assets/js/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/select2/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/dropzone/**/*.js')),
    glob.sync(path.join(__dirname, 'resources/views/**/*.blade.php')),
    glob.sync(path.join(__dirname, 'node_modules/fullcalendar/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/datatables.net/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/jquery.terminal/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/fullcalendar-scheduler/**/*.js')),
    glob.sync(path.join(__dirname, 'node_modules/fontawesome-iconpicker/dist/**/*.js')),
];

let webpackPlugins = [
    // Reduce bundle size by ignoring moment js local files
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    // Add shell command plugin to execute shell commands on building
    new WebpackShellPlugin({onBuildStart:[
        'php artisan laroute:generate',
    ], onBuildEnd:[]}),
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

mix
    .setResourceRoot('/assets/')
    .setPublicPath('public/assets')
    .webpackConfig({ plugins: webpackPlugins })
    .autoload({ jquery: ['$', 'jQuery', 'window.$', 'window.jQuery'] })
    .options({ purifyCss: { paths: [].concat.apply([], purifyCssPaths) } })

    .sass('resources/assets/sass/app.scss', 'public/assets/css/app.css')
    .sass('resources/assets/sass/vendor.scss', 'public/assets/css/vendor.css')
    .sass('resources/assets/sass/datatables.scss', 'public/assets/css/datatables.css')
    .sass('resources/assets/sass/theme-pratt.scss', 'public/assets/css/theme-pratt.css')
    .sass('resources/assets/sass/fullcalendar.scss', 'public/assets/css/fullcalendar.css')
    .sass('resources/assets/sass/theme-adminlte.scss', 'public/assets/css/theme-adminlte.css')
    .sass('app/cortex/console/resources/assets/sass/terminal.scss', 'public/assets/css/terminal.css')

    .js('app/cortex/bookings/resources/assets/js/bookings.js', 'public/assets/js/bookings.js')
    .js('app/cortex/console/resources/assets/js/terminal.js', 'public/assets/js/terminal.js')
    .js('resources/assets/js/vendor/fullcalendar.js', 'public/assets/js/fullcalendar.js')
    .js('resources/assets/js/vendor/datatables.js', 'public/assets/js/datatables.js')
    .js('node_modules/chart.js/src/chart.js', 'public/assets/js/chart.js')
    .js('resources/assets/js/app.js', 'public/assets/js/app.js')

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
            './resources/assets/js/vendor/bootstrap-popover-picker',

            // Misc
            'moment',
            'select2',
            'dropzone',
            './resources/assets/js/vendor/pace',
            './resources/assets/js/vendor/slugify',
            './resources/assets/js/vendor/jquery.validation',

            // Theme
            'admin-lte',
        ],
        'public/assets/js/vendor.js'
    )
    .version();
