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
  


  document.addEventListener("DOMContentLoaded", function () {
    var chapterHeaders = document.querySelectorAll('.chapter-header');

    function updateStickyHeaders() {
      var scrollY = window.scrollY || window.pageYOffset;

      for (var i = chapterHeaders.length - 1; i >= 0; i--) {
        var headerOffset = chapterHeaders[i].offsetTop;

        if (scrollY >= headerOffset) {
          chapterHeaders.forEach(header => header.classList.remove('active'));
          chapterHeaders[i].classList.add('active');
          break;
        }
      }
    }

    window.addEventListener('scroll', updateStickyHeaders);
    window.addEventListener('resize', function () {
      chapterHeaders.forEach(header => header.classList.remove('active'));
      updateStickyHeaders();
    });
  });