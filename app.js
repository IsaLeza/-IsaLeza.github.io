const menuIconTrigger = document.getElementById('menu-icon-trigger');
  const primaryMenu = document.querySelector('.primary-menu-menu');

  // Add a click event listener to the menu icon trigger
  menuIconTrigger.addEventListener('click', function () {
    // Toggle the 'active' class on the primary menu to show/hide it
    primaryMenu.classList.toggle('active');
  });