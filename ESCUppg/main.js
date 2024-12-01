const header = document.querySelector('.header'); // Hämta header-elementet
menu_icon.classList.add('menu_icon'); // Lägg till klassen från HTML
menu_icon.textContent = '☰'; // Lägg till textinnehåll (menyikon)
header.append(menu_icon); // Lägg till knappen i headern

// Lägg till en event-lyssnare för att toggla en klass på <body> vid klick
menu_icon.addEventListener('click', () => {
  document.body.classList.toggle('body--menuOpen'); // Toggla en klass för öppet/stängt meny
});
