// Show sign-up page
function showSignUp() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('signUpPage').style.display = 'block';
}

// Show login page
function showLogin() {
  document.getElementById('signUpPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

// Handle login
document.getElementById('loginForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'block';
};

// Handle sign-up
document.getElementById('signUpForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('signUpPage').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'block';
};

// Handle notification form submission
document.getElementById('serviceForm').onsubmit = function(event) {
  event.preventDefault();
  const service = document.getElementById('service').value;
  const notificationMethod = document.getElementById('notificationMethod').value;
  alert(`You will receive notifications for ${service} via ${notificationMethod}.`);
};
