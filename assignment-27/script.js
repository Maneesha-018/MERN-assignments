function cleanText() {
    let text = document.getElementById("userText").value;

    let cleaned = text.trim().replace(/\s+/g, " ");

    document.getElementById("result").textContent = cleaned;
}

function convertUpper() {
    let text = document.getElementById("userText").value;

    let cleaned = text.trim().replace(/\s+/g, " ").toUpperCase();

    document.getElementById("result").textContent = cleaned;
}

function convertLower() {
    let text = document.getElementById("userText").value;

    let cleaned = text.trim().replace(/\s+/g, " ").toLowerCase();

    document.getElementById("result").textContent = cleaned;
}