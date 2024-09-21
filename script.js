let myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function() {

    let heading = document.getElementById("greeting");

    if (heading.textContent === "Hello World!") {
    heading.textContent = "Goodbye World!" ;
}   else {

    heading.textContent = "Hello World!";

}


});