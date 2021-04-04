burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
burger.addEventListener('click', () => {
    console.log("clicked")
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class')

})