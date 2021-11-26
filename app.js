// Create a text input. Allow users to enter characters in it. Show the count of characters you enter just below the input element. If the user enters more than 10 characters, change the color of the count to red.

const input = document.querySelector("#text-input")
const counter = document.querySelector("#char-count")

// var charCounter = Number(counter.innerText);

input.addEventListener("input", () => {

    let inputValue = input.value.length;
    counter.innerText = inputValue;
    
    if(inputValue < 10)
    {
        input.style.backgroundColor = "white"; 
        counter.style.color = "black";      
    }
    else {
        input.style.backgroundColor = "Red"; 
        counter.style.color = "red";
    }
    
})
