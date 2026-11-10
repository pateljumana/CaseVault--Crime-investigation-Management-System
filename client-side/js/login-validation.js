
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const loginMessage = document.getElementById("loginMessage");

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";
    loginMessage.classList.remove("text-success");

    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Please enter your password.";
        isValid = false;
    }
    else if (password.length < 8) {
        passwordError.textContent = "Password must contain at least 8 characters.";
        isValid = false;
    }

    // If validation succeeds
    if (isValid) {

        loginMessage.textContent = "Login successful! Redirecting...";
        loginMessage.classList.add("text-success");

        // Redirect to client home page
        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);
    }

});
