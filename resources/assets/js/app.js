/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// Bind variables to window object
window.$ = window.jQuery = require('jquery');

// // Turbolinks
// window.Turbolinks = require("turbolinks");
// Turbolinks.start();

// jQuery
require('jquery-mousewheel');
require('jquery-slimscroll');
require('./vendor/jquery.icheck');
require('./vendor/jquery.validation');
require('./vendor/jquery.bootstrap.wizard');

// Bootstrap
require('bootstrap-sass');
require('bootstrap-notify');
require('bootstrap-daterangepicker');

// Datatables
require('datatables.net');
require('datatables.net-bs');
require('datatables.net-buttons');
require('datatables.net-keytable');
require('datatables.net-responsive');
require('datatables.net-buttons-bs');
require('datatables.net-responsive-bs');
require('datatables.net-buttons/js/buttons.html5');
require('datatables.net-buttons/js/buttons.colVis');
require('./vendor/datatables.net-buttons.server-side');

// Misc
require('select2');
require('moment-timezone');
require('./vendor/slugify');
window.moment = require('moment');
window.pace = require('./vendor/pace');
window.routes = require('../../../public/js/routes');

// Terminal
require('jquery.terminal');
require('jquery.terminal/js/unix_formatting');
window.Terminal = require('../../../app/cortex/console/resources/assets/js/terminal');

// Theme
require('admin-lte');


$(function () {
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


    // Custom Datatables length change select menu
    oTable = $('.dataTableBuilder').DataTable();
    $('.dataTableBuilderLengthChanger').on('change.DT', function () {
        oTable.page.len($(this).val()).draw();
    });


    // Format Log DataTable details
    window.dtFormatLogDetails = function (data) {
        if ($.isEmptyObject(data.attributes)) {
            return 'Saved without any changes!';
        }

        let headerDrwan = false;
        let $thead = $('<thead />');
        let $tbody = $('<tbody />');
        let $table = $('<table class="table table-condensed table-striped table-bordered" />');

        $.each(data, function (i, item) {
            let $tr = $('<tr />');
            let $trH = $('<tr />');

            if (! headerDrwan) {
                // Empty cell
                $trH.append('<td />');

                // Draw columns
                $.each(item, function (i2, item2) {
                    $trH.append('<td><strong>' + i2 + '</strong></td>');
                });

                // Append table header
                $trH.appendTo($thead);
                $thead.appendTo($table);
                headerDrwan = true;
            }

            // Append table row
            $tr.appendTo($tbody);
            $tbody.appendTo($table);
            $tr.append('<td><strong>' + i + '</strong></td>');

            $.each(item, function (i2, item2) {
                // Check if cell value is object
                if (item2 && typeof item2 === 'object') {
                    let cellValue = '';

                    // Loop through cell value object and append as string
                    $.each(item2, function (i3, item3) {
                        cellValue += i3 + ': ' + item3 + ' ';
                    })

                    // Append cell value to table row
                    $tr.append('<td>' + cellValue + '</td>');
                } else {
                    // Append cell value to table row
                    $tr.append('<td>' + item2 + '</td>');
                }
            });
        });

        // Return table HTML string
        return $table;
    }


    $('#guestarea-register-tenant-process').keypress(function(e){
        if(e.keyCode === 13) {
            e.preventDefault();
            $('.next').click();
        }
    });

    $('#guestarea-register-tenant-process').bootstrapWizard({
        onNext: function (tab, navigation, index) {
            return $('#guestarea-register-tenant-process').valid();
        },
        onFinish: function onNext(tab, navigation, index) {
            $('#guestarea-register-tenant-process').submit();
        },
        onTabClick: function (tab, navigation, index, clickedIndex) {
            if (clickedIndex > index) {
                return $('#guestarea-register-tenant-process').valid();
            }
        }
    });


    $('#guestarea-register-member-process').keypress(function(e){
        if(e.keyCode === 13) {
            e.preventDefault();
            $('.next').click();
        }
    });

    $('#guestarea-register-member-process').bootstrapWizard({
        onNext: function (tab, navigation, index) {
            return $('#guestarea-register-member-process').valid();
        },
        onFinish: function onNext(tab, navigation, index) {
            $('#guestarea-register-member-process').submit();
        },
        onTabClick: function (tab, navigation, index, clickedIndex) {
            if (clickedIndex > index) {
                return $('#guestarea-register-member-process').valid();
            }
        }
    });

});
