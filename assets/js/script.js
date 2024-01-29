document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const dropdown = document.querySelector('.dropdown');
  
    // Toggle the 'active' class when the burger icon is clicked
    burgerMenu.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  
    // Close the menu when clicking anywhere outside the menu or its button
    document.addEventListener('click', (event) => {
      const isBurgerMenu = burgerMenu.contains(event.target);
      const isDropdown = dropdown.contains(event.target);
  
      if (!isBurgerMenu && !isDropdown) {
        dropdown.classList.remove('active');
      }
    });
  });
  