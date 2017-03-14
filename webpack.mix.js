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
    .sass('resources/assets/sass/vendor.scss', 'public/css/vendor.css')
    .sass('resources/assets/sass/app.scss', 'public/css/app.css')
    .js('resources/assets/js/app.js', 'public/js/app.js')
    .extract([
        'datatables.net',
        'datatables.net-bs',
        'datatables.net-buttons',
        'datatables.net-buttons-bs',
        'datatables.net-buttons/js/buttons.colVis.js',
        'datatables.net-responsive',
        'datatables.net-responsive-bs',
        'datatables.net-keytable'
    ], 'public/js/vendor.js')
    .version();
