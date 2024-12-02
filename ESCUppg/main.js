document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu_icon');
  const hamMenu = document.querySelector('.ham_menu');

  if (menuIcon && hamMenu) {
      menuIcon.addEventListener('click', () => {
          hamMenu.classList.toggle('active');
          menuIcon.textContent = hamMenu.classList.contains('active') ? '✖' : '☰';
      });

      // Återställ vid skärmstorleksändring
      window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) {
              hamMenu.classList.remove('active');
              menuIcon.textContent = '☰';
          }
      });
  } else {
      console.error('menu_icon eller ham_menu kunde inte hittas');
  }
});
