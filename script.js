function nextPage() {
    window.location.href = "yes.html"; // เปลี่ยนหน้าไปยัง yes.html
}

function moveButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
