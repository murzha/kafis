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
        autoplay: false,
        autoplaySpeed: 7000,
        dots: false,
        arrows: false,
    })

    $('.our-partners__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
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
                    rows:3,
                }
            },
        ]
    })

    $('.our-graduates__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
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
    $(".dropdown-content .dropdown-item.dropdown").hover(
        function () {
            $(".dropdown-content .dropdown-item.dropdown").removeClass("active")
            $(this).addClass("active")
        },
        function () {
            $(".dropdown-content .dropdown-item.dropdown").removeClass("active")
        }
    )


    let hamburger = $('.menu__hamburger');
    let menuItems = $('.menu__items');
    let menuSubstrate = $('.menu__substrate');
    let navBar = $('.nav');
    // let logo = $('.menu__logo');

    hamburger.on('click', function () {
        // let position = logo.offset().left;
        // menuItems.css('padding-left', position + 'px');
        if (hamburger.hasClass('menu__hamburger-active')) {
            // navBar.removeClass('nav__menu-active');
            hamburger.removeClass('menu__hamburger-active');
            // menuSubstrate.removeClass('menu__substrate-active');
            // menuItems.removeClass('menu__items__active');
            // // logo.removeClass('menu__logo-active');
            // $('body').removeClass('disable-scroll');

        } else {
            // navBar.addClass('nav__menu-active');
            hamburger.addClass('menu__hamburger-active');
            // menuSubstrate.addClass('menu__substrate-active');
            // menuItems.addClass('menu__items__active');
            // // logo.addClass('menu__logo-active');
            // $('body').addClass('disable-scroll');
        }
    });
})