(function ($) {

    $.fn.fullCalendarCortal = function(options) {

        // Override default settings
        var settings = $.extend({
            cortalBtnClass: '',
            cortalPanelClass: '',
            cortalPopupBreakPoint:480,
            editorModalDialogTitle:'New Event',
            cortalEditorCancelBtnText: 'Cancel',
            cortalEditorDeleteBtnText: 'Delete',
            cortalEditorSaveBtnText: 'Save',
            cortalEditorUpdateBtnText: 'Save changes',
            cortalEditorDeleteConfirmYesBtnText: 'Yes',
            cortalEditorDeleteConfirmNoBtnText: 'No',
            cortalEditorDeleteConfirmMsgText: 'Are you sure you want to delete this event?',
            cortalEditorDeleteConfirmTitle: 'Confirm',
            template:
                '<div class="panel cortal">'+
                    '<div class="panel-body">'+
                        '<div class="calendar"></div>'+
                    '</div>'+
                    '<div class="cortal-event-view-band"></div>'+
                '</div>'
        }, options);

        return this.each(function () {

            var $item = $(this);
            $item.html(settings.template);

            // Make sure
            var $calendar = $(this).find('.calendar').fullCalendar($.extend(settings, {

                select: function (start, end) {
                    handleCortalSelect(settings, $item, $calendar, start, end);
                },

                eventClick: function (cEvent, jsEvent, view) {
                    handleCortalEventClick(settings, $item, $calendar, cEvent, this, jsEvent, view);

                    return false;
                },

                loading: function (isLoading, view) {
                    if (isLoading) {
                        $('.cortal *[data-cortal-action=refresh]').addClass('fa-spin');
                        hideCortalViewBand($item);
                        hideCortalForms($calendar);
                    } else {
                        $('.cortal *[data-cortal-action=refresh]').removeClass('fa-spin');
                    }
                }
            }));

            $item.find('.cortal-event-view-band').hide();

            var $viewBtnLabel = $item.find('.btn-label');
            var updateTitle = function () {
                var view = $calendar.fullCalendar('getView');
                $item.find('.cortal-title').html(view.title);
                hideCortalViewBand($item);
                hideCortalForms($calendar);
            }

            //init title
            updateTitle();

            //init styles
            if (settings.cortalBtnClass !== '') {
                $item.find('.cortal-controls .btn').addClass(settings.cortalBtnClass);
            }

            if (settings.cortalPanelClass !== '') {
                $item.find('.cortal').addClass(settings.cortalPanelClass);
            }

            //init events
            $item.find('*[data-cortal-action="next-btn"]').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('next');
                updateTitle();
            });

            $item.find('*[data-cortal-action="prev-btn"]').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('prev');
                updateTitle();
            });

            $item.find('*[data-cortal-action="month-btn"]').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('changeView', 'month');
                $viewBtnLabel.html($(this).html());
                updateTitle();
            });

            $item.find('*[data-cortal-action="week-btn"]').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('changeView', 'agendaWeek');
                $viewBtnLabel.html($(this).html());
                updateTitle();
            });
            $item.find('*[data-cortal-action="day-btn"]').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('changeView', 'agendaDay');
                $viewBtnLabel.html($(this).html());
                updateTitle();
            });

            $item.find('*[data-cortal-action=refresh]').css('cursor', 'pointer').click(function (evt) {
                evt.preventDefault();
                $calendar.fullCalendar('removeEvents');
                $calendar.fullCalendar('refetchEvents');
            });

            $(window).resize(function () {
                // HideCortalViewBand($item);
                hideCortalForms($calendar, false);  // Do NOT hide modal, incase keyboard is shown on touch devices
            });
        });

        function handleCortalSelect(settings, $item, $calendar, start, end) {
            // Hide opened baned
            hideCortalViewBand($item);

            if(settings.cortalPopupBreakPoint && $(window).width() <= settings.cortalPopupBreakPoint ) {
                showCortalPopupForm(settings,$item, $calendar, start, end);
            }else{
                showCortalPopOverForm(settings, $item, $calendar, start, end);
            }


            //reset form
            $('.cortal-event-form')[0].reset('');

            $('.cal-event-add-close').css('cursor', 'pointer').click(function (evt) {
                $cell.popover('hide');
            });
            $cell = $('.fc-highlight , .fc-helper '); //popover only
            //init field values

            var sdate = $.fullCalendar.formatDate(start, settings.dateFormat);
            var edate = $.fullCalendar.formatDate(end, settings.dateFormat);
            var stime = $.fullCalendar.formatDate(start, settings.timeFormat);
            var etime = $.fullCalendar.formatDate(end, settings.timeFormat);

            $('.cortal-event-form input[name=sdate]').val(sdate);
            $('.cortal-event-form input[name=edate]').val(edate);
            $('.cortal-event-form input[name=stime]').val(stime);
            $('.cortal-event-form input[name=etime]').val(etime);

            $('input[name=stime]').timepicker({
                'showDuration': true,
                'timeFormat': 'g:ia'
            });

            $('input[name=etime]').timepicker({
                'showDuration': true,
                'timeFormat': 'g:ia'
            });

            $('input[name=sdate]').daterangepicker({
                'format': 'yyyy-mm-dd',
                'autoclose': true
            });

            $('input[name=edate]').daterangepicker({
                'format': 'yyyy-mm-dd',
                'autoclose': true
            });

            $('.duration').datepair();

            // form events
            $('.cortal-event-form input[name=isAllDay]').click(function (evt) {
                if ($(this).is(':checked')) {
                    //disable time selection
                    $('.cortal-event-form .timeInput').addClass('disabled').attr('disabled', 'disabled');
                } else {
                    //enable time selecion
                    $('.cortal-event-form .timeInput').removeClass('disabled').removeAttr('disabled');
                }
            });

            $('.cortal-event-form *[data-cortal-action=cancel]').click(function (evt) {
                evt.preventDefault();
                hideCortalForms($calendar);
            });

            // Handle form submition
            $('.cortal-event-form').submit(function (evt) {
                evt.preventDefault();

                $stime = $(this).find('input[name=stime]');
                $etime = $(this).find('input[name=etime]');
                $sdate = $(this).find('input[name=sdate]');
                $edate = $(this).find('input[name=edate]');
                $customer = $(this).find('select[name=customer]');
                $room = $(this).find('select[name=room]');

                $color = $(this).find('.active input[name=eventColor]');
                var isAllDay = $('.cortal-event-form input[name=isAllDay]').is(':checked');

                var stime = $stime.val();
                var etime = $etime.val();
                var sdate = $.fullCalendar.moment($sdate.val() + (isAllDay ? "" : " " + stime))
                var edate = $.fullCalendar.moment($sdate.val() + (isAllDay ? "" : " " + etime))

                if ($etime.val() !== '' && $edate.val().split('/').length === 3) {
                    edate = $.fullCalendar.moment($edate.val() + (isAllDay ? "" : " " + etime));
                }

                if ($event.val() !== '') {
                    var cEvent = {};

                    cEvent.start = sdate;
                    cEvent.end = edate;
                    cEvent.color = $color.val();
                    cEvent.title = $event.val();
                    cEvent.customer = $customer.val();
                    cEvent.room = $room.val();
                    cEvent.allDay = isAllDay;

                    if ($.isFunction(settings.cortalEventBeforeAdd)) {
                        if (settings.cortalEventBeforeAdd(cEvent) === true) {
                            $calendar.fullCalendar('renderEvent', cEvent, true);
                            //fire the event
                            if ($.isFunction(settings.cortalEventAdded)) {
                                settings.cortalEventAdded(cEvent);
                            }
                        }
                    } else {
                        $calendar.fullCalendar('renderEvent', cEvent, true);
                        //fire the event
                        if ($.isFunction(settings.cortalEventAdded)) {
                            settings.cortalEventAdded(cEvent);
                        }
                    }
                }

                // Hide popover
                hideCortalForms($calendar);
            });
        };

        function handleCortalEventClick(settings, $item, $calendar, cEvent, eventElement, jsEvent, view) {

            if (false && settings.cortalPopupBreakPoint && $(window).width() <= settings.cortalPopupBreakPoint) {
                showCortalPopupForm(settings, $item, $calendar, start, end);
            } else {
                //hide any opened popover
                hideCortalForms($calendar);

                $band = $item.find('.cortal-event-view-band');
                if ($band.find('.cortal-band-inner').length === 0) { // first time, create content
                    $band.append($('<div class="cortal-band-inner"></div>')
                        .css('position', 'relative').append(getFormHtml(settings, true))
                        .append('<a href="#" class="cortal-band-close-btn" data-cortal-action="hideBand"><i class="glyphicon glyphicon-remove-circle"></i></a>'));

                    $('.cortal-event-view-band *[data-cortal-action=hideBand]').click(function (evt) {

                        evt.preventDefault();
                        hideCortalViewBand($item);

                    });

                }

                var hide = $(window).height();
                hide = '-' + hide + 'px';

                if ($band.css('bottom') === '0px' && $band.is(':visible')) { // visible
                    $band.animate({bottom: hide, opacity: 0}, function () {
                        $band.animate({bottom: 0, opacity: 0.96});
                    });
                } else {

                    $band.css('bottom', hide).css('opacity', 0).show();
                    //updateFields
                    $band.animate({bottom: 0, opacity: 0.96});
                }
            }

            var sdate = $.fullCalendar.formatDate(cEvent.start, settings.dateFormat);
            var edate = $.fullCalendar.formatDate(cEvent.end || cEvent.start, settings.dateFormat);
            var stime = $.fullCalendar.formatDate(cEvent.start, settings.timeFormat);
            var etime = $.fullCalendar.formatDate(cEvent.end || cEvent.start, settings.timeFormat);
            var title = cEvent.title;
            var customer = cEvent.customer;
            var room = cEvent.room;
            var color = cEvent.color || '';
            //reset the form
            $('.cortal-event-form-edit')[0].reset('');
            $('.cortal-event-form-edit .timeInput').removeClass('disabled').removeAttr('disabled');

            $('.cortal-event-form-edit input[name=sdate]').val(sdate);
            $('.cortal-event-form-edit input[name=edate]').val(edate);
            $('.cortal-event-form-edit input[name=stime]').val(stime);
            $('.cortal-event-form-edit input[name=etime]').val(etime);
            $('.cortal-event-form-edit select[name=customer]').val(customer);
            $('.cortal-event-form-edit select[name=room]').val(room);

            // form events
            $('.cortal-event-form-edit input[name=isAllDay]').click(function (evt) {
                if ($(this).is(':checked')) {
                    //disable time selection
                    $('.cortal-event-form-edit .timeInput').addClass('disabled').attr('disabled', 'disabled');
                } else {
                    //enable time selecion
                    $('.cortal-event-form-edit .timeInput').removeClass('disabled').removeAttr('disabled');
                }
            });

            if (cEvent.allDay === true) {
                $('.cortal-event-form-edit input[name=isAllDay]').trigger('click');
            }

            //delete event
            $('.cortal-event-form-edit *[data-cortal-action=delete]').click(function (evt) {
                evt.preventDefault();
            }).popover({
                title: settings.cortalEditorDeleteConfirmTitle,
                html: true,
                content: '<p>' + settings.cortalEditorDeleteConfirmMsgText + '</p>' +
                '<a href="javascript:" class="btn btn-danger">' + settings.cortalEditorDeleteConfirmYesBtnText + '</a> ' +
                '<a href="javascript:" class="btn btn-default">' + settings.cortalEditorDeleteConfirmNoBtnText + '</a>',
                trigger: 'click',
                placement: 'top'

            }).on('shown.bs.popover', function () {
                var $popover = $(this);
                $(this).next('.popover').find('.btn-danger').click(function (e) {
                    handleCortalDelete(settings, $item, $calendar, cEvent, eventElement, jsEvent, view);
                    $popover.popover('hide');
                });
                $(this).next('.popover').find('a.btn-default').click(function (e) {
                    $popover.popover('hide');
                });
            });

            //handle form submition
            $('.cortal-event-form-edit').submit(function (evt) {
                evt.preventDefault();

                $stime = $(this).find('input[name=stime]');
                $etime = $(this).find('input[name=etime]');
                $sdate = $(this).find('input[name=sdate]');
                $edate = $(this).find('input[name=edate]');
                $customer = $(this).find('select[name=customer]');
                $room = $(this).find('select[name=room]');

                $color = $(this).find('.active input[name=eventColor]');
                var isAllDay = $('.cortal-event-form-edit input[name=isAllDay]').is(':checked');
                var sdate_arr = $sdate.val().split('/');

                var sdate = $.fullCalendar.moment($sdate.val() + ( isAllDay ? "" : " " + $stime.val()))
                var edate = $.fullCalendar.moment($sdate.val() + (isAllDay ? "" : " " + $etime.val()))

                if ($etime.val() !== '' && $edate.val().split('/').length === 3) {
                    var edate_arr = $edate.val().split('/');
                    edate = $.fullCalendar.moment($edate.val() + (isAllDay ? "" : " " + $etime.val()));
                }

                if ($event.val() !== '') {
                    cEvent.start = sdate;
                    cEvent.end = edate;
                    cEvent.color = $color.val();
                    cEvent.title = $event.val();
                    cEvent.customer = $customer.val();
                    cEvent.room = $room.val();
                    cEvent.allDay = isAllDay;

                    var dbEvent = {
                        id: cEvent.id,
                        start: $.fullCalendar.formatDate(sdate, 'yyyy-MM-dd HH:mm'),
                        end: $.fullCalendar.formatDate(edate, 'yyyy-MM-dd HH:mm'),
                        color: $color.val(),
                        title: $event.val(),
                        customer: $customer.val(),
                        room: $room.val(),
                        allDay: isAllDay
                    }

                    if ($.isFunction(settings.cortalEventBeforeUpdate)) {
                        if (settings.cortalEventBeforeUpdate(dbEvent) === true) {
                            $calendar.fullCalendar('updateEvent', cEvent);
                            if ($.isFunction(settings.cortalEventUpdated)) {
                                settings.cortalEventUpdated(dbEvent);
                            }
                        }
                    } else {
                        $calendar.fullCalendar('updateEvent', cEvent);
                        if ($.isFunction(settings.cortalEventUpdated)) {
                            settings.cortalEventUpdated(dbEvent);
                        }
                    }

                }

                hideCortalViewBand($item);

            });


        };

        function showCortalPopOverForm(settings, $item, $calendar, start, end) {
            //remove existing popovers
            $('.popover').remove();

            $cell = $('.fc-highlight , .fc-helper ');
            $cell.each(function () {
                $(this).popover({
                    //	title:'Add Event <b class="pull-right cal-event-add-close">&times</b>',
                    content: getFormHtml(settings),
                    html: true,
                    placement: 'auto',
                    container: $item,
                }).on('shown.bs.popover', function (evt) {
                    //fix arrow position when revealing more popover content! on day and week agenda views
                    $arrow = $('.cortal .popover .arrow');
                    if ($arrow.length > 0) $arrow.css('top', $arrow.position().top);
                });
                if ($(this).is(':visible')) $(this).popover('show');

            });
        }

        function showCortalPopupForm(settings, $item, $calendar, start, end) {
            initCortalModalDialogs(settings);
            //make sure default view is selected
            $('#cortalDialog .default-view').remove(); //important otherwise form start time and end time handling won't work as expected
            $('#cortalDialog .custom-view').show();
            $('#cortalDialog').modal('show');
        }

        function hideCortalForms($calendar, hideModal = true) {
            $('.popover').remove(); //force
            $('.fc-highlight , .fc-helper').popover('hide');

            if(hideModal) {
                $('#cortalDialog').modal('hide');
            }

            if ($calendar) {
                $calendar.fullCalendar('unselect')
            }
        }

        function hideCortalViewBand($item) {

            var hide = '-' + $(window).height() + 'px';
            $band = $item.find('.cortal-event-view-band');
            $band.animate({bottom: hide, opacity: 0}, function () {
                $(this).hide().html(''); //force form recreation, weird behaviour if not
            });

        }

        function handleCortalDelete(settings, $item, $calendar, cEvent, eventElement, jsEvent, view) {

            if ($.isFunction(settings.cortalEventBeforeRemove)) {
                if (settings.cortalEventBeforeRemove(cEvent) === true) {
                    $calendar.fullCalendar('removeEvents', function (evt) {
                        if (evt === cEvent) return true;
                        return false;
                    });
                    if ($.isFunction(settings.cortalEventRemoved)) {
                        settings.cortalEventRemoved(cEvent);
                    }
                }
            } else {
                $calendar.fullCalendar('removeEvents', function (evt) {
                    if (evt === cEvent) return true;
                    return false;
                });
                if ($.isFunction(settings.cortalEventRemoved)) {
                    settings.cortalEventRemoved(cEvent);
                }
            }

            hideCortalViewBand($item);
        }

        function getFormHtml(settings, isEditForm) {

            var htmlForm = '<form class="cortal-event-form' + (isEditForm === true ? '-edit' : '' ) + '">';

            htmlForm += '<div class="row"><div class="form-group col-xs-12"><label for="customer">Customer: </label><select id="customer" name="customer" class="form-control selec2" required="required"></select></div></div>';
            htmlForm += '<div class="row"><div class="form-group col-xs-12"><label for="room">Room: </label><select id="room" name="room" class="form-control selec2" required="required"></select></div></div>';
            htmlForm += '<div class="checkbox"><label><input name="isAllDay" type="checkbox">All day</label></div>';

            htmlForm += '<div class="duration">'
            htmlForm += '<label>Start:</label>';
            htmlForm += '<div class="row"><div class="form-group col-xs-6">';
            htmlForm += '<input name="sdate" type="text" class="form-control date start" placeholder="mm/dd/yyyy"></div>';
            htmlForm += '<div class="form-group col-xs-6"><input name="stime" type="text" class="form-control timeInput time start" placeholder="time" /></div></div>';

            htmlForm += '<label>End:</label><div class="row"><div class="form-group col-xs-6">';
            htmlForm += '<input name="edate" type="text" class="form-control date end" placeholder="mm/dd/yyy"></div>';
            htmlForm += '<div class="form-group col-xs-6"><input name="etime" type="text" class="form-control timeInput time end" placeholder="time" /></div></div>';
            htmlForm += '</div>'; //end of custom

            if (isEditForm) {
                htmlForm += '<button class="btn btn-primary pull-left" data-cortal-action="save">' + settings.cortalEditorUpdateBtnText + '</button>';
                htmlForm += '<button class="btn btn-danger pull-right" data-cortal-action="delete">' + settings.cortalEditorDeleteBtnText + '</button>';
            } else {
                htmlForm += '<button class="btn btn-primary" data-cortal-action="save">' + settings.cortalEditorSaveBtnText + '</button>';
                htmlForm += '<button class="btn btn-default pull-right" data-cortal-action="cancel">' + settings.cortalEditorCancelBtnText + '</button>';
            }
            htmlForm += '<div class="clearfix"></div>';
            htmlForm += '</form>';

            return htmlForm;
        }

        function initCortalModalDialogs(settings) {
            //force form regineration, wierd behaviour otherwise.
            if ($('#cortalDialog').length > 0) {
                $('#cortalDialog').find('.modal-body').html(getFormHtml(settings));
                return;
            }

            $('body').append(
                '<div aria-hidden="true" aria-labelledby="cortal-dialog" role="dialog" tabindex="-1" id="cortalDialog" class="modal fade">' +
                    '<div class="modal-dialog">' +
                        '<div class="modal-content">' +

                            '<div class="modal-header">' +
                                '<button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>' +
                                '<h4 id="myModalLabel" class="modal-title">' + settings.editorModalDialogTitle + '</h4>' +
                            '</div>' +

                            '<div class="modal-body">' +
                                getFormHtml(settings) +
                            '</div>' +

                        '</div><!-- /.modal-content -->' +
                    '</div><!-- /.modal-dialog -->' +
                '</div>');

        }
    }

}(jQuery))
