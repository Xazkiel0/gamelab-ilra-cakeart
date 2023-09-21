const navbarMobileToggle = document.querySelector('#dd-navbar-toggle');
const navbarMobileMenu = document.querySelector('#mobile-menu');

navbarMobileToggle.addEventListener('click', () => {
  navbarMobileMenu.classList.toggle('hidden');
});

console.log('script.js loaded');