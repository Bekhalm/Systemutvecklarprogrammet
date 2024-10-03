console.log("Det funkar");



    const inputText = document.getElementById('inputText');

    inputText.addEventListener("keyup", function(event) {
        event.preventDefault();
        inputText.value = inputText.value.toUpperCase();


        console.log(inputText.value);

    });

