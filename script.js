const sliderWrapper = document.querySelector('.slider-wrapper');
const body = document.querySelector('body');
const navSlide = document.querySelectorAll('.nav-slide');
const cardProductWidth = sliderWrapper.querySelector('.card-product').offsetWidth;

let isDragging = false, startX, startScrollLeft;

function productSlideBtnOff(scrollLeft) {
  if (scrollLeft <= 5) {
    document.getElementById('prev-btn').classList.add('off');
  } else {
    document.getElementById('prev-btn').classList.remove('off');
  }
  if (scrollLeft >= sliderWrapper.scrollWidth - sliderWrapper.offsetWidth - 5) {
    document.getElementById('next-btn').classList.add('off');
  }
  else {
    document.getElementById('next-btn').classList.remove('off');
  }
}
productSlideBtnOff(sliderWrapper.scrollLeft);

navSlide.forEach((navBtn) => {

  navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('off')) return;
    sliderWrapper.scrollLeft += navBtn.id === 'next-btn' ? cardProductWidth : -cardProductWidth;
    productSlideBtnOff(sliderWrapper.scrollLeft);
  })
})

const dragStart = e => {
  isDragging = true;
  sliderWrapper.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = sliderWrapper.scrollLeft;
}

const dragEnd = (e) => {
  isDragging = false;
  sliderWrapper.classList.remove('dragging');
  productSlideBtnOff(sliderWrapper.scrollLeft);
}

const dragging = e => {
  if (!isDragging) return;

  sliderWrapper.scrollLeft = startScrollLeft - (e.pageX - startX);


}

sliderWrapper.addEventListener('mousedown', dragStart);
sliderWrapper.addEventListener('mousemove', dragging);
body.addEventListener('mouseup', dragEnd);


function scrollTo(_el) {
  const el = document.getElementById(_el);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}