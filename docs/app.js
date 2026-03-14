// app.js

// Select the form elements
const form = document.querySelector('form'); // Busca el primer form de la pàgina
const input = document.querySelector('input'); //Busca el primer input de la web
const result = document.createElement('p'); // Crea pàrraf en memòria
form.appendChild(result);

// Function to track container
function trackContainer(containerNumber) {
    // Simple validation
    if (!containerNumber) {
        return "⚠️ Please enter a container number!";
    }

    // Fake tracking response (you can later replace this with API call)
    return `📦 Container ${containerNumber} is currently at the port and ready for shipment.`;
}

// Handle form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const containerNumber = input.value.trim();
    const message = trackContainer(containerNumber);

    result.textContent = message; // show the message on the page
});
