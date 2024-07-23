//toggle
const menu = document.querySelector('#mobile-menu');  // mobile-men icon
const menuLinks = document.querySelector('.navbar__menu');   //navbar__menu
// Display Mobile Menu                     function
const mobileMenu = () => {
  menu.classList.toggle('is-active');

  menuLinks.classList.toggle('active');
};
// call   mobileMenu
console.log("hhh");
menu.addEventListener('click', mobileMenu);