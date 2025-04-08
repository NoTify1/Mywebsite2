document.getElementById('subscription-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const service = document.getElementById('service').value;
  const lastRenewal = document.getElementById('last-renewal').value;
  const smsNotification = document.getElementById('sms-notification').checked;
  const emailNotification = document.getElementById('email-notification').checked;

  if (!service || !lastRenewal) {
    alert("Please select a subscription service and provide the last renewal date.");
    return;
  }

  const userName = "User";

  const responseMessage = document.getElementById('response-message');
  const subscriptionName = document.getElementById('subscription-name');
  const userNameElement = document.getElementById('user-name');

  userNameElement.textContent = userName;
  subscriptionName.textContent = service;

  responseMessage.classList.remove('hidden');

  console.log("Service: " + service);
  console.log("Last Renewal Date: " + lastRenewal);
  console.log("SMS Notification: " + (smsNotification ? "Yes" : "No"));
  console.log("Email Notification: " + (emailNotification ? "Yes" : "No"));
});
