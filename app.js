var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // Change slide every 4 seconds
      disableOnInteraction: true, // Enable autoplay even when user interacts with slides
      scrollbar: {
        hide: true,
      },
    },

  });
  
  function preventDefault(e) {
    e.preventDefault();
  }
  document.querySelector('.gallery').addEventListener('touchmove', preventDefault, { passive: false });






  //Language selection
  function changeLanguage(selectedValue) {
    // Redirect to the selected language page
    var currentPage = window.location.href;
    var newPage = currentPage.replace(/(\?lang=)[^&]+/, "$1" + selectedValue);
    window.location.href = newPage;
  }

  function changeLanguage(language) {
    const jsonPath = `./languages/${language}.json`;

    fetch(jsonPath)
      .then(response => response.json())
      .then(translation => {
        // Update the document with the translated values
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translation.hasOwnProperty(key)) {
            element.textContent = translation[key];
          }
        });
      })
      .catch(error => {
        console.error(`Failed to load translation file: ${jsonPath}`);
        console.error(error);
      });
  }