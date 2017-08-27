const { mix } = require('laravel-mix');

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
    .autoload({jquery: ['$', 'jQuery']})
    .sass('app/cortex/console/resources/assets/sass/terminal.scss', 'public/css/terminal.css')
    .sass('resources/assets/sass/vendor.scss', 'public/css/vendor.css')
    .sass('resources/assets/sass/theme.scss', 'public/css/theme.css')
    .sass('resources/assets/sass/app.scss', 'public/css/app.css')
    .js('resources/assets/js/app.js', 'public/js/app.js')
    .extract([
        //jQuery
        'jquery',
        'jquery-mousewheel',
        'jquery-slimscroll',
        './resources/assets/js/vendor/jquery.icheck',
        './resources/assets/js/vendor/jquery.validation',

        // Bootstrap
        'bootstrap-sass',
        'bootstrap-notify',
        'bootstrap-daterangepicker',

        // Terminal
        'codemirror',
        'jquery.terminal',
        'jquery.terminal/js/unix_formatting',
        './app/cortex/console/resources/assets/js/terminal',

        // Datatables
        'datatables.net',
        'datatables.net-bs',
        'datatables.net-buttons',
        'datatables.net-keytable',
        'datatables.net-buttons-bs',
        'datatables.net-responsive',
        'datatables.net-responsive-bs',
        'datatables.net-buttons/js/buttons.html5',
        'datatables.net-buttons/js/buttons.colVis',
        './resources/assets/js/vendor/datatables.net-buttons.server-side',

        // Misc
        'moment',
        'select2',
        'moment-timezone',
        './resources/assets/js/vendor/pace',
        './resources/assets/js/vendor/slugify',

        // Theme
        'admin-lte',

    ], 'public/js/vendor.js')
    .version();
