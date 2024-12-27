document.addEventListener("DOMContentLoaded", () => {
    const message = document.createElement("p");
    message.textContent = "This message was added with JavaScript!";
    message.style.textAlign = "center";
    document.body.appendChild(message);
});
