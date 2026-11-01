
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function square(a) {
    return a * a;
}

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = document.getElementById("result");

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        result.innerHTML = "Please enter both numbers";
        return;
    }

    result.innerHTML =
        "Addition: " + add(num1, num2) + "<br>" +
        "Subtraction: " + subtract(num1, num2) + "<br>" +
        "Multiplication: " + multiply(num1, num2) + "<br>" +
        "Division: " + divide(num1, num2) + "<br>" +
        "Square of First Number: " + square(num1);
}
