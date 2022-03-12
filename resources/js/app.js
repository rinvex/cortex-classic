/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Bind variables to window object
import 'expose-loader?exposes=$!expose-loader?exposes=jQuery!jquery';
import 'expose-loader?exposes=routes!../../public/js/routes';

// Mouse interaction
import 'jquery-mousewheel';
import 'jquery-slimscroll';

// Bootstrap
import 'bootstrap-sass';
import 'bootstrap-notify';

// Pickers
import 'mark.js';
import 'timepicker';
import 'datepair.js';
import 'bootstrap-colorpicker';
import 'fontawesome-iconpicker';
import 'bootstrap-daterangepicker';
import 'intl-tel-input/build/js/utils';
import './vendor/jquery-intl-tel-input';
import 'datepair.js/src/jquery.datepair';
import './vendor/bootstrap-popover-picker';

// Misc
import 'select2';
import './vendor/slugify';
import Hashids from 'hashids';
import Dropzone from 'dropzone';
import './vendor/jquery-validation';
import 'expose-loader?exposes=moment!moment';
import 'expose-loader?exposes=pluralize!pluralize';
import 'expose-loader?exposes=implicitForms!./vendor/jquery-implicitforms';

// Translations
import Lang from './vendor/lang';
import messages from '../../public/js/messages';
window.Lang = new Lang({ messages, fallback: 'en' });
window.hashids = new Hashids(
    process.env.MIX_HASHIDS_KEY,
    Number(process.env.MIX_HASHIDS_LENGTH),
    process.env.MIX_HASHIDS_ALPHABET
);

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    authEndpoint: routes.route('frontarea.broadcast'),
    forceTLS: true
});

// Theme
import 'admin-lte';

// Tinymce
import TinyMCE from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default';

import Turbolinks from 'turbolinks';
Turbolinks.start();

// Persist page scroll position
Turbolinks.scroll = {}
document.addEventListener('click', function(event) {
    if (event.target.getAttribute('data-turbolinks-scroll') !== 'false') return;
    Turbolinks.scroll.top = document.documentElement.scrollTop;
});

Dropzone.autoDiscover = false;

window.highlight_errored_accordion = function(){
    // Highlight errored accordion
    if (
        $('.panel-collapse:has(.has-error)').length &&
        $('.panel-collapse:has(.has-error)')
            .first().siblings()
            .find("a[data-parent='#accordion']").length &&
        $('.panel-collapse:has(.has-error)')
            .first().siblings()
            .find("a[data-parent='#accordion']")
            .hasClass('collapsed')
    ) {
        $('.panel-collapse:has(.has-error)')
            .first().siblings()
            .find("a[data-parent*='accordion']")
            .trigger('click');

        // @TODO: focus first errored field
    }

    if ($('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').length && $('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent*='accordion']").hasClass('collapsed')) {
        $('.panel-collapse:has(.has-error)').first().find('.panel-collapse:has(.has-error)').first().siblings().find("a[data-parent*='accordion']").trigger('click');
        // @TODO: focus first errored field
    }
};

window.highlight_required = function(){
    $('input, select, textarea').each(function(index, element) {
        if ($(element).prop('required') && ! $(element).closest('.form-group').find('label:first').find('.required-asterisk').length) {
            $(element)
                .closest('.form-group')
                .find('label:first')
                .append(' <span class="text-red required-asterisk">*</span>');
        }
    });
};

let sidebarScrolPosition = 0;


/**
 * The following block of code used to automatically register your module
 * app js code dynamically. It will recursively scan module directories
 * for the app js code and automatically register them respectively.
 *
 * Path: ./app/cortex/auth/resources/js/app.js
 * Code: `module.exports = function () {};`
 * Call: module('cortex/auth')();
 */

let CortexModule = {};
const files = require.context('../../app/', true, /app\.js$/i);
files.keys().forEach(function (key) {
    let segments = key.split('/');
    CortexModule[segments[1] + '/' + segments[2]] = files(key);
});

/**
 * Retrieve module JS.
 *
 * @param namespace
 *
 * @return {*}
 */
window.module = function (namespace) {
    return CortexModule[namespace];
};


window.addEventListener('turbolinks:load', function() {
    // Fake window onload trigger (dirty temp solution!)
    $(window).trigger('load');

    // Preserve sidebar scroll
    $('.sidebar').scroll(function() {
        sidebarScrolPosition = $('.sidebar').scrollTop();
    });

    $('.sidebar').animate({ scrollTop: sidebarScrolPosition }, 0);

    // This is a workaround to handle the SPA nature of turbolinks
    window.BookableRangeReady = true;
    $(document).trigger('bookablerange.ready');

    // Persist page scroll position
    if (Turbolinks.scroll.top) {
        document.documentElement.scrollTop = Turbolinks.scroll.top;
        Turbolinks.scroll = {};
    }

    // Initialize the tinymce
    TinyMCE.init({
        selector: '.tinymce',
        base_url: '/tinymce/',
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/ui/oxide/content.css',
        plugins: "image code emoticons fullscreen visualblocks preview table insertdatetime charmap directionality lists advlist anchor autosave codesample hr nonbreaking media pagebreak print save searchreplace tabfocus textpattern toc visualchars wordcount link autoresize",
        toolbar: [
            "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | formatselect fontselect fontsizeselect | forecolor backcolor",
            "undo redo | ltr rtl | bullist numlist outdent indent | hr anchor link image media | codesample charmap emoticons | removeformat preview code fullscreen",
        ],
        menubar: "file edit view insert format table tools",
        max_height: 500,
        branding: false,
    });

    // Initialize dropzone(s)
    $('.dropzone').dropzone({
        parallelUploads: 1,
        init: function() {
            this.on('queuecomplete', function(file) {
                window.location = routes.route(
                    window.Cortex.accessarea + '.' + window.location.pathname.split('/')[2] + '.index'
                );
            });

            this.on('addedfile', function(file) {
                this.options.acceptedFiles = $(this.element).attr('data-dz-accepted-files');
            });

            this.on('error', function(file, response) {
                $(file.previewElement)
                    .find('.dz-error-message')
                    .text(response.errors ? response.errors.file[0] : response);
            });
        },
    });

    // Phone field
    $('input[type="tel"]').intlTelInput({
        isValidNumber: true,
        hiddenInput: 'phone',
        initialCountry: 'auto',
        formatOnDisplay: false,
        autoPlaceholder: 'aggressive',
        preferredCountries: [],
        geoIpLookup: function(callback) {
            $.ajax({
                method: 'POST',
                data: {
                    _token: window.Laravel.csrfToken,
                },
                url: routes.route(window.Cortex.accessarea + '.country'),
                success: function(response) {
                    callback(response);
                },
            });
        },
    });

    $('input[type="tel"]').blur(function(event) {
        let phone = $(event.target);
        let formGroup = phone.closest('.form-group');
        let helpBlock = formGroup.find('.help-block');

        if ($.trim(phone.val())) {
            if (phone.intlTelInput('isValidNumber')) {
                formGroup.removeClass('has-error');
                helpBlock.addClass('hide');
            } else {
                formGroup.addClass('has-error');
                helpBlock.removeClass('hide');
            }
        }
    });

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

    // Linkable tabs
    let popState = false;
    let tabUrl = document.location.toString();

    // Match tab URL on first load
    if (tabUrl.match('#') && tabUrl.match(/\-tab/gi)) {
        $('.nav-tabs a[href="#' + tabUrl.split('#')[1] + '"]').tab('show');
    }

    // Match tab URL on back/forward
    window.onpopstate = function(e) {
        popState = true;
        tabUrl = document.location.toString();

        if (tabUrl.match('#') && tabUrl.match(/\-tab/gi)) {
            $('.nav-tabs a[href="#' + tabUrl.split('#')[1] + '"]').tab('show');
        }
    };

    // Save history on tab show
    $('.nav-tabs a').on('shown.bs.tab', function(e) {
        if (window.history.pushState && !popState) {
            history.pushState(null, null, e.target.hash);
        }

        popState = false;
    });

    // Slugify
    $('[data-slugify]').on('input', function(e) {
        if ($($(this).data('slugify')).val().length === 0) {
            $(this).on('keyup', function() {
                let input = $(this).data('slugify');
                let delimiter = $(this).data('slugify-delimiter');
                let slug = $(this)
                    .val()
                    .slugify(delimiter);
                $(input).val(slug);
            });
        }
    });

    // Bind Select2 menus
    $('.select2').select2({
        placeholder: 'Select Option',
    });

    // Configure datepicker
    $('.datepicker')
        .attr('readonly', true)
        .daterangepicker();

    // Configure timepicker
    $('.timepicker')
        .timepicker();

    // Handle file uploads inputs
    $('.file-name').on('click', function() {
        $(this)
            .parents('.input-group')
            .find(':file')
            .trigger('click');
    });

    $(':file').on('change', function() {
        let input = $(this);
        let numFiles = input.get(0).files ? input.get(0).files.length : 1;
        let label =
            numFiles > 1
                ? numFiles + ' files selected'
                : input
                      .val()
                      .replace(/\\/g, '/')
                      .replace(/.*\//, '');

        $(this)
            .parents('.input-group')
            .find(':text')
            .val(label);
    });

    // Handle dynamic form fields
    // @TODO: refactor and use JS templates
    $(document)
        .on('click', '.btn-add', function(e) {
            e.preventDefault();

            // Initialize required variables
            let controlForm = $('#attributes-tab');
            let currentEntry = $(this).parents('.entry:first');
            let newEntry = $(currentEntry.clone()).appendTo(controlForm);

            // Remove error message & style
            newEntry
                .removeClass('has-error')
                .find('.help-block')
                .remove();
            newEntry.find('input').val('');

            // Replace add/remove buttons
            controlForm
                .find('.entry:not(:last) .btn-add')
                .removeClass('btn-add')
                .addClass('btn-remove')
                .removeClass('btn-success')
                .addClass('btn-danger')
                .html('<span class="glyphicon glyphicon-minus"></span>');
        })
        .on('click', '.btn-remove', function(e) {
            e.preventDefault();
            $(this)
                .parents('.entry:first')
                .remove();
        });

    $('.modal.overlay').on('show.bs.modal', function(event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let modalBody = button.data('modal-body');
        let modalTitle = button.data('modal-title');
        let modalAction = button.data('modal-action');
        let modalButton = button.data('modal-button');

        let modal = $(this);
        modal.find('.modal-body').html(modalBody);
        modal.find('.modal-title').html(modalTitle);
        modal.find('.modal-button').replaceWith(modalButton);
        modal.find('a[data-form]').attr('href', modalAction);

        // Initialize implicit forms
        implicitForms.initialize();
    });

    // Build countries select menu
    function formatCountry(country_code) {
        if (!country_code.id) {
            return country_code.text;
        }

        let $country = $(
            '<span style="padding-right: 10px">' +
                country_code.emoji +
                '</span>' +
                '<span>' +
                country_code.text +
                '</span>'
        );

        return $country;
    }

    $("select[name*='country_code']")
        .select2({
            placeholder: 'Select a country',
            templateSelection: formatCountry,
            templateResult: formatCountry,
            data: window.countries ? window.countries : [],
        })
        .val(window.selectedCountry ? window.selectedCountry : '')
        .trigger('change');

    // Highlight errored wizard step
    if (
        $('.wizard-step:has(.has-error)').length &&
        $('.wizard-step:has(.has-error)')
            .first()
            .find("a[data-parent='#accordion']").length &&
        $('.wizard-step:has(.has-error)')
            .first()
            .find("a[data-parent='#accordion']")
            .hasClass('collapsed')
    ) {
        $('.wizard-step:has(.has-error)')
            .first()
            .find("a[data-parent='#accordion']")
            .trigger('click');

        // @TODO: focus first errored field
    }

    highlight_required();

    // Autogenerate passwords
    $(':password.autogenerate').val(Math.random().toString(36));
});

document.addEventListener('turbolinks:before-cache', function() {
    TinyMCE.remove();

    window.selectedCountry = null;
    window.selectedCountries = null;

    $('.select2')
        .select2()
        .each(function(i, item) {
            $(item).select2('destroy');
        });

    // $('.dataTableBuilder').each(function(i, item){
    //     $(item).DataTable().destroy();
    // });
});
