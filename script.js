document.getElementById('signInForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Dummy login logic
  if (email && password) {
    alert('Signed in successfully!');
    // Redirect to dashboard or homepage if needed
    // window.location.href = "dashboard.html";
  } else {
    alert('Please enter valid credentials.');
  }
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const newEmail = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newEmail && newPassword) {
    alert('Account created! You can now sign in.');
    // Optional: store values or redirect
  } else {
    alert('Please fill out all fields.');
  }
});
