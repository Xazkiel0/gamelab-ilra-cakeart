const sliderWrapper = document.querySelector('.slider-wrapper');
const body = document.querySelector('body');
const navSlide = document.querySelectorAll('.nav-slide');
const cardProductWidth = sliderWrapper.querySelector('.card-product').offsetWidth;

let isDragging = false, startX, startScrollLeft;


navSlide.forEach((navBtn) => {
  console.log(navBtn);
  navBtn.addEventListener('click', () => {
    console.log(navBtn.id);
    sliderWrapper.scrollLeft += navBtn.id === 'next-btn' ? cardProductWidth : -cardProductWidth;
  })
})

const dragStart = e => {
  isDragging = true;
  sliderWrapper.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = sliderWrapper.scrollLeft;
  console.log(startX, startScrollLeft);
}

const dragEnd = (e) => {
  isDragging = false;
  sliderWrapper.classList.remove('dragging');

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