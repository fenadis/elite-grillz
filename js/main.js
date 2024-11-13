(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    $('#carousel-1').owlCarousel({
        items: 1,
        autoplay: true,           // Enables autoplay
        autoplayTimeout: 1500,     // Time interval between slides (3 seconds)
        autoplayHoverPause: true,  // Pauses autoplay on hover
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
            },
            600: {
                items: 1 // Show 1 item on medium screens
            },
            1000: {
                items: 1 // Show 1 item on larger screens
            }
        }
        // navText: [
        //     "<span><i class='fa fa-arrow-left'></i></span>", 
        //     "<span><i class='fa fa-arrow-right'></i></span>"
        // ],  // Custom text for navigation
        // Enables looping
    });
    

    $('#carousel-2').owlCarousel({
        items: 1,
        autoplay: true,           // Enables autoplay
        autoplayTimeout: 1500,     // Time interval between slides (3 seconds)
        autoplayHoverPause: true,  // Pauses autoplay on hover
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2 // Show 1 item on small screens
            },
            600: {
                items: 2 // Show 1 item on medium screens
            },
            1000: {
                items: 3 // Show 1 item on larger screens
            }
        }
        // navText: [
        //     "<span><i class='fa fa-arrow-left'></i></span>", 
        //     "<span><i class='fa fa-arrow-right'></i></span>"
        // ],  // Custom text for navigation
        // Enables looping
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



