document.addEventListener('mousemove', function (e) {
    let circle = document.getElementById('circle');
    let left = e.pageX;
    let top = e.pageY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
});

document.addEventListener('mousemove', function (e) {
    let circle = document.getElementById('circle');
    let left = e.pageX;
    let top = e.pageY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
});


function typing(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, speed);
}


document.addEventListener("DOMContentLoaded", function () {
    const h2Element = document.getElementById("typewriter");
    const textToType = h2Element.textContent;
    const typingSpeed = 100;

    h2Element.textContent = "";
    h2Element.style.visibility = "visible";

    typing(h2Element, textToType, typingSpeed);
});




//need to connect the fucntion with mouse active on area here
// document.addEventListener("DOMContentLoaded", function myFunction() {
//     const h2Element = document.getElementById("typewriter1");
//     const textToType = h2Element.textContent;
//     const typingSpeed = 100;

//     h2Element.textContent = "";
//     h2Element.style.visibility = "visible";

//     typing(h2Element, textToType, typingSpeed);
// });

// const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
// }


// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("typewriter1");
//             observer.unobserve(entry.target);
//         }
//     });
// }, options);


// const targetElement = document.getElementById("typewriter1");
// observer.observe(targetElement);