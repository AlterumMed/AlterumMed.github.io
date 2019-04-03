/*global $, document*/
/* ==========================================================================
Document Ready Function
========================================================================== */
$(document).ready(function () {

    'use strict';

    var emailReg, successmessage, failedmessage, username, useremail, usersubject, usermessage, isvalid, url;

    $('#contactform').submit(
		function nestocontact() {

            emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

			successmessage = "Thank you " + $('#name').val() + ", i will contact you shortly.";
			failedmessage = "There was a problem, please try again";
			username = $('#name');
			useremail = $('#email');
			usersubject = $('#subject');
			usermessage = $('#message');
			isvalid = 1;
			url = "php/contact-form/php/contact.php";

            if (username.val() === "") {
                $('#name').addClass('form-error');
                $('.form-message').html('Your name is required');
				return false;
			}

            if (useremail.val() === "") {
				$('#email').addClass('form-error');
                $('.form-message').html('Your email is required');
				return false;
			}
            var valid = emailReg.test(useremail.val());
            if (!valid) {
				$('#email').addClass('form-error');
                $('.form-message').html('Please enter a valid email');
                $('input[type=submit]', $("#contactform")).removeAttr('disabled');
				return false;
			}

            if (usersubject.val() === "") {
                $('#subject').addClass('form-error');
                $('.form-message').html('Your subject is required');
				return false;
			}

            if (usermessage.val() === "") {
                $('#message').addClass('form-error');
                $('.form-message').html('Your message is required');
				return false;
			}


            $.post(url, { username: username.val(), useremail: useremail.val(), usersubject: usersubject.val(), usermessage: usermessage.val(), isvalid: isvalid }, function (data) {

                if (data === 'success') {
					$('.form-message').html(successmessage);
					$('#name').val('');
					$('#email').val('');
					$('#subject').val('');
					$('#message').val('');
				} else {
					$('.form-message').html(failedmessage);
					return false;
				}

			});


		}

	);

    $('#name').focus(function () {
        $('#name').removeClass('form-error');
        $('.form-message').html('');

    });
    $('#email').focus(function () {
        $('#email').removeClass('form-error');
        $('.form-message').html('');
    });
    $('#subject').focus(function () {
        $('#subject').removeClass('form-error');
        $('.form-message').html('');
    });
    $('#message').focus(function () {
        $('#message').removeClass('form-error');
        $('.form-message').html('');
    });

});