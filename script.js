// Appends a value to the display input field
function Display(value) {
    // Concatenates the value to the current display
    document.getElementById('display').value += value; 
}

// Clears the display input field
function clearDisplay() {
    // Sets the display value to an empty string
    document.getElementById('display').value = ''; 
}

// Deletes the last character from the display input field
function deleteLastCharacter() {
    // Gets the display element
    const display = document.getElementById('display'); 
    // Removes the last character from the display value
    display.value = display.value.slice(0, -1); 
}

// Handles keyboard input for the calculator
function Myfun(event) {
    // Checks if the pressed key is a valid calculator input
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || 
        event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || 
        event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || 
        event.key == '/' || event.key == '*' || event.key == '%' || event.key == '=' || 
        event.key == '00' || event.key == '.') {
        
        document.getElementById('display').value += event.key;
    }
}

// Event listener for keyup events on the calculator
var cal = document.getElementById('calculator');
cal.onkeyup = function (event) {
    // Checks if the Enter key (key code 13) is pressed
    if (event.keyCode == 13) {
        console.log("enter"); // Logs "enter" to the console
        let x = document.getElementById('display').value; // Gets the current display value
        console.log(x); // Logs the current display value
        slove(); // Calls the solve function to evaluate the expression
    }
}

// Evaluates the expression in the display and updates the display with the result
function slove() {
    let x = document.getElementById('display').value; // Gets the current display value
    let result = math.evaluate(x); // Evaluates the expression using math.js
    document.getElementById('display').value = result; // Updates the display with the result
}