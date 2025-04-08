document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    alert("Sign In successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard after successful sign-in
});
