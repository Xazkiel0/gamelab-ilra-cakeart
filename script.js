const navbarMobileToggle = document.querySelector('#dd-navbar-toggle');
const navbarMobileMenu = document.querySelector('#mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');

navbarMobileToggle.addEventListener('click', () => {
  navbarMobileMenu.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('fa-xmark');
});

console.log('script.js loaded');