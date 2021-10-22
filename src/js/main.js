jQuery(document).ready(function ($) {

    //Global variables
    let returnToTopBtn = $('#return-to-top')
    let hamburger = $('.menu__hamburger')
    let menuItems = $('.menu__items')
    let navBar = $('.nav')

    //Loader
    setTimeout(function () {
        $('#loader').fadeOut('fast')
    }, 1000)

    //Scroll to Block 'our-advantages'
    $(".homepage-main__more-info__link").click(function () {
        $('html,body').animate({
            scrollTop: $(".our-advantages").offset().top - $('.header').innerHeight()
        }, 1000)
    })

    // Sliders
    $('.homepage-main__slider').slick({
        autoplay: true,
        autoplaySpeed: 12000,
        dots: false,
        arrows: false,
    })

    $('.our-partners__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
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
        autoplaySpeed: 5200,
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
            if (!menuItems.hasClass('menu__items__active')) {
                returnToTopBtn.fadeIn().css({
                    'display': 'flex',
                    'position': 'fixed',
                })
            }
        } else {
            returnToTopBtn.fadeOut().css({
                'display': 'none',
                'position': 'unset',
            })
        }
    })

    returnToTopBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })
    //End Scroll to top Btn

    //Hiding return-to-top when mobile menu is opened
    hamburger.on('click', function () {
        if (!menuItems.hasClass('menu__items__active')) {
            returnToTopBtn.fadeOut().css({
                'display': 'none',
                'position': 'unset',
            })
        }
    })

    //Desktop menu
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
    function mobileMenu() {
        hamburger.on('click', function () {
            if (hamburger.hasClass('menu__hamburger-active') && menuItems.hasClass('menu__items__active')) {
                navBar.removeClass('nav__menu-active')
                hamburger.removeClass('menu__hamburger-active')
                menuItems.removeClass('menu__items__active')
                $('body').removeClass('disable-scroll')
                menuItems.parent().find('.dropdown-link').removeClass('active')
                menuItems.parent().find('.menu__link-mobile-arrow').removeClass('active')
                menuItems.parent().find('.dropdown-content').slideUp(300).delay(200)
            } else {
                navBar.addClass('nav__menu-active')
                hamburger.addClass('menu__hamburger-active')
                menuItems.addClass('menu__items__active')
                $('body').addClass('disable-scroll')
            }
        })

        $('.menu__link.dropdown .dropdown-link').on('click', function (event) {
            event.preventDefault()
            if ($(this).next('.dropdown-content').css('display') === 'none') {
                $(this).next('.dropdown-content').slideDown(300).delay(200)
                $(this).addClass('active')
                $(this).find('.menu__link-mobile-arrow').addClass('active')
            } else {
                $(this).next('.dropdown-content').slideUp(300).delay(200)
                $(this).removeClass('active')
                $(this).find('.menu__link-mobile-arrow').removeClass('active')
                $(this).parent().find('.dropdown-link').removeClass('active')
                $(this).parent().find('.dropdown-content').slideUp(300).delay(200)
            }
        })
    }

    if ($(window).width() < 768 || $(window).height() < 480) {
        mobileMenu()
    }

    $(window).resize(function () {
        if ($(window).width() < 768 || $(window).height() < 480) {
            mobileMenu()
        }
    })
    //End Mobile menu
})