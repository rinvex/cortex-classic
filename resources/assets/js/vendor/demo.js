$(function () {

    $calendar = $('div[data-calendar]');

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $calendar.fullCalendarCortal({
        cortalPanelClass: 'panel-primary',
        cortalBtnClass: 'btn-primary',
        selectable: true,
        selectHelper: false,
        unselectAuto: false,
        editable: true,
        disableResizing: false,
        defaultView: 'agendaDay',
        views: 'month, week, agendaDay, listYear,listMonth,listWeek,listDay',
        timeFormat: 'hh:mm a',
        dateFormat: 'YYYY-MM-DD',
        firstDay: 0,
        // selectOverlap: false,
        eventLimit: true,
        navLinks: true,
        eventLimitClick: 'popover',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listYear,listMonth,listWeek,listDay'
        },
        // events: 'ajaxdemo.php?action=calendar',
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1),
                backgroundColor: '#f56954', //red
                borderColor: '#f56954' //red
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                backgroundColor: '#f39c12', //yellow
                borderColor: '#f39c12' //yellow
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                backgroundColor: '#0073b7', //Blue
                borderColor: '#0073b7' //Blue
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                backgroundColor: '#00c0ef', //Info (aqua)
                borderColor: '#00c0ef' //Info (aqua)
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: '#00a65a', //Success (green)
                borderColor: '#00a65a' //Success (green)
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: '#3c8dbc', //Primary (light-blue)
                borderColor: '#3c8dbc' //Primary (light-blue)
            }
        ],

        cortalEventBeforeUpdate: function (eventObj) {
            //must return a boolean value
            //if you return false, cortalEventUpdated will not be called and the event won't be upadted in calendar
            //if you don't provide this callback, then event will be updated in the calendar and cortalEventUpdated will be called.
            return true;
        },

        cortalEventBeforeAdd: function (eventObj) {
            //must return a boolean value
            //if you return false, cortalEventAdded will not be called and the event won't be added to the calendar
            //if you don't provide this callback, then event will be add to the calendar and cortalEventAdded will be called.
            /************************/
            /**** good practive is to save the event in the database using ajax, the set the id of the event**********/
            /****************************/
            eventObj.id = (Math.random() * 588888) + 1; //this should come from the database :)
            return true;
        },
        cortalEventBeforeRemove: function (eventObj) {
            //must return a boolean value
            //if you return false, cortalEventRemoved will not be called and the event won't be removed from calendar
            //if you don't provide this callback, then event will be removed from the calendar and cortalEventRemoved will be called.
            return true;
        },

        cortalEventUpdated: function (updatedEventObj) {}, // Save event using Ajax!
        cortalEventAdded: function (updatedEventObj) {}, // Save event using Ajax!
        cortalEventRemoved: function (removeEventObj) {}, // Remove using Ajax!
        loading: function (bool) {},
        eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {},
        eventRender: function (event, element) {},
        viewDisplay: function (view) {},
        dayClick: function (date, allDay, jsEvent, view) {}
    });

});
