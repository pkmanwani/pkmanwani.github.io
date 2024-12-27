document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement("p");
    message.textContent = "This message was added with JavaScript!";
    message.style.textAlign = "center";
    document.body.appendChild(message);
});

// Function to dynamically load the footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load the footer
document.addEventListener("DOMContentLoaded", loadFooter);

