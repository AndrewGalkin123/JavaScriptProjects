const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
  currentIndex = index;
}

function prevSlide() {
  let index = currentIndex - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

function nextSlide() {
  let index = currentIndex + 1;
  if (index === slides.length) {
    index = 0;
  }
  showSlide(index);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);