let darkMode = document.getElementById("darkMode");
let notifications = document.getElementById("notifications");
let saveBtn = document.getElementById("saveBtn");
let message = document.getElementById("message");

// Load saved settings
let settings = JSON.parse(localStorage.getItem("settings"));

if (settings) {
    darkMode.checked = settings.darkMode;
    notifications.checked = settings.notifications;
}

// Apply saved theme
function applySettings() {
    document.body.classList.toggle("dark", darkMode.checked);
}

applySettings();

// Save settings
saveBtn.addEventListener("click", function() {

    let settings = {
        darkMode: darkMode.checked,
        notifications: notifications.checked
    };

    localStorage.setItem("settings", JSON.stringify(settings));

    applySettings();

    message.textContent = "Settings saved successfully!";
});