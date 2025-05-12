import { addUserToBlob, fetchUsersFromBlob } from "./blob.js";

document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");
    const nameGroup = document.getElementById("name-group");
    const authTitle = document.getElementById("auth-title");
    const toggleLink = document.getElementById("toggle-link");
    const toggleAuthModeText = document.getElementById("toggle-auth-mode");

    let isSignUpMode = false;

    // Toggle between Sign In and Sign Up modes
    toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        isSignUpMode = !isSignUpMode;

        if (isSignUpMode) {
            authTitle.textContent = "Sign Up";
            nameGroup.style.display = "block";
            toggleAuthModeText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Sign In</a>`;
        } else {
            authTitle.textContent = "Sign In";
            nameGroup.style.display = "none";
            toggleAuthModeText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
        }
    });

    authForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const isOp = confirm("Should this user have OP privileges?");

        if (!email || !password) {
            alert("Email and password are required!");
            return;
        }

        if (isSignUpMode) {
            // Sign-Up logic
            const newUser = { name, email, password, role: isOp ? "op" : "user" };
            await addUserToBlob(newUser);
            alert("Sign-up successful!");
        } else {
            // Sign-In logic
            const users = await fetchUsersFromBlob();
            const existingUser = users.find((user) => user.email === email && user.password === password);

            if (!existingUser) {
                alert("Invalid email or password. Please try again.");
                return;
            }

            alert(`Welcome back, ${existingUser.name}!`);
        }

        // Redirect to home page
        window.location.href = "index.html";
    });
});