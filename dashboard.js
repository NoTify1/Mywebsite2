document.getElementById('subscription-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let service = document.getElementById('service').value;
    let expiryDate = document.getElementById('expiry-date').value;

    if (service && expiryDate) {
        addSubscription(service, expiryDate);
    }
});

document.getElementById('logout').addEventListener('click', function () {
    alert("You have logged out!");
    window.location.href = "index.html"; // Redirect to landing page
});

function addSubscription(service, expiryDate) {
    const subscriptionList = document.getElementById("subscription-list");
    const newSubscription = document.createElement("li");
    newSubscription.innerText = `${service} - Expiry: ${expiryDate}`;
    subscriptionList.appendChild(newSubscription);
}
