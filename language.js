// Function to change the language based on the selected language
function changeLanguage(lang) {
    fetch(`${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Update the text of elements in the navbar
        document.querySelectorAll('[data-i18n]').forEach((element) => {
          const key = element.dataset.i18n;
          if (data[key]) {
            element.innerText = data[key];
          }
        });

        // Update the language images
        document.querySelector('.languages').querySelectorAll('img').forEach((img, index) => {
          const keys = ["english", "spanish", "french"];
          if (data[keys[index]]) {
            img.alt = data[keys[index]];
          }
        });

        // Update the content of sections with translated data
        document.querySelectorAll('[data-i18n]').forEach((element) => {
          const key = element.dataset.i18n;
          if (data[key]) {
            element.innerText = data[key];
          }
        });
      })
      .catch((error) => console.error(error));
  }

  // Call the changeLanguage function to set the initial language (e.g., English)
  changeLanguage('en');

  // Add event listeners to the language images in the navbar
  document.querySelectorAll('.languages img').forEach((img) => {
    img.addEventListener('click', (event) => {
      const lang = event.target.alt.toLowerCase();
      changeLanguage(lang);
    });
  });