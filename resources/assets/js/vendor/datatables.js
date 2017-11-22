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
require('./datatables.net-buttons.server-side');

$(function () {
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

});
