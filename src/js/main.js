jQuery(document).ready(function ($) {
    //Loader
    setTimeout(function () {
        $('#loader').fadeOut('fast');
    }, 1000);

    //Scroll to Block 'our-advantages'
    $(".homepage-main__more-info__link").click(function () {
        $('html,body').animate({
            scrollTop: $(".our-advantages").offset().top - 240
        }, 1000);

    });

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
        slidesToScroll: 2
    });

    $('.our-graduates__items-wrapper').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4400,
        slidesToShow: 3,
        slidesToScroll: 2
    });
    //End Sliders

    //Scroll to top Btn
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});