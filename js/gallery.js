var typed = new Typed('.types', {

    strings: ['Welcome to Code with Sahil.', 'This is a Gallery Section.', 'Find Your Best design Here.', '3D styles and more...', 'Thank You So Much For Visiting Our Website.'],
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
    navbar.classList.toggle('nav-col');

    navlist.classList.toggle('v-class')

})