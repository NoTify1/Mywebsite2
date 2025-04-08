// signin.js
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-BKp6RXc93xPSQh9bO4MbGAuJTjA3EuM",
  authDomain: "notify-21996.firebaseapp.com",
  projectId: "notify-21996",
  storageBucket: "notify-21996.firebasestorage.app",
  messagingSenderId: "502972762939",
  appId: "1:502972762939:web:748f6604b3d6c4b543c51e",
  measurementId: "G-S475SM2XQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signin-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!email || !password) {
      alert("Please fill in both fields.");
      return;
  }

  // Sign in the user with Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Sign In successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard after successful sign-in
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
