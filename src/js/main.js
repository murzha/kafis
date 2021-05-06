$('.homepage-main__slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    arrows: false,
})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 240,
        behavior: 'smooth'
    })
}

if (document.querySelector('.homepage-main__more-info__link')) {
    let button = document.querySelector('.homepage-main__more-info__link')
    let footer = document.querySelector('.our-advantages')

    button.addEventListener('click', (event) => {
        event.preventDefault()
        scrollTo(footer);
    })
}

window.onload = function () {
    setInterval(function thing() {
        document.getElementById("loader").style.display = 'none';
    }, 1200);
};