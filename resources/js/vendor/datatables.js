// Datatables
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.mark.js';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-rowgroup';
import 'datatables.net-keytable';
import 'datatables.net-responsive';
import 'datatables.net-buttons-bs';
import 'datatables.net-responsive-bs';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.colVis';
import 'jquery-datatables-checkboxes';
import './datatables-buttons';

// This is a workaround to handle the SPA nature of turbolinks
window.DataTableReady = true;
document.dispatchEvent(new Event('datatables.ready'));

(function () {
    // Format Log DataTable details
    window.dtFormatLogDetails = function (data) {
        // if ($.isEmptyObject(data.attributes)) {
        //     return 'Saved without any changes!';
        // }

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
                    });

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
    };

})();


// Datatable Checkbox
window.showSelected = false;
window.addEventListener('turbolinks:load', function () {
    let dataTableBuilder = $('.dataTableBuilder');

    dataTableBuilder.on('draw.dt', function () {
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (window.showSelected) {
                let selectedIds = dataTableBuilder.DataTable().column(0).checkboxes.selected().join(',').split(',');
                selectedIds.filter(item => item).forEach(item => options.data += '&selected_ids[]=' + item);
            }
        });
    });
});
