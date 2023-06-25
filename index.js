const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
    const span = document.createElement("span");
    body.appendChild(span);
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    const size = Math.random() * 100;
    span.style.width = size + "px";
    span.style.height = size + "px";
    setTimeout(() => {
        span.remove();
    }, 2000)
})

