document.addEventListener("DOMContentLoaded", function () {

    const text = "Education opens the mind and strengthens the soul. Knowledge lights the path to a better future";
    const container = document.getElementById("typingText");

    if (!container) return;

    container.innerHTML = "";
    container.classList.add("typing");

    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = index * 0.05 + "s";
        container.appendChild(span);
    });

});
