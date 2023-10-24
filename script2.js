AOS.init();

function sendToWhatsapp(_name = '', _message = '', btn = false) {
  var baseUrl = 'https://api.whatsapp.com/send/?phone=6281357749593';
  let waMsg = '&text=Permisi, Nama: ' + _name + 'Pesan:' + _message;
  let urlText = encodeURIComponent(waMsg);

  let finalURL = !btn ? baseUrl + urlText : baseUrl;

  window.open(finalURL, '_blank');
}

let swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // }
});

const navbar = document.getElementById('navbar');
const endOfHero = document.getElementById('endOfHero');


let cakes = {
  popularCakes: [
    {
      id: 'pop-1',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/39bf661e-bd42-44e7-baed-2cf007b867d1.jpeg',
      name: 'Sakura Cake',
      description: 'kue dengan dekorasi bunga sakura yang cantik diatasnya dengan tambahan batang pohon dari coklat.',
      price: 'Rp. 180.000,00',
      categories: ['Nature', 'Flower'],
    },
    {
      id: 'pop-2',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/842e12cd-5167-49d6-85b7-90f12a3df6a5.jpeg',
      name: 'Jelly Art Cake',
      description: 'kue dengan jelly sebagai bahan utama yang bisa juga dibuat sebagai tema laut atau rawa.',
      price: 'Rp. 180.000,00',
      categories: ['Kids', 'Jelly'],
    },
    {
      id: 'pop-3',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/4.jpeg',
      name: 'Romantic Cake',
      description: 'kue tema romantis yang biasa dibuat untuk acara pernikahan atau anniversary.',
      price: 'Rp. 170.000,00',
      categories: ['Romantic', 'Anniversary'],
    },
    {
      id: 'pop-4',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/5.jpeg',
      name: 'Books Cake',
      description: 'kue dengan tema buku yang biasa dibuat untuk teman atau keluarga yang menyukai buku.',
      price: 'Rp. 270.000,00',
      categories: ['Kids'],
    },
    {
      id: 'pop-5',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/6.jpeg',
      name: 'Car-themed Cake',
      description: 'kue dengan tema mobil yang biasa dibuat untuk anak-anak yang menyukai mobil.',
      price: 'Rp. 170.000,00',
      categories: ['Kids', 'Boy'],
    },
    {
      id: 'pop-6',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/7.jpeg',
      name: 'Anniversary Cake',
      description: 'kue dengan tema anniversary yang biasa dibuat khusus untuk acara anniversary.',
      price: 'Rp. 200.000,00',
      categories: ['Anniversary', 'Party'],
    },
    {
      id: 'pop-7',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/8.jpeg',
      name: 'Rustic Cake',
      description: 'Kue rustic bisa menjadi pilihan yang tepat untuk acara yang bertemakan natural yang sempurna untuk segala suasana.',
      price: 'Rp. 150.000,00',
      categories: ['Fresh', 'Nature'],
    },
    // {
    // id:'',
    //   imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/9.jpeg',
    //   name: 'Beach-themed Cake',
    //   description: 'kue yang dihias dengan tema pantai. Kue ini biasanya dibuat dengan warna-warna cerah yang menggambarkan suasana pantai.',
    //   price: 'Rp. 200.000,00',
    // categories: [],
    // },
    // {
    // id:'',
    //   imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/10.jpeg',
    //   name: 'Flower Cake',
    //   description: 'kue dengan hiasan berbagai macam bentuk dan warna bunga dengan tampilan cantik dan elegan.',
    //   price: 'Rp. 200.000,00',
    // categories: [],
    // },
  ],
  kidCakes: [
    {
      id: 'kid-1',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/hello_kitty/Hellokitty4.jpg',
      name: 'Hello Kitty',
      description: 'Kue ini dihias dengan karakter Hello Kitty yang lucu dan menggemaskan.',
      price: 'Rp. 160.000,00',
      categories: ['Kids', 'Girl'],
    },
    {
      id: 'kid-2',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/car/cartheme1.jpg',
      name: 'Car-themed Cake',
      description: 'kue dengan tema mobil yang biasa dibuat untuk anak-anak yang menyukai mobil.',
      price: 'Rp. 170.000,00',
      categories: ['Kids', 'Boy'],
    },
    {
      id: 'kid-3',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/construct/theme1.jpg',
      name: 'Construct-themed Cake',
      description: 'kue yang dihias dengan tema konstruksi seperti buldozer atau alat-alat berat yang biasa dilihat anak laki-laki.',
      price: 'Rp. 215.000,00',
      categories: ['Kids', 'Boy'],
    },
    {
      id: 'kid-4',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/frock_cake/Frock1.jpg',
      name: 'Frock Cake',
      description: 'Kue ini dihias dengan gaun putri yang cantik dan anggun untuk anak perempuan yang menyukai karakter princess.',
      price: 'Rp. 170.000,00',
      categories: ['Kids', 'Girl', 'Princess'],
    }
  ],
  cheesecakes: [
    {
      id: 'cheese-1',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/new_york/cheesecake1.jpg',
      name: 'New York Cheesecake',
      description: 'dessert yang lembut dan creamy, dengan rasa keju yang manis dan gurih.',
      price: 'Rp. 190.000,00',
      categories: ['Elegant'],
    },
    {
      id: 'cheese-2',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/strawberrywhipcream/cheesecake1.jpg',
      name: 'Strawberry Whipcream Cheesecake',
      description: 'dessert yang dihias dengan saus stroberi dan krim kocok dengan perpaduan rasa manis dan asam yang menyegarkan.',
      price: 'Rp. 230.000,00',
      categories: [],
    },
    {
      id: 'cheese-3',
      imgPath: 'https://gamelab-ilra-cakeart.vercel.app/all_cakes/basque_burn/cheesecake1.jpg',
      name: 'Basque Burn Cheesecake',
      description: 'dessert yang dipanggang pada suhu tinggi hingga bagian luarnya hangus dan legit dengan tekstur yang lembut dan creamy di bagian dalam.',
      price: 'Rp. 140.000,00',
      categories: [],
    },
  ],
  noCakes: [],
}


document.addEventListener('alpine:init', () => {
  Alpine.data('products_data', () => ({
    products: cakes.popularCakes,
    category: 'popularCakes',

    swapCake(_category) {
      this.products = [];
      setTimeout(() => {
        this.category = _category;
        this.products = cakes[_category];
      }, 500);
    },
    switchBtn(_category) {
      return this.category == _category ? 'active-product-switch' : 'inactive-product-switch'
    }
  }))
})

document.addEventListener('DOMContentLoaded', () => {
  navbarColChange();
});

window.addEventListener('scroll', () => {
  navbarColChange();
});


function navbarColChange() {
  if (window.scrollY >= 1) {
    navbar?.classList.add('bg-white');
  }
  else {
    navbar?.classList.remove('bg-white');
  }
}

function scrollTo(_el) {
  const el = document.getElementById(String(_el).toLowerCase());
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}