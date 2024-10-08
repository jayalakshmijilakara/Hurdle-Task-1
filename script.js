document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Input validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    if (name === "" || email === "" || message === "") {
        alert("Please Fill in all fields.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display success message
    document.getElementById("successMessage").style.display = "block";

    // Log data to console
    console.log({
        name: name,
        email: email,
        message: message
    });
});