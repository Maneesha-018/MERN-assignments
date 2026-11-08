// Reusable storage helper functions

function saveItem(key, value) {
    localStorage.setItem(key, value);
}

function getItem(key) {
    return localStorage.getItem(key);
}

function removeItem(key) {
    localStorage.removeItem(key);
}

function clearStorage() {
    localStorage.clear();
}

// Save data
function saveData() {
    let key = document.getElementById("keyInput").value.trim();
    let value = document.getElementById("valueInput").value;

    if (key === "" || value.trim() === "") {
        alert("Please enter key and value");
        return;
    }

    saveItem(key, value);
    document.getElementById("result").textContent = "Data saved successfully!";
}

// Get data
function getData() {
    let key = document.getElementById("keyInput").value.trim();
    let value = getItem(key);

    document.getElementById("result").textContent =
        value !== null ? "Value: " + value : "Data not found!";
}

// Remove data
function removeData() {
    let key = document.getElementById("keyInput").value.trim();

    removeItem(key);
    document.getElementById("result").textContent = "Data removed!";
}

// Clear all data
function clearData() {
    clearStorage();
    document.getElementById("result").textContent = "Storage cleared!";
}