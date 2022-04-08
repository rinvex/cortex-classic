(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-buttons'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $.fn.dataTable.Buttons ) {
				require('datatables.net-buttons')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


$.extend( true, DataTable.Buttons.defaults, {
	dom: {
		container: {
			className: 'inline-flex flex-wrap divide-x :first-child:rounded-l-lg :last-child:rounded-r-md'
		},
		button: {
			className: 'p-2 text-sm font-small border border-1 text-gray-900 bg-gray-100 border-t shadow-sm border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'
		},
		collection: {
			tag: 'ul',
			className: 'bg-white rounded divide-y divide-gray-100 shadow',
			closeButton: false,
			button: {
				tag: 'li',
				className: 'block py-2 px-4 hover:bg-gray-100',
				active: 'bg-gray-300',
				disabled: 'disabled'
			},
			buttonLiner: {
				tag: 'a',
				className: ''
			}
		},
		splitWrapper: {
			tag: 'div',
			className: 'dt-btn-split-wrapper btn-group',
			closeButton: false,
		},
		splitDropdown: {
			tag: 'button',
			text: '&#x25BC;',
			className: 'btn btn-default dt-btn-split-drop dropdown-toggle',
			closeButton: false,
			align: 'split-left',
			splitAlignClass: 'dt-button-split-left'
		},
		splitDropdownButton: {
			tag: 'button',
			className: 'dt-btn-split-drop-button btn btn-default',
			closeButton: false
		}
	}
} );

DataTable.ext.buttons.collection.text = function ( dt ) {
	return dt.i18n('buttons.collection', 'Collection <span class="caret"/>');
};


return DataTable.Buttons;
}));
