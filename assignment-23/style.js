
function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }
    return "";
}

function validateEmail(email) {
    if (email.trim() === "") {
        return "Email is required";
    }

    if (!email.includes("@") || !email.includes(".")) {
        return "Enter valid email";
    }

    return "";
}

function validateAge(age) {
    if (age === "" || age < 18) {
        return "Age must be 18 or above";
    }

    return "";
}

function validatePassword(password) {
    if (password.length < 6) {
        return "Password must have at least 6 characters";
    }

    return "";
}

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let errors = [];

    if (validateName(name)) {
        errors.push(validateName(name));
    }

    if (validateEmail(email)) {
        errors.push(validateEmail(email));
    }

    if (validateAge(age)) {
        errors.push(validateAge(age));
    }

    if (validatePassword(password)) {
        errors.push(validatePassword(password));
    }

    let result = document.getElementById("result");

    if (errors.length > 0) {
        result.innerHTML = errors.join("<br>");
        result.style.color = "red";
    } else {
        result.innerHTML = "Registration Successful!";
        result.style.color = "green";
    }
}
