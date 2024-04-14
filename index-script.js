// declare html object pointer
const display = document.getElementById("display");

// function to add something to 'display'
function appendToDisplay(input){
    display.value += input;
}

// clears contents to display
function clearDisplay(){
    display.value = "";
}

// deletes last input (e.g. if 49 and presses DE, 9 will be removed.)
function deleteEntry(){
    display.value = display.value.slice(0,-1);
}

// negates value, assuming the input is number.
function negativePositive(){
    try{
        display.value = -display.value;
    } catch(error){
        display.value = "Error";
    }
}

// calculates result.
// note: eval() converts input from string to number.
function calculate(){

    // note: do a try-catch kay vulnerable daw ang eval() method.
    try{
        // checks if value is empty.
        if(display.value == "" || display.value == "????"){
            display.value = "????";
        } else {
            display.value = eval(display.value);
        }
    }
    catch(error){
        display.value = "Error";
    }
}