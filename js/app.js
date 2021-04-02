$(document).ready(function() {
    $('.p-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [{
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
            }
        }]


    });
});
var typed = new Typed('.type', {

    strings: ['Welcome to Code with Sahil.', 'We Provide You the best web designs', 'Learn css styles.', 'Web designs and more...', 'Thank You So Much For Visiting Our Website.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class')

})