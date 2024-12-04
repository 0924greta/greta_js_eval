function changeBackgroundColor() {
    this.style.backgroundColor = 'white'; 
}
const divs = document.querySelectorAll('.message');
divs.forEach(div => {
div.addEventListener('click', changeBackgroundColor);
});

function readAll() {
    divs.style.backgroundColor = "white";
}

function readAll() {
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
});
}

const btn = document.querySelector('button');
btn.addEventListener("click", readAll);