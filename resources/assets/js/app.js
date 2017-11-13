/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// Bind variables to window object
window.$ = window.jQuery = require('jquery');
window.routes = require('../../../public/assets/js/routes');

// Mouse interaction
require('jquery-mousewheel');
require('jquery-slimscroll');

// Bootstrap
require('bootstrap-sass');
require('bootstrap-notify');

// Pickers
require('bootstrap-colorpicker');
require('fontawesome-iconpicker');
require('bootstrap-popover-picker/src/js/picker');

// Date and Time
require('timepicker');
require('datepair.js');
require('moment-timezone');
require('bootstrap-datepicker');
require('bootstrap-daterangepicker');
require('datepair.js/src/jquery.datepair');
window.moment = require('moment');

// Misc
require('select2');
require('./vendor/slugify');
require('./vendor/jquery.validation');
window.pace = require('./vendor/pace');

// Theme
require('admin-lte');


$(function () {
    // Color Picker
    $('.color-picker').colorpicker();

    // Icon Picker
    $('.icon-picker').iconpicker();

    // Style Picker
    $('.style-picker').picker({
        templates: {
            pickerItem: '<div class="picker-item"><i class="hidden"></i></div>',
        },
        selectedCustomClass: 'fa fa-check',
        items: [
            'bg-red',
            'bg-yellow',
            'bg-aqua',
            'bg-blue',
            'bg-light-blue',
            'bg-green',
            'bg-navy',
            'bg-teal',
            'bg-olive',
            'bg-lime',
            'bg-orange',
            'bg-fuchsia',
            'bg-purple',
            'bg-maroon',
            'bg-black',
        ],
    });


    // Highlight first tab that has errored inputs
    if ($('.tab-pane .has-error').length) {
        let erroredTabId = $('.tab-pane .has-error').closest('.tab-pane').attr('id');
        $('.nav a[href="#' + erroredTabId + '"]').tab('show');
    }


    // Slugify
    $('[data-slugify]').on('input', function (e) {
        if ($($(this).data('slugify')).val().length === 0) {
            $(this).on('keyup', function () {
                let input = $(this).data('slugify');
                let slug = $(this).val().slugify();
                $(input).val(slug);
            });
        }
    });


    // Enable linkable to tab
    let tabUrl = document.location.toString();
    if (tabUrl.match('#') && tabUrl.match(/\-tab/gi)) {
        $('.nav-tabs a[href="#' + tabUrl.split('#')[1] + '"]').tab('show');
    }

    // Change URL hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        let yScroll = document.body.scrollTop;
        window.location.hash = e.target.hash;
        document.body.scrollTop = yScroll;
    });


    // Bind Select2 menus
    $('.select2').select2({
        placeholder: "Select Option"
    });


    // Configure datepicker
    $('.datepicker').attr('readonly', true);
    $('.datepicker').daterangepicker({
        autoApply: true,
        showDropdowns: true,
        singleDatePicker: true,
        locale: {format: 'YYYY-MM-DD'},
    });

    $('.datepicker').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD'));
    });

    $('.datepicker').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
});
