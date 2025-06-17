let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.description-text');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  texts.forEach((text, i) => {
    text.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000); // toutes les 3 secondes


function carousel(slidesClass) {
    const slides = document.querySelectorAll(`.${slidesClass}`);
    let index = 0;
    setInterval(() => {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      index = (index + 1) % slides.length;
    }, 3000);
  }
  
  carousel('slide-chambre');
  carousel('slide-resto');
  carousel('slide-piscine');