
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');


// Bind routes to window object
window.routes = require('./routes');

// Populate pace object
const pace = require('./vendor/pace');

require('bootstrap-sass');
require('bootstrap-notify');
require('bootstrap-datepicker');
require('./vendor/jquery.chained');
require('jquery-slimscroll');
require('datatables.net');
require('datatables.net-bs');
require('datatables.net-buttons');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.html5');
require('datatables.net-buttons/js/buttons.colVis');
require('./vendor/datatables.net-buttons.server-side');
require('datatables.net-responsive');
require('datatables.net-responsive-bs');
require('datatables.net-keytable');
require('fastclick');
require('select2');
require('icheck');
require('admin-lte');

$(function () {
    // Bind Select2 menus
    $('.select2').select2({
        placeholder: "Select Option"
    });

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });

    // Custom Datatables length change select menu
    oTable = $('#dataTableBuilder').DataTable();
    $('#dataTableBuilderLengthChanger').on('change.DT', function () {
        oTable.page.len($(this).val()).draw();
    });
});
