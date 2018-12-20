import 'jquery-ui-sortable';
import 'formBuilder/dist/form-builder.min';
import 'formBuilder/dist/form-render.min';

// This is a workaround to handle the SPA nature of turbolinks
window.FormBuilderReady = true;
$(document).trigger('formbuilder.ready');
