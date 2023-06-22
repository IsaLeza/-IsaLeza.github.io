document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".project-slider");
  const slides = slider.querySelectorAll(".project-slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function navigateNext() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function navigatePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  }

  prevButton.addEventListener("click", navigatePrev);
  nextButton.addEventListener("click", navigateNext);

  showSlide(currentIndex);
});
