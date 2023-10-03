const navbar = document.getElementById('navbar');
const endOfHero = document.getElementById('endOfHero');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1) {
    navbar.classList.add('bg-primary');
  } else {
    navbar.classList.remove('bg-primary');
  }
});
