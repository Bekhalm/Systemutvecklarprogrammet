console.log("Javascript funkar!");

// Deklarerar variabler 

let completedCount = 0;
const todoArray = [];    // Array som kommer att hålla alla sysslorna 


// Deklarera hmtl variabler  
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
        document.getElementById("adding").click();
    }

});


adding.addEventListener("click", function() {  // Addera listener, innebär funktion som "svarar" på olika funktioner, i detta fall ett klick 


    const text = todoInput.value.trim(); // Få text från input. Deklareras här eftrsom att den inte syns när funktionen inte körs. 

    if (text.length === 0) {
        infoText.innerText = "Du måste skriva något!"; 
        return;   // Hoppar ur en funktion
    }
    else {
        infoText.innerText = "";
    }

    const formattedText = text [0].toUpperCase() + text.substring(1); //Ändrar så att allt som går in input får versal första bokstav
    todoInput.value = formattedText;
    
    const todoitem = document.createElement("li");  // Skapa ett nytt listobjekt (li)
    todoList.appendChild(todoitem);   
    
    const itemLabel = document.createElement("span");  // Skapa en span för sysslan
    itemLabel.innerText = formattedText;
    todoitem.appendChild(itemLabel);  // Lägg till sysslan i li-elementet
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; 
    deleteButton.style.marginLeft = "10px";
    todoitem.appendChild(deleteButton); //Lägger till knapp i listobjekt

    deleteButton.addEventListener("click", function(){
        todoList.removeChild(todoitem);
    });


    itemLabel.addEventListener("click", function () {

        if(todoitem.getAttribute("class") == "completed"){
            
            todoitem.setAttribute("class", "")
            completedCount--;
        }
        else {
            todoitem.setAttribute("class", "completed")
            completedCount++;
            
        }
        
    countToDo.innerText = `Antalet färdiga sysslor:  ${completedCount}`;
        

    });


    todoInput.value = "";

    todoArray.push(text);


    
    
});


