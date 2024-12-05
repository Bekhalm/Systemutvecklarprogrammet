document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu_icon");
    const closeButton = document.querySelector("#close_button");
    const hamMenu = document.querySelector(".ham_menu");

    // Öppna menyn
    menuIcon.addEventListener("click", () => {
        hamMenu.classList.add("open");
        menuIcon.style.display = "none";
        closeButton.style.display = "block";
        body.style.overflow = "hidden"; // Förhindra scroll
    });

    // Stäng menyn
    closeButton.addEventListener("click", () => {
        hamMenu.classList.remove("open"); 
        menuIcon.style.display = "block"; //Så att hamburgarikonen kommer tillbaka igen när man kryssat ner den
        body.style.overflow = "auto"; // Tillåt scroll igen
    });
});