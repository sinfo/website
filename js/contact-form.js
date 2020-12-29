// TODO change me
const serverUrl = 'https://mailgunbot.sinfo.org';

(function ($, window, document, undefined) {
    'use strict';

    var $form = $('#contact-form');

    $form.submit(function (e) {
        var recaptchaCode = grecaptcha.getResponse(widgetId)

        if (recaptchaCode === '') {
            // if the div already exists
            if ($('#alert-message').length) {
                $('#alert-message').html('Please fill reCaptcha');
                $('#alert-message').attr('class', 'alert alert-danger');
            } else {
                $form.prepend('<div id="alert-message" class="alert alert-danger">Please fill reCaptcha</div>');
            }
        } else {
            // remove the error class
            $('.form-group').removeClass('has-error');
            $('.help-block').remove();

            // get the form data
            var formData = {
                'name' : $('input[name="form-name"]').val(),
                'email' : $('input[name="form-email"]').val(),
                'subject' : $('input[name="form-subject"]').val(),
                'message' : $('textarea[name="form-message"]').val(),
                'recaptcha' : recaptchaCode
            };

            var data = {}
            Object.assign(data, formData, { source: 'PARTNERS'} )

            // process the form
            $.ajax({
                type : 'POST',
                url  : serverUrl,
                data : data,
                dataType : 'json',
                encode : true
            }).done(function (data) {
                // handle errors
                if (!data.success) {
                    // if the div already exists
                    if ($('#alert-message').length) {
                        $('#alert-message').html('An error occurred');
                        $('#alert-message').attr('class', 'alert alert-danger');
                    } else {
                        $form.prepend('<div id="alert-message" class="alert alert-danger">An error occurred</div>');
                    }
                } else {
                    // display success message
                    // if the div already exists
                    if ($('#alert-message').length) {
                        $('#alert-message').html('Message sent');
                        $('#alert-message').attr('class', 'alert alert-success');
                    } else {
                        $form.prepend('<div id="alert-message" class="alert alert-success">Message sent</div>');
                    }
                }
            }).fail(function (data) {
                    // pretend everything is A okay
                    if ($('#alert-message').length) {
                        $('#alert-message').html('Message sent');
                        $('#alert-message').attr('class', 'alert alert-success');
                    } else {
                        $form.prepend('<div id="alert-message" class="alert alert-success">Message sent</div>');
                    }
                // for debug
                // console.log(data);
                e.preventDefault();
            });
        }

        e.preventDefault();
    });
}(jQuery, window, document));
