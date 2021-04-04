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
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]



    });
});
var typed = new Typed('.type', {

    strings: ['Welcome to Code with Sahil.', 'We Provide You the best web designs', 'Learn css styles.', 'Web designs and more...', 'Thank You So Much For Visiting Our Website.'],
    typeSpeed: 20,
    backSpeed: 5,
    loop: true,
});


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
burger.addEventListener('click', () => {
    console.log("clicked")
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class')

})
