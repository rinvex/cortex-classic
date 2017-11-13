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
    .setPublicPath('public/assets')
    .autoload({ jquery: ['$', 'jQuery'] })
    .sass('app/cortex/console/resources/assets/sass/terminal.scss', 'public/assets/css/terminal.css')
    .sass('resources/assets/sass/theme-adminlte.scss', 'public/assets/css/theme-adminlte.css')
    .sass('resources/assets/sass/fullcalendar.scss', 'public/assets/css/fullcalendar.css')
    .sass('resources/assets/sass/theme-pratt.scss', 'public/assets/css/theme-pratt.css')
    .sass('resources/assets/sass/datatables.scss', 'public/assets/css/datatables.css')
    .sass('resources/assets/sass/vendor.scss', 'public/assets/css/vendor.css')
    .sass('resources/assets/sass/app.scss', 'public/assets/css/app.css')
    .js('node_modules/chart.js/src/chart.js', 'public/assets/js/chart.js')
    .js('resources/assets/js/vendor/wizard.js', 'public/assets/js/wizard.js')
    .js('resources/assets/js/vendor/terminal.js', 'public/assets/js/terminal.js')
    .js('resources/assets/js/vendor/datatables.js', 'public/assets/js/datatables.js')
    .js('resources/assets/js/vendor/fullcalendar.js', 'public/assets/js/fullcalendar.js')
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
            'bootstrap-colorpicker',
            'fontawesome-iconpicker',
            'bootstrap-popover-picker/src/js/picker',

            // Date and Time
            'moment',
            'timepicker',
            'datepair.js',
            'moment-timezone',
            'bootstrap-datepicker',
            'bootstrap-daterangepicker',
            'datepair.js/src/jquery.datepair',

            // Misc
            'select2',
            './resources/assets/js/vendor/slugify',
            './resources/assets/js/vendor/jquery.validation',
            './resources/assets/js/vendor/jquery.bootstrap.wizard',
            './resources/assets/js/vendor/pace',

            // Theme
            'admin-lte',
        ],
        'public/assets/js/vendor.js'
    )
    .version();
