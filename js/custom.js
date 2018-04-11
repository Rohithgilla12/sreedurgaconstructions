$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        var name = document.getElementById('inputName')
        var email = document.getElementById('inputEmail')
        var message = document.getElementById('inputMessage')
        var number = document.getElementById('inputContact')

        if (!name.value || !email.value || !message.value || !contact.value) {
            alertify.error("Please check your entries");
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: '//formspree.io/gillarohith@gmail1.com',
                data: $('#contact-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            alertify.success("Message sent");
        }
    });
});
/*--Show n hide meu--*/
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0)'

            });

        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59,0.7)',
                'border-color': '#444'
            });
            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });
            $('.navbar-nav > li > a').css({
                'padding-top': '15px'

            });


        }

    });
});

/*-- Smooth scrolling--*/
$(document).ready(function () {
    'use strict'
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});
$(document).ready(function () {
    'use strict'
    new WOW().init();
});

