// Create a text input. Allow users to enter characters in it. Show the count of characters you enter just below the input element. If the user enters more than 10 characters, change the color of the count to red.

const input = document.querySelector("#text-input")
const showOutput = document.querySelector("#output")
// var counter = 0;


// console.log(inputValue);
// console.log(inputLength);

input.addEventListener("change", () => {

    var inputValue = input.value;
    var inputLength = inputValue.length;
    var counter = Number(showOutput.innerText);
    showOutput.innerText = counter-inputLength;
    if(inputLength > 10)
    {
        input.style.color = "red";        
    }
    
})
