
// ======================================
// CLIENT LOGIN VALIDATION
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get input values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Error elements
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const loginMessage = document.getElementById("loginMessage");
        const loginButton = loginForm.querySelector('button[type="submit"]');

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
        else if (password.length > 64) {
            passwordError.textContent = "Password must not exceed 64 characters.";
            isValid = false;
        }
        else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            passwordError.textContent = "Password must contain at least one letter and one number.";
            isValid = false;
        }

        // Check registered account
if (isValid) {

    const users = JSON.parse(localStorage.getItem("caseVaultUsers")) || [];

    const registeredUser = users.find(function (user) {
        return user.email === email.toLowerCase();
    });

    if (!registeredUser) {
        loginMessage.textContent = "Account not found. Please register first.";
        loginMessage.classList.add("text-danger");
    }
    else if (registeredUser.password !== password) {
        passwordError.textContent = "Incorrect password. Please try again.";
    }
    else {

        loginMessage.textContent = "Login successful! Redirecting...";
        loginMessage.classList.add("text-success");

        // Save logged-in user details
        localStorage.setItem("loggedInUser", JSON.stringify({
            fullName: registeredUser.fullName,
            email: registeredUser.email
        }));

        loginButton.disabled = true;

        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);
    }
}

    });

}


// ======================================
// ADMIN LOGIN VALIDATION
// ======================================

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get input values
        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value;

        // Error elements
        const emailError = document.getElementById("adminEmailError");
        const passwordError = document.getElementById("adminPasswordError");
        const loginMessage = document.getElementById("adminLoginMessage");
        const loginButton = adminLoginForm.querySelector('button[type="submit"]');

        // Clear previous errors
        emailError.textContent = "";
        passwordError.textContent = "";
        loginMessage.textContent = "";
        loginMessage.classList.remove("text-success");

        let isValid = true;

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Please enter your admin email.";
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
        else if (password.length > 64) {
            passwordError.textContent = "Password must not exceed 64 characters.";
            isValid = false;
        }
        else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            passwordError.textContent = "Password must contain at least one letter and one number.";
            isValid = false;
        }

        // If validation succeeds
        if (isValid) {

            loginMessage.textContent = "Login successful! Opening dashboard...";
            loginMessage.classList.add("text-success");

            loginButton.disabled = true;

            setTimeout(function () {
                window.location.href = "admin-dashboard.html";
            }, 1000);
        }

    });

}
