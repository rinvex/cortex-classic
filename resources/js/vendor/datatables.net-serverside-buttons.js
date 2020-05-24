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
    "use strict";
    var DataTable = $.fn.dataTable;

    var _buildUrl = function(dt, action) {
        var url = dt.ajax.url() || '';
        var params = dt.ajax.params();
        params.action = action;

        return url + '?' + $.param(params);
    };

    DataTable.ext.buttons.excel = {
    className: 'buttons-excel',
    text: function text(dt) {
      return '<i class="fa fa-file-excel-o"></i> ' + dt.i18n('buttons.excel', 'Excel');
    },
    action: function action(e, dt, button, config) {
      // var url = _buildUrl(dt, 'excel');

      // window.location = url;

      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var tempUrl = dt.ajax.url() || '';
      var params = dt.ajax.params();
      params.action = 'excel';
      params.selectedId = '';
      var url = tempUrl + '?' + $.param(params);
      window.location = url;
      
    }
  };
  DataTable.ext.buttons["export"] = {
    extend: 'collection',
    className: 'buttons-export',
    text: function text(dt) {
      return '<i class="fa fa-download"></i> ' + dt.i18n('buttons.export', 'Export') + '&nbsp;<span class="caret"/>';
    },
    buttons: ['csv', 'excel', 'pdf']
  };
  DataTable.ext.buttons.csv = {
    className: 'buttons-csv',
    text: function text(dt) {
      return '<i class="fa fa-file-excel-o"></i> ' + dt.i18n('buttons.csv', 'CSV');
    },
    action: function action(e, dt, button, config) {
      // var url = _buildUrl(dt, 'csv');

      // window.location = url;
      
      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var tempUrl = dt.ajax.url() || '';
      var params = dt.ajax.params();
      params.action = 'csv';
      params.selectedId = '';
      var url = tempUrl + '?' + $.param(params);
      window.location = url;


    }
  };
  DataTable.ext.buttons.pdf = {
    className: 'buttons-pdf',
    text: function text(dt) {
      return '<i class="fa fa-file-pdf-o"></i> ' + dt.i18n('buttons.pdf', 'PDF');
    },
    action: function action(e, dt, button, config) {
      // var url = _buildUrl(dt, 'pdf');

      // window.location = url;

      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var tempUrl = dt.ajax.url() || '';
      var params = dt.ajax.params();
      params.action = 'pdf';
      params.selectedId = '';
      var url = tempUrl + '?' + $.param(params);
      window.location = url;

    }
  };
  DataTable.ext.buttons.print = {
    className: 'buttons-print',
    text: function text(dt) {
      return '<i class="fa fa-print"></i> ' + dt.i18n('buttons.print', 'Print');
    },
    action: function action(e, dt, button, config) {
      // var url = _buildUrl(dt, 'print');
      // window.location = url;
      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var tempUrl = dt.ajax.url() || '';
      var params = dt.ajax.params();
      params.action = 'print';
      params.selectedId = rows_selected.join(",");

      if (window.selectAllLink) {
        params.selectedId = '';
      }

      var url = tempUrl + '?' + $.param(params);
      window.location = url;
    }
  };
  DataTable.ext.buttons.reset = {
    className: 'buttons-reset',
    text: function text(dt) {
      return '<i class="fa fa-undo"></i> ' + dt.i18n('buttons.reset', 'Reset');
    },
    action: function action(e, dt, button, config) {
      dt.search('').draw();
    }
  };
  DataTable.ext.buttons.reload = {
    className: 'buttons-reload',
    text: function text(dt) {
      return '<i class="fa fa-refresh"></i> ' + dt.i18n('buttons.reload', 'Reload');
    },
    action: function action(e, dt, button, config) {
      dt.draw(false);
    }
  };
  DataTable.ext.buttons.create = {
    className: 'buttons-create',
    text: function text(dt) {
      return '<i class="fa fa-plus"></i> ' + dt.i18n('buttons.create', 'Create');
    },
    action: function action(e, dt, button, config) {
      Turbolinks.visit(window.location.href.replace(/\/+$/, "") + '/create');
    }
  };
  DataTable.ext.buttons["import"] = {
    className: 'buttons-import',
    text: function text(dt) {
      return '<i class="fa fa-upload"></i> ' + dt.i18n('buttons.import', 'Import');
    },
    action: function action(e, dt, button, config) {
      Turbolinks.visit(window.location.href.replace(/\/+$/, "") + '/import');
    }
  };
  DataTable.ext.buttons.bulkDelete = {
    className: 'buttons-delete',
    text: function text(dt) {
      return '<i class="fa fa-trash"></i> ' + dt.i18n('buttons.delete', 'Delete');
    },
    action: function action(e, dt, button, config) {
      var answer = confirm('Are you sure you want to delete this?');

      if (answer) {
        var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
        var selectedIdList = rows_selected.join(',');
        var selectAllFlag = window.selectAllLink ? 1 : 0;

        if (selectedIdList.length > 0) {
          if (window.selectAllLink) {
            selectedIdList = 0;
            window.selectAllLink = false;
          }

          Turbolinks.visit(window.location.href.replace(/\/+$/, "") + '/delete?ids=' + selectedIdList + '&all=' + selectAllFlag);
        } else {
          alert('No Row Selected !');
        }
      }
    }
  };
  DataTable.ext.buttons.bulkEnable = {
    className: 'buttons-enable',
    text: function text(dt) {
      return '<i class="fa fa-power-off "></i> ' + dt.i18n('buttons.enable', 'Enable');
    },
    action: function action(e, dt, button, config) {
      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var selectedIdList = rows_selected.join(',');
      var selectAllFlag = window.selectAllLink ? 1 : 0;

      if (selectedIdList.length > 0) {
        if (window.selectAllLink) {
          selectedIdList = 0;
          window.selectAllLink = false;
        }

        Turbolinks.visit(window.location.href.replace(/\/+$/, "") + '/enable?ids=' + selectedIdList + '&all=' + selectAllFlag);
      } else {
        alert('No Row Selected !');
      }
    }
  };
  DataTable.ext.buttons.bulkDisable = {
    className: 'buttons-disable',
    text: function text(dt) {
      return '<i class="fa fa-power-off "></i> ' + dt.i18n('buttons.disable', 'Disable');
    },
    action: function action(e, dt, button, config) {
      var rows_selected = $('.dataTableBuilder').DataTable().column(0).checkboxes.selected();
      var selectedIdList = rows_selected.join(',');
      var selectAllFlag = window.selectAllLink ? 1 : 0;

      if (selectedIdList.length > 0) {
        if (window.selectAllLink) {
          selectedIdList = 0;
          window.selectAllLink = false;
        }

        Turbolinks.visit(window.location.href.replace(/\/+$/, "") + '/disable?ids=' + selectedIdList + '&all=' + selectAllFlag);
      } else {
        alert('No Row Selected !');
      }
    }
  };
  DataTable.ext.buttons.selectedShow = {
    className: 'buttons-selected',
    text: function text(dt) {
      return 'Show Selected';
    },
    action: function action(e, dt, button, config) {
      window.isSelected = true;
      dt.draw();
    }
  };
 
}));
