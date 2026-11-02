function getNumbers() {
    let input = document.getElementById("numbers").value;

    return input.split(",").map(Number);
}

// 1. Find largest number
function findLargest() {
    let arr = getNumbers();

    if (arr.length === 0 || arr.some(isNaN)) {
        document.getElementById("result").textContent = "Enter valid numbers.";
        return;
    }

    let largest = Math.max(...arr);

    document.getElementById("result").textContent =
        "Largest Number: " + largest;
}

// 2. Reverse array
function reverseArray() {
    let arr = getNumbers();

    if (arr.length === 0 || arr.some(isNaN)) {
        document.getElementById("result").textContent = "Enter valid numbers.";
        return;
    }

    let reversed = arr.reverse();

    document.getElementById("result").textContent =
        "Reversed Array: " + reversed.join(", ");
}

// 3. Reverse string
function reverseString() {
    let text = document.getElementById("textInput").value;

    let reversed = text.split("").reverse().join("");

    document.getElementById("result").textContent =
        "Reversed String: " + reversed;
}

// 4. Check palindrome
function checkPalindrome() {
    let text = document.getElementById("textInput").value;

    let cleaned = text.toLowerCase().replace(/\s/g, "");

    let reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        document.getElementById("result").textContent =
            "It is a Palindrome.";
    } else {
        document.getElementById("result").textContent =
            "It is not a Palindrome.";
    }
}