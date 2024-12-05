//Fonction qui permet de changer le background color des div (message) en blanc quand on clique sur chacune des div
function changeBackgroundColor() {
    this.style.backgroundColor = 'white'; 
}
const divs = document.querySelectorAll('.message');
divs.forEach(div => {
div.addEventListener('click', changeBackgroundColor);
});

//Fonction qui permet de changer le background color de toutes les div (message) en blanc quand on clique sur le bouton 'Mark all as read'
function readAll() {
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
});
}

const btn = document.querySelector('button');
btn.addEventListener("click", readAll);

//Fonction qui met en place un compteur pour voir le nombre de notifications non lues
function countNotificationsNotRead (){
    let count=0;
    divs.forEach(div =>{
        let color = getComputedStyle(div).backgroundColor;
        if (color === 'hsl(211, 68%, 94%)') {
            count++;
        }
    })
    document.querySelector(".numberOfNotifications").innerText = count;
}

countNotificationsNotRead();