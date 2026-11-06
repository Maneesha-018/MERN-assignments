const profileCard = document.getElementById("profileCard");
const status = document.getElementById("status");
const message = document.getElementById("message");

const activeBtn = document.getElementById("activeBtn");
const highlightBtn = document.getElementById("highlightBtn");

// Activate and deactivate profile
activeBtn.addEventListener("click", function() {
    const isActive = profileCard.classList.toggle("active");

    status.classList.toggle("active", isActive);
    status.classList.toggle("inactive", !isActive);

    status.textContent = isActive ? "Active" : "Inactive";

    activeBtn.textContent = isActive
        ? "Deactivate Profile"
        : "Activate Profile";

    activeBtn.setAttribute("aria-pressed", isActive);

    message.textContent = isActive
        ? "Profile is now active."
        : "Profile is now inactive.";
});

// Highlight profile
highlightBtn.addEventListener("click", function() {
    const isHighlighted = profileCard.classList.toggle("highlight");

    highlightBtn.setAttribute("aria-pressed", isHighlighted);

    highlightBtn.textContent = isHighlighted
        ? "Remove Highlight"
        : "Highlight Profile";

    message.textContent = isHighlighted
        ? "Profile is highlighted."
        : "Profile highlight removed.";
});