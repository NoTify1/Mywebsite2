document.getElementById('subscription-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the user inputs
    const service = document.getElementById('service').value;
    const lastRenewal = document.getElementById('last-renewal').value;
    const smsNotification = document.getElementById('sms-notification').checked;
    const emailNotification = document.getElementById('email-notification').checked;

    // Validate the inputs
    if (!service || !lastRenewal) {
        alert("Please select a subscription service and provide the last renewal date.");
        return;
    }

    // Get the user's name (you can customize this to grab the actual user's name from your system)
    const userName = "User";  // Change to fetch the actual name if needed

    // Display the confirmation message
    const responseMessage = document.getElementById('response-message');
    const subscriptionName = document.getElementById('subscription-name');
    const userNameElement = document.getElementById('user-name');

    // Set dynamic values for response message
    userNameElement.textContent = userName;
    subscriptionName.textContent = service;

    // Show the response message
    responseMessage.classList.remove('hidden');

    // Log the notification preferences (for now we just log it to the console)
    console.log("Service: " + service);
    console.log("Last Renewal Date: " + lastRenewal);
    console.log("SMS Notification: " + (smsNotification ? "Yes" : "No"));
    console.log("Email Notification: " + (emailNotification ? "Yes" : "No"));

    // You can handle the notification preferences here to integrate with backend services like Twilio or SendGrid
});
