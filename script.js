// Toggle Mobile Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// Close menu on link click
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// WhatsApp Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp Number (Replace with your real number)
    let phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Example: "255712345678"

    // Create WhatsApp message
    let whatsappMessage = `Hello, my name is ${name}.%0A%0A
    📧 Email: ${email}%0A
    📞 Phone: ${phone}%0A
    📝 Subject: ${subject}%0A
    💬 Message: ${message}%0A%0A
    Please get back to me.`;

    // Redirect to WhatsApp
    let whatsappURL = `https://wa.me/${255765752918}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
});

// Learn More Button Functionality
document.getElementById("learn-more-btn").addEventListener("click", function() {
    let hiddenContent = document.getElementById("hidden-content");

    // Toggle visibility
    if (hiddenContent.classList.contains("visible")) {
        hiddenContent.classList.remove("visible");
        this.textContent = "Learn More"; // Change button text back
    } else {
        hiddenContent.classList.add("visible");
        this.textContent = "Show Less"; // Change button text when expanded
    }
});
