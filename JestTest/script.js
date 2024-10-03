console.log("Det funkar");


function turnIntoVersaler(inputText){
    return inputText.toUpperCase ();
}


const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');
    

convertButton.addEventListener("click", function() {

    inputText.value = turnIntoVersaler(inputText.value)

});

