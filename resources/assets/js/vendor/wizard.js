require('./jquery.bootstrap.wizard');

$(function () {
    $('#frontarea-register-tenant-process').keypress(function(e){
        if(e.keyCode === 13) {
            e.preventDefault();
            $('.next').click();
        }
    });

    $('#frontarea-register-tenant-process').bootstrapWizard({
        onNext: function (tab, navigation, index) {
            return $('#frontarea-register-tenant-process').valid();
        },
        onFinish: function onNext(tab, navigation, index) {
            $('#frontarea-register-tenant-process').submit();
        },
        onTabClick: function (tab, navigation, index, clickedIndex) {
            if (clickedIndex > index) {
                return $('#frontarea-register-tenant-process').valid();
            }
        }
    });

    $('#frontarea-register-member-process').keypress(function(e){
        if(e.keyCode === 13) {
            e.preventDefault();
            $('.next').click();
        }
    });

    $('#frontarea-register-member-process').bootstrapWizard({
        onNext: function (tab, navigation, index) {
            return $('#frontarea-register-member-process').valid();
        },
        onFinish: function onNext(tab, navigation, index) {
            $('#frontarea-register-member-process').submit();
        },
        onTabClick: function (tab, navigation, index, clickedIndex) {
            if (clickedIndex > index) {
                return $('#frontarea-register-member-process').valid();
            }
        }
    });
});
