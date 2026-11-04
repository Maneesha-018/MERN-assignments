
const result = document.getElementById("result");

// 1. Select element by ID
function selectById() {
    let heading = document.getElementById("heading");

    heading.style.color = "blue";
    result.textContent = "Element selected using getElementById()";
}

// 2. Select elements by Class
function selectByClass() {
    let paragraphs = document.getElementsByClassName("info");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.background = "lightgreen";
    }

    result.textContent = "Elements selected using getElementsByClassName()";
}

// 3. Select elements by Tag
function selectByTag() {
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }

    result.textContent = "Elements selected using getElementsByTagName()";
}

// 4. Select first matching element
function selectQuery() {
    let heading = document.querySelector("h1");

    heading.textContent = "Heading Changed Successfully!";
    result.textContent = "Element selected using querySelector()";
}

// 5. Select all matching elements
function selectAll() {
    let paragraphs = document.querySelectorAll(".info");

    paragraphs.forEach(function(item) {
        item.style.fontWeight = "bold";
        item.style.color = "purple";
    });

    result.textContent = "Elements selected using querySelectorAll()";
}
