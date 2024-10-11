console.log("Javascript funkar!");

// Deklarerar variabler 
let completedCount = 0;
const todoArray = [];    // Array som kommer att hålla alla sysslorna 


// Deklarera HTML- variabler  
const todoInput = document.querySelector("#todoInput");
const adding = document.getElementById("adding");
const todoList = document.querySelector("ul");
const infoText = document.querySelector("#infoText");
const countToDo = document.querySelector("#countToDo");
const label = document.querySelector('p');


// Lägg till ny syssla med "enter" på tangentbordet 
todoInput.addEventListener("keypress", function(event){  

    if(event.key == "Enter") {
        event.preventDefault();
        adding.click();
    }

});

//Uppdatera antalet färdiga sysslor 
function updateCompletedCountText() {

    if (completedCount === 0){

        countToDo.innerText = "0 genomförda";

    } else {
        countToDo.innerText = ` genomförda: ${completedCount}`;
    }

}

//Lägg till ny syssla 
adding.addEventListener("click", function() {  // Addera listener, innebär funktion som "svarar" på olika funktioner, i detta fall ett klick 
    const text = todoInput.value.trim(); // Få text från input. Deklareras här eftrsom att den inte syns när funktionen inte körs. 
    const infoText = document.querySelector('#infoText');

    if (text.length === 0) {
        infoText.innerText = "Du måste skriva något!"; 
       
        infoText.style.animation = 'none';
        infoText.offsetHeight; 
        infoText.style.animation = 'blinker 1s linear 3';
       
        return;   // Hoppar ur en funktion
    } else {
        infoText.innerText = "";
    }

    const formattedText = text [0].toUpperCase() + text.substring(1); //Ändrar så att allt som går in input får versal första bokstav
    todoInput.value = formattedText;
    
    const todoitem = document.createElement("li");  // Skapa ett nytt listobjekt (li)
    todoitem.classList.add("fade-in"); 
    todoList.appendChild(todoitem);   
    
    const itemLabel = document.createElement("span");  // Skapa en span för sysslan
    itemLabel.innerText = formattedText;
    todoitem.appendChild(itemLabel);  // Lägg till sysslan i li-elementet
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; 
    deleteButton.style.marginLeft = "10px";
    todoitem.appendChild(deleteButton); //Lägger till knapp i listobjekt

    //Radera syssla
    deleteButton.addEventListener("click", function(){
        if (todoitem.classList.contains("completed")) {
            completedCount--;
        }

        todoList.removeChild(todoitem);
        updateCompletedCountText();
});

//Markera som färdig/ofärdig

    itemLabel.addEventListener("click", function () {

        if (todoitem.classList.contains("completed")) {
            todoitem.classList.remove("completed");
            completedCount--;
           
        } else {
            todoitem.classList.add("completed");
            completedCount++;
      
        }
        

        updateCompletedCountText();
        

    });


    todoInput.value = "";
    todoArray.push(formattedText);


    
    
});


