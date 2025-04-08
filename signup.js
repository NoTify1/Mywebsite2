// Import Firebase dependencies
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration (ensure you use your own credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('signup-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        // Save user data to Firestore
        await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            password: password, // You might want to hash the password before storing it for security reasons
        });

        alert("Sign Up successful!");

        // Redirect to sign-in page after successful sign-up
        window.location.href = "sign-in.html"; 
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error creating your account.");
    }
});
