let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let summary = document.getElementById("summary");

    summary.style.display = "block";

    summary.innerHTML = `
        <h3>Submission Summary</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
    `;

    form.reset();
});