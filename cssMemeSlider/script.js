const slides = document.querySelectorAll(".slides img");
const captions = [
  "Подпись к изображению 1",
  "Подпись к изображению 2",
  "Подпись к изображению 3",
  "Подпись к изображению 4",
];
const captionElement = document.querySelector(".caption");
const controlButtons = document.querySelectorAll(".control-btn");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  captions.forEach((caption, i) => {
    if (i === index) {
      captionElement.textContent = caption;
    }
  });
  controlButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = +button.dataset.index;
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
