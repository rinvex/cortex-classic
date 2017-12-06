(function ($) {

    $.fn.fullCalendarCortal = function(options) {

        // Override default settings
        var settings = $.extend({
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            template:
                '<div class="panel cortal">' +
                    '<div class="panel-body">' +
                        '<div class="calendar"></div>' +
                    '</div>' +
                '</div>'
        }, options);

        return this.each(function () {

            var $cortal = $(this);
            $cortal.html(settings.template);

            // Initialize FullCalendar
            var $calendar = $(this).find('.calendar').fullCalendar($.extend(settings, {

                // Handle view change and date range change
                viewDestroy: function (view, element) {
                    hideCortalForms($calendar);
                },

                // Handle calendar selection
                select: function (start, end) {
                    if(settings.cortalPopupBreakPoint && $(window).width() <= settings.cortalPopupBreakPoint) {
                        showCortalPopupForm(false);
                    } else {
                        // Remove existing popovers
                        $('.popover').remove();

                        // Catch selected cells
                        $cell = $('.fc-highlight, .fc-helper');

                        // Attach popovers
                        $cell.each(function () {
                            $(this).popover({
                                title:'<h4 class="modal-title">Booking<span class="pull-right cal-event-add-close">&times</span></h4>',
                                content: getFormHtml(),
                                html: true,
                                placement: 'auto',
                                container: $cortal,
                            }).on('shown.bs.popover', function (domEvent) {
                                // Fix arrow position when revealing more content
                                // Example: on day and week agenda views!
                                $arrow = $('.cortal .popover .arrow');

                                if ($arrow.length > 0) {
                                    $arrow.css('top', $arrow.position().top);
                                }
                            });

                            // Display popovers
                            if ($(this).is(':visible')) {
                                $(this).popover('show');
                            }
                        });

                        $('.cal-event-add-close').css('cursor', 'pointer').click(function (domEvent) {
                            $cell.popover('hide');
                        });
                    }

                    // Reset form
                    $('.cortal-event-form')[0].reset('');

                    // Initialize fields
                    var startDate = $.fullCalendar.formatDate(start, settings.dateFormat);
                    var endDate = $.fullCalendar.formatDate(end, settings.dateFormat);
                    var startTime = $.fullCalendar.formatDate(start, settings.timeFormat);
                    var endTime = $.fullCalendar.formatDate(end, settings.timeFormat);

                    $('.cortal-event-form input[name=start_date]').val(startDate);
                    $('.cortal-event-form input[name=end_date]').val(endDate);
                    $('.cortal-event-form input[name=start_time]').val(startTime);
                    $('.cortal-event-form input[name=end_time]').val(endTime);

                    bindFormFields();

                    // Toggle time selection
                    $('.cortal-event-form input[name=isAllDay]').click(function (domEvent) {
                        if ($(this).is(':checked')) {
                            $('.cortal-event-form .timeInput').addClass('disabled').attr('disabled', 'disabled');
                        } else {
                            $('.cortal-event-form .timeInput').removeClass('disabled').removeAttr('disabled');
                        }
                    });

                    if (! start.hasTime()) {
                        // If all-day cell selected, check `allDay` form option
                        $('.cortal-event-form input[name=isAllDay]').trigger('click');
                    }

                    // Bind cancel button action
                    $('.cortal-event-form *[data-cortal-action=cancel]').click(function (domEvent) {
                        domEvent.preventDefault();
                        hideCortalForms($calendar);
                    });

                    // Handle form submition
                    $('.cortal-event-form').submit(function (domEvent) {
                        domEvent.preventDefault();

                        // Get field values
                        var startTime = $(this).find('input[name=start_time]').val();
                        var endTime = $(this).find('input[name=end_time]').val();
                        var startDate = $(this).find('input[name=start_date]').val();
                        var endDate = $(this).find('input[name=end_date]').val();
                        var customerId = $(this).find('select[name=customer_id] option:selected').val();
                        var resourceId = $(this).find('select[name=resource_id] option:selected').val();
                        var isAllDay = $(this).find('input[name=isAllDay]').is(':checked');

                        // Create event object
                        var calendarEvent = {
                            editable: false,
                            id: Math.floor(Math.random() * 1000000),
                            className: $(this).find('select[name=resource_id] option:selected').attr('data-style'),
                            title: $(this).find('select[name=customer_id] option:selected').text() + ' (' + $(this).find('select[name=resource_id] option:selected').text() + ')',
                            start: $.fullCalendar.moment(startDate + (isAllDay ? '' : ' ' + startTime), settings.dateFormat + ' ' + settings.timeFormat),
                            end: $.fullCalendar.moment(endDate + (isAllDay ? '' : ' ' + endTime), settings.dateFormat + ' ' + settings.timeFormat),
                            customerId: customerId,
                            resourceId: resourceId,
                            allDay: isAllDay,
                        };

                        // Render event to the UI
                        $calendar.fullCalendar('renderEvent', calendarEvent, true);

                        // Save event to the backend
                        if ($.isFunction(settings.eventCreate)) {
                            settings.eventCreate($calendar, calendarEvent);
                        }

                        // Hide popover
                        hideCortalForms($calendar);
                    });
                },

                // Handle event click
                eventClick: function (calendarEvent, domEvent, view) {
                    if (settings.cortalPopupBreakPoint && $(window).width() <= settings.cortalPopupBreakPoint) {
                        showCortalPopupForm(true);
                    } else {
                        // Remove existing popovers
                        $('.popover').remove();

                        $(this).popover({
                            title:'<h4 class="modal-title">Booking<span class="pull-right cal-event-add-close">&times</span></h4>',
                            content: getFormHtml(true),
                            html: true,
                            placement: 'auto',
                            container: $cortal,
                        }).popover('show');
                    }

                    // Reset form
                    $('.cortal-event-form-edit')[0].reset('');

                    // Initialize fields
                    var startDate = $.fullCalendar.formatDate(calendarEvent.start, settings.dateFormat);
                    var endDate = $.fullCalendar.formatDate(calendarEvent.end || calendarEvent.start, settings.dateFormat);
                    var startTime = $.fullCalendar.formatDate(calendarEvent.start, settings.timeFormat);
                    var endTime = $.fullCalendar.formatDate(calendarEvent.end || calendarEvent.start, settings.timeFormat);
                    var customerId = calendarEvent.customerId;
                    var resourceId = calendarEvent.resourceId;

                    $('.cortal-event-form-edit input[name=id]').val(calendarEvent.id);
                    $('.cortal-event-form-edit input[name=start_date]').val(startDate);
                    $('.cortal-event-form-edit input[name=end_date]').val(endDate);
                    $('.cortal-event-form-edit input[name=start_time]').val(startTime);
                    $('.cortal-event-form-edit input[name=end_time]').val(endTime);
                    $('.cortal-event-form-edit select[name=customer_id]').val(customerId);
                    $('.cortal-event-form-edit select[name=resource_id]').val(resourceId);

                    bindFormFields();

                    // Toggle time selection
                    $('.cortal-event-form-edit input[name=isAllDay]').click(function (domEvent) {
                        if ($(this).is(':checked')) {
                            $('.cortal-event-form-edit .timeInput').addClass('disabled').attr('disabled', 'disabled');
                        } else {
                            $('.cortal-event-form-edit .timeInput').removeClass('disabled').removeAttr('disabled');
                        }
                    });

                    // Check allDay option and triger click
                    if (calendarEvent.allDay === true) {
                        $('.cortal-event-form-edit input[name=isAllDay]').trigger('click');
                    }

                    // Attach delete event
                    $('.cortal-event-form-edit *[data-cortal-action=delete]').click(function (domEvent) {
                        domEvent.preventDefault();
                    }).popover({
                        title: 'Confirm',
                        html: true,
                        content: '<p>Are you sure you want to delete this event?</p>' +
                        '<a href="javascript:" class="btn btn-danger">Yes</a> ' +
                        '<a href="javascript:" class="btn btn-default">No</a>',
                        trigger: 'click',
                        placement: 'top'
                    }).on('shown.bs.popover', function () {
                        var $popover = $(this);

                        $(this).next('.popover').find('.btn-danger').click(function (e) {
                            if ($.isFunction(settings.eventDelete)) {
                                settings.eventDelete($calendar, calendarEvent);
                            }

                            $popover.popover('hide');

                            // Hide popover
                            hideCortalForms($calendar);
                        });

                        $(this).next('.popover').find('a.btn-default').click(function (e) {
                            $popover.popover('hide');
                        });
                    });

                    // Handle form submition
                    $('.cortal-event-form-edit').submit(function (domEvent) {
                        domEvent.preventDefault();

                        // Get field values
                        var id = $(this).find('input[name=id]').val();
                        var startTime = $(this).find('input[name=start_time]').val();
                        var endTime = $(this).find('input[name=end_time]').val();
                        var startDate = $(this).find('input[name=start_date]').val();
                        var endDate = $(this).find('input[name=end_date]').val();
                        var customerId = $(this).find('select[name=customer_id] option:selected').val();
                        var resourceId = $(this).find('select[name=resource_id] option:selected').val();
                        var isAllDay = $(this).find('input[name=isAllDay]').is(':checked');

                        // Create event object
                        var calendarEvent = {
                            id: id,
                            className: $(this).find('select[name=resource_id] option:selected').attr('data-style'),
                            title: $(this).find('select[name=customer_id] option:selected').text() + ' (' + $(this).find('select[name=resource_id] option:selected').text() + ')',
                            start: $.fullCalendar.moment(startDate + (isAllDay ? '' : ' ' + startTime), settings.dateFormat + ' ' + settings.timeFormat),
                            end: $.fullCalendar.moment(endDate + (isAllDay ? '' : ' ' + endTime), settings.dateFormat + ' ' + settings.timeFormat),
                            customerId: customerId,
                            resourceId: resourceId,
                            allDay: isAllDay,
                        };

                        // Save event to the backend
                        if ($.isFunction(settings.eventUpdate)) {
                            settings.eventUpdate($calendar, calendarEvent);
                        }

                        // Hide popover
                        hideCortalForms($calendar);
                    });
                },

                eventResize: function(calendarEvent, delta, revertFunc) {
                    // Save event to the backend
                    if ($.isFunction(settings.eventUpdate)) {
                        settings.eventUpdate($calendar, calendarEvent);
                    }
                },

                eventDrop: function(calendarEvent, delta, revertFunc, domEvent, ui, view) {
                    // Handle moving events to/from all-day cells
                    if (! calendarEvent.end) {
                        calendarEvent.end = calendarEvent.start.clone();

                        if (! calendarEvent.start.hasTime()) {
                            // Event moved to all-day cell
                            calendarEvent.end.add(1, 'days');
                        } else {
                            // Event moved out from all-day cell
                            calendarEvent.end.add(1, 'hours');
                        }
                    }

                    // Save event to the backend
                    if ($.isFunction(settings.eventUpdate)) {
                        settings.eventUpdate($calendar, calendarEvent);
                    }
                },
            }));

            // Attach custom button events
            $cortal.find('*[data-cortal-action="next-btn"]').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('next');
            });

            $cortal.find('*[data-cortal-action="prev-btn"]').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('prev');
            });

            $cortal.find('*[data-cortal-action="month-btn"]').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('changeView', 'month');
            });

            $cortal.find('*[data-cortal-action="week-btn"]').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('changeView', 'agendaWeek');
            });

            $cortal.find('*[data-cortal-action="day-btn"]').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('changeView', 'agendaDay');
            });

            $cortal.find('*[data-cortal-action=refresh]').css('cursor', 'pointer').click(function (domEvent) {
                domEvent.preventDefault();
                hideCortalForms($calendar);
                $calendar.fullCalendar('removeEvents');
                $calendar.fullCalendar('refetchEvents');
            });

            $(window).resize(function () {
                hideCortalForms($calendar, false); // Do NOT hide modal, incase keyboard is shown on touch devices
            });
        });

        function hideCortalForms($calendar, hideModal = true) {
            $('.fc-highlight, .fc-helper').popover('hide');
            $calendar.fullCalendar('unselect');
            $('.popover').remove();

            if(hideModal) {
                $('#cortalDialog').modal('hide');
            }
        }

        function getFormHtml(isEditForm = false) {
            var htmlForm = '<form class="cortal-event-form' + (isEditForm === true ? '-edit' : '' ) + '">'+
                            '<input type="hidden" name="id" />';

            htmlForm += '<div class="row"><div class="form-group col-xs-12"><label for="customer_id">Customer: </label><select id="customer_id" name="customer_id" class="form-control select2" required="required">';
            $.each(settings.customers.responseJSON, function(customerKey, customerName) {
                htmlForm += '<option value="' + customerKey + '">' + customerName + '</option>';
            });
            htmlForm += '</select></div></div>';

            htmlForm += '<div class="row"><div class="form-group col-xs-12"><label for="resource_id">Resource: </label><select id="resource_id" name="resource_id" class="form-control select2" required="required">';
            $.each(settings.rooms.responseJSON, function(resourceKey, resourceObject) {
                htmlForm += '<option value="' + resourceObject.id + '" data-style="' + resourceObject.style + '">' + resourceObject.name + '</option>';
            });
            htmlForm += '</select></div></div>';

            htmlForm += '<div class="checkbox"><label><input name="isAllDay" type="checkbox">All day</label></div>';

            htmlForm += '<div class="duration">'
            htmlForm += '<label>Start:</label>';
            htmlForm += '<div class="row"><div class="form-group col-xs-6">';
            htmlForm += '<input name="start_date" type="text" class="form-control date start" placeholder="YYYY-MM-DD"></div>';
            htmlForm += '<div class="form-group col-xs-6"><input name="start_time" type="text" class="form-control timeInput time start" placeholder="time" /></div></div>';

            htmlForm += '<label>End:</label><div class="row"><div class="form-group col-xs-6">';
            htmlForm += '<input name="end_date" type="text" class="form-control date end" placeholder="YYYY-MM-DD"></div>';
            htmlForm += '<div class="form-group col-xs-6"><input name="end_time" type="text" class="form-control timeInput time end" placeholder="time" /></div></div>';
            htmlForm += '</div>'; //end of custom

            if (isEditForm) {
                htmlForm += '<button class="btn btn-primary pull-left" data-cortal-action="save">Save changes</button>';
                htmlForm += '<button class="btn btn-danger pull-right" data-cortal-action="delete">Delete</button>';
            } else {
                htmlForm += '<button class="btn btn-primary" data-cortal-action="save">Save</button>';
                htmlForm += '<button class="btn btn-default pull-right" data-cortal-action="cancel">Cancel</button>';
            }

            htmlForm += '<div class="clearfix"></div>';
            htmlForm += '</form>';

            return htmlForm;
        }

        function bindFormFields() {
            $('input[name=start_time]').timepicker({
                'showDuration': true,
                'timeFormat': 'g:i a'
            });

            $('input[name=end_time]').timepicker({
                'showDuration': true,
                'timeFormat': 'g:i a'
            });

            $('input[name=start_date]').datepicker({
                'format': 'yyyy-mm-dd',
                'autoclose': true
            });

            $('input[name=end_date]').datepicker({
                'format': 'yyyy-mm-dd',
                'autoclose': true
            });

            $('.duration').datepair();
        }

        function showCortalPopupForm(isEditForm) {
            // Force form regineration, wierd behaviour otherwise.
            if ($('#cortalDialog').length > 0) {
                $('#cortalDialog').find('.modal-body').html(getFormHtml(isEditForm));

                //make sure default view is selected
                $('#cortalDialog').modal('show');

                return;
            }

            $('body').append(
                '<div aria-hidden="true" aria-labelledby="cortal-dialog" role="dialog" tabindex="-1" id="cortalDialog" class="modal fade">' +
                    '<div class="modal-dialog">' +
                        '<div class="modal-content">' +

                            '<div class="modal-header">' +
                                '<button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>' +
                                '<h4 id="myModalLabel" class="modal-title">Booking</h4>' +
                            '</div>' +

                            '<div class="modal-body">' +
                                getFormHtml(isEditForm) +
                            '</div>' +

                        '</div><!-- /.modal-content -->' +
                    '</div><!-- /.modal-dialog -->' +
                '</div>');

            //make sure default view is selected
            $('#cortalDialog').modal('show');
        }
    }

}(jQuery));
