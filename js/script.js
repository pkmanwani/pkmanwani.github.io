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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Call the function to load the footer
document.addEventListener("DOMContentLoaded", loadFooter);

