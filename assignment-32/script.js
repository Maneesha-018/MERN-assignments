
const profile = {
    name: "Maneesha",
    course: "BCA AI",
    university: "Invertis University",
    skills: "HTML, CSS, JavaScript",
    city: "Dhanbad"
};

// Show object keys
function showKeys() {
    let keys = Object.keys(profile);

    document.getElementById("result").innerHTML =
        "<h3>Profile Keys</h3>" + keys.join("<br>");
}

// Show object values
function showValues() {
    let values = Object.values(profile);

    document.getElementById("result").innerHTML =
        "<h3>Profile Values</h3>" + values.join("<br>");
}

// Show object entries
function showEntries() {
    let entries = Object.entries(profile);

    let output = "<h3>Profile Details</h3>";

    entries.forEach(function(item) {
        output += `
            <div class="profile-item">
                <b>${item[0]}:</b> ${item[1]}
            </div>
        `;
    });

    document.getElementById("result").innerHTML = output;
}
