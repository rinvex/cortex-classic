(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'datatables.net'], function ($) {
            return factory($, window, document);
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (! root) {
                root = window;
            }

            if (! $ || ! $.fn.dataTable) {
                $ = require('datatables.net')(root, $).$;
            }

            return factory($, root, root.document);
        };
    } else {
        // Browser
        factory(jQuery, window, document);
    }
}(function ($, window, document, undefined) {
    'use strict';
    let DataTable = $.fn.dataTable;

    let exportAction = function (e, dt, button, config, action) {
        let dataTableBuilder = $('.dataTableBuilder');
        let selectedIds = dataTableBuilder.DataTable().column(0).checkboxes.selected();

        let $form = $('<form />');
        $form.attr('action', window.location);
        $form.attr('method', 'post');
        $form.append('<input type="hidden" name="action" value="' + action + '" />');
        $form.append('<input type="hidden" name="_token" value="' + window.Laravel.csrfToken + '" />');

        if (selectedIds.length) {
            selectedIds.join(',').split(',').forEach((selectedId) => $form.append('<input type="hidden" name="selected_ids[]" value="' + selectedId + '" />'));
        }

        dataTableBuilder.append($form);
        $form.submit();
    };

    let bulkAction = function (e, dt, button, config, action) {
        if (confirm('Are you sure you want to ' + action + ' all selected records?')) {
            let selectedIds = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();

            if (selectedIds.length > 0) {
                axios.post(window.location.href, {
                    action: action,
                    selected_ids: selectedIds.join(',').split(',')
                })
                     .then(function (response) {
                         let notification = function () {$.notify({message: response.data}, {type: 'success', mouse_over: 'pause', z_index: 9999, animate: {enter: 'animated fadeIn', exit: 'animated fadeOut'}});}; if (typeof notification === 'function') {notification(); notification = null;}
                         dt.search('').draw();
                         dt.column(0).checkboxes.deselectAll();
                     });
            } else {
                alert('No Selected Records!');
            }
        }
    };

    DataTable.ext.buttons.export = {
        extend: 'collection',
        className: 'buttons-export',
        buttons: ['csv', 'excel', 'pdf'],
        text: (dt) => '<i class="fa fa-download"></i> ' + dt.i18n('buttons.export', 'Export') + '&nbsp;<span class="caret"/>',
    };

    DataTable.ext.buttons.excel = {
        className: 'buttons-excel',
        action: (e, dt, button, config) => exportAction(e, dt, button, config, 'excel'),
        text: (dt) => '<i class="fa fa-file-excel-o"></i> ' + dt.i18n('buttons.excel', 'Excel'),
    };

    DataTable.ext.buttons.csv = {
        className: 'buttons-csv',
        action: (e, dt, button, config) => exportAction(e, dt, button, config, 'csv'),
        text: (dt) => '<i class="fa fa-file-excel-o"></i> ' + dt.i18n('buttons.csv', 'CSV'),
    };

    DataTable.ext.buttons.pdf = {
        className: 'buttons-pdf',
        action: (e, dt, button, config) => exportAction(e, dt, button, config, 'pdf'),
        text: (dt) => '<i class="fa fa-file-pdf-o"></i> ' + dt.i18n('buttons.pdf', 'PDF'),
    };

    DataTable.ext.buttons.print = {
        className: 'buttons-print',
        action: (e, dt, button, config) => exportAction(e, dt, button, config, 'print'),
        text: (dt) => '<i class="fa fa-print"></i> ' + dt.i18n('buttons.print', 'Print'),
    };

    DataTable.ext.buttons.reset = {
        className: 'buttons-reset',
        text: (dt) => '<i class="fa fa-undo"></i> ' + dt.i18n('buttons.reset', 'Reset'),
        action: (e, dt, button, config) => {
            dt.search('').draw();
            dt.column(0).checkboxes.deselectAll();
        }
    };

    DataTable.ext.buttons.reload = {
        className: 'buttons-reload',
        text: (dt) => '<i class="fa fa-refresh"></i> ' + dt.i18n('buttons.reload', 'Reload'),
        action: (e, dt, button, config) => dt.draw(false),
    };

    DataTable.ext.buttons.create = {
        className: 'buttons-create',
        text: (dt) => '<i class="fa fa-plus"></i> ' + dt.i18n('buttons.create', 'Create'),
        action: (e, dt, button, config) => Turbolinks.visit(window.location.href.replace(/\/+$/, '') + '/create'),
    };

    DataTable.ext.buttons.import = {
        className: 'buttons-import',
        text: (dt) => '<i class="fa fa-upload"></i> ' + dt.i18n('buttons.import', 'Import'),
        action: (e, dt, button, config) => Turbolinks.visit(window.location.href.replace(/\/+$/, '') + '/import'),
    };

    DataTable.ext.buttons.showSelected = {
        className: 'buttons-selected',
        text: (dt) => '<i class="fa fa-check "></i> ' + dt.i18n('buttons.showSelected', 'Show Selected'),
        action: (e, dt, button, config) => {
            window.showSelected = true;
            dt.draw();
        },
    };

    DataTable.ext.buttons.bulk = {
        extend: 'collection',
        className: 'buttons-bulk',
        text: (dt) => '<i class="fa fa-list"></i> ' + dt.i18n('buttons.bulk', 'Bulk') + '&nbsp;<span class="caret"/>',
    };

    DataTable.ext.buttons.bulkDelete = {
        className: 'buttons-bulk-delete',
        action: (e, dt, button, config) => bulkAction(e, dt, button, config, 'delete'),
        text: (dt) => '<i class="fa fa-trash"></i> ' + dt.i18n('buttons.bulkDelete', 'Delete'),
    };

    DataTable.ext.buttons.bulkActivate = {
        className: 'buttons-bulk-activate',
        action: (e, dt, button, config) => bulkAction(e, dt, button, config, 'activate'),
        text: (dt) => '<i class="fa fa-trash"></i> ' + dt.i18n('buttons.bulkActivate', 'Activate'),
    };

    DataTable.ext.buttons.bulkDeactivate = {
        className: 'buttons-bulk-deactivate',
        action: (e, dt, button, config) => bulkAction(e, dt, button, config, 'deactivate'),
        text: (dt) => '<i class="fa fa-trash"></i> ' + dt.i18n('buttons.bulkDeactivate', 'Deactivate'),
    };

}));
