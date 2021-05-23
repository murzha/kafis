jQuery(document).ready(function ($) {
    //Loader
    setTimeout(function () {
        $('#loader').fadeOut('fast');
    }, 1000)

    //Scroll to Block 'our-advantages'
    $(".homepage-main__more-info__link").click(function () {
        $('html,body').animate({
            scrollTop: $(".our-advantages").offset().top - $('.header').innerHeight()
        }, 1000);
    })

    // Sliders
    $('.homepage-main__slider').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        arrows: false,
    })

    $('.our-partners__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    rows: 3,
                }
            },
        ]
    })

    $('.our-graduates__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4400,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })
    //End Sliders

    //Scroll to top Btn
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').fadeIn().css('display', 'flex')
        } else {
            $('#return-to-top').fadeOut().css('display', 'none')
        }
    })

    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })

    //Header menu
    $(".dropdown-content .dropdown-item.dropdown").bind('hover',
        function () {
            $(".dropdown-content .dropdown-item.dropdown").removeClass("active")
            $(this).addClass("active")
        },
        function () {
            $(".dropdown-content .dropdown-item.dropdown").removeClass("active")
        }
    )

    //Mobile menu
    let hamburger = $('.menu__hamburger');
    let menuItems = $('.menu__items');
    let navBar = $('.nav');

    hamburger.on('click', function () {
        if (hamburger.hasClass('menu__hamburger-active') && menuItems.hasClass('menu__items__active')) {
            navBar.removeClass('nav__menu-active');
            hamburger.removeClass('menu__hamburger-active');
            menuItems.removeClass('menu__items__active');
            $('body').removeClass('disable-scroll');
            menuItems.parent().find('.dropdown-link').removeClass('active')
            menuItems.parent().find('.menu__link-mobile-arrow').removeClass('active')
            menuItems.parent().find('.dropdown-content').slideUp(300).delay(200);
        } else {
            navBar.addClass('nav__menu-active');
            hamburger.addClass('menu__hamburger-active');
            menuItems.addClass('menu__items__active');
            $('body').addClass('disable-scroll');
        }
    });

    $('.menu__link.dropdown .dropdown-link').on('click', function (event) {
        event.preventDefault();
        if ($(this).next('.dropdown-content').css('display') === 'none') {
            $(this).next('.dropdown-content').slideDown(300).delay(200);
            $(this).addClass('active');
            $(this).find('.menu__link-mobile-arrow').addClass('active')
        } else {
            $(this).next('.dropdown-content').slideUp(300).delay(200);
            $(this).removeClass('active');
            $(this).find('.menu__link-mobile-arrow').removeClass('active')
            $(this).parent().find('.dropdown-link').removeClass('active');
            $(this).parent().find('.dropdown-content').slideUp(300).delay(200);
        }
    });
})