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
    }

})();


// Datatable Checkbox
window.isSelected = false;
window.selectAllLink=false;
window.addEventListener('turbolinks:load', function () {
    $('.dataTableBuilder').on('draw.dt', function () {
        onDrawCallBack(this);
    });

    function onDrawCallBack(dtObj) {
        if (selectAllLink) {

            if (!$('.dataTableBuilder thead tr input[type="checkbox"]').prop('checked')) {
                $('.dataTableBuilder thead tr input[type="checkbox"]').trigger('click');
            }

            $('.dataTableBuilder tbody').find('tr').each(function () {
                $(this).addClass('selected');
            });
            $('.dataTableBuilder tbody tr').find('input[type="checkbox"]').each(function () {
                $(this).prop('checked', true);
            });

            $('.select-item').html($('.dataTableBuilder').DataTable().page.info().recordsTotal + ' rows selected');
        }

        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (window.isSelected && !selectAllLink) {
                console.log('single condition');
                var dt = $('.dataTableBuilder').DataTable();
                var rows_selected = dt.column(0).checkboxes.selected();
                var selectedIdList = rows_selected.join(',');

                if (selectedIdList.length > 0) {
                    options.url = options.url + "?selectedId=" + selectedIdList;
                    window.isSelected = false;
                }
            }
        });
    }

    $('.dataTableBuilder tr:has(td)').find('input[type="checkbox"]').click(function () {
        $('#countLabel').remove();
    });
    $(document).on('click', '.dt-checkboxes', function (e) {
        $('#countLabel').remove();
    });
    $('.dataTableBuilder tr:has(th)').find('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked")) {
            currentPageSelectedCount();
        } else {
            $('#countLabel').remove();
        }
    });
    $(document).on('click', '#linkAll', function (e) {
        if (window.selectAllLink) {
            window.selectAllLink = false;
            $('#linkAll').html('Select all ' + $('.dataTableBuilder').DataTable().page.info().recordsTotal + ' conversations in Inbox.');

        } else {
            $('.select-item').html($('.dataTableBuilder').DataTable().page.info().recordsTotal + ' rows selected');
            window.selectAllLink = true;
            $('#linkAll').html('Clear selection.');
        }
    });

    function currentPageSelectedCount() {
        if (!selectAllLink) {
            $('#countLabel').remove();
            $('.dataTableBuilder').before('<label id="countLabel" style="caption-side: bottom;text-align:center;width:100%;font-weight:500;margin-top:2%"> All ' + $('.dataTableBuilder').DataTable().page.info().length + ' conversations on this page are selected.<a  style="cursor:pointer" id="linkAll"> Select all ' + $('.dataTableBuilder').DataTable().page.info().recordsTotal + ' conversations in Inbox.<a></label>');
        }
    }

});
