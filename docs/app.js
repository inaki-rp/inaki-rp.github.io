// app.js

// Select the form elements
const form = document.querySelector('form'); // Busca el primer form de la pàgina
const input = document.querySelector('input'); //Busca el primer input de la web
const resultContainer = document.querySelector('#result-container'); //Agafa el div per posar comentaris

// Function to track container
function trackContainer(containerNumber) {
    // Simple validation
    if (!containerNumber) {
        return "Entra un número de contenidor";
    }

    // Fake tracking response (you can later replace this with API call)
    return `El contenidor ${containerNumber} està a port.`;
}

// Handle form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Per quedar-se en la mateixa pàgina

    const containerNumber = input.value.trim();
    const message = trackContainer(containerNumber);
    resultContainer.innerHTML = `<p>${message}</p>`; // appears under <hr>
});
