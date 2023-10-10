const navbar = document.getElementById('navbar');
const endOfHero = document.getElementById('endOfHero');

document.addEventListener('DOMContentLoaded', () => {
  navbarColChange();
});

window.addEventListener('scroll', () => {
  navbarColChange();
});

function navbarColChange() {
  if (window.scrollY >= 1)
    navbar.classList.add('bg-white');
  else
    navbar.classList.remove('bg-white');
}

function sendToWhatsapp(_name = '', _message = '', btn = false) {
  var baseUrl = 'https://api.whatsapp.com/send/?phone=6281357749593';
  let waMsg = `&text=Permisi, 
Nama: ${_name}
Pesan: 
${_message}`;
  let urlText = encodeURIComponent(waMsg);

  let finalURL = !btn ? baseUrl + urlText : baseUrl;

  window.open(finalURL, '_blank');
}

function scrollTo(_el) {
  const el = document.getElementById(String(_el).toLowerCase());
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}