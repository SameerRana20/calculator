// js

const display= document.getElementById("display");

function num(input) {
    display.value+= input;
}

function clearvalue() {
    display.value= " " ;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch(error) {
        display.value="error";
    }
}
