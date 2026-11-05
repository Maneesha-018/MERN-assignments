function updateProfile() {
    let name = document.getElementById("name").value.trim();
    let course = document.getElementById("course").value.trim();
    let about = document.getElementById("about").value.trim();

    if (name === "" || course === "" || about === "") {
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("profileName").textContent =
        "Name: " + name;

    document.getElementById("profileCourse").textContent =
        "Course: " + course;

    document.getElementById("profileAbout").textContent =
        "About: " + about;

    alert("Profile updated successfully!");
}