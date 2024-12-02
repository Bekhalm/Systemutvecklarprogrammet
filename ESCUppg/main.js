document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu_icon");
    const closeButton = document.querySelector("#close_button");
    const hamMenu = document.querySelector(".ham_menu");
    const body = document.querySelector("body");

    // Öppna menyn
    menuIcon.addEventListener("click", () => {
        hamMenu.style.display = "block";
        menuIcon.style.display = "none";
        closeButton.style.display = "block";
        body.style.overflow = "hidden"; // Förhindra scroll
    });

    // Stäng menyn
    closeButton.addEventListener("click", () => {
        hamMenu.style.display = "none";
        menuIcon.style.display = "block";
        closeButton.style.display = "none";
        body.style.overflow = "auto"; // Tillåt scroll igen
    });
});
