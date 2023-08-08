//the function that makes the words appear one by one:
function typing(element, text, speed) {
    // preventdefault();
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, speed);
}

//the text that is being typed - only the first part:
document.addEventListener("DOMContentLoaded", function () {
    // preventdefault();
    const h2Element = document.getElementById("typewriter");
    const textToType = h2Element.textContent;
    const typingSpeed = 60;

    h2Element.textContent = "";
    h2Element.style.visibility = "visible";

    typing(h2Element, textToType, typingSpeed);

});










