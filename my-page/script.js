//Fonction qui permet de changer le background color des div (message) en blanc quand on clique sur chacune des div, 
//si on refresh la page, le background reste dans le second état et si on double click, le background revient sur la première couleur
function changeBackgroundColor() {
    this.style.backgroundColor = 'rgb(255,255,255)';
    localStorage.setItem(this.id, 'rgb(255,255,255)');
    removeRedPoint()
}
function resetBackgroundColor() {
    this.style.backgroundColor = 'hsl(211, 68%, 94%)';
    localStorage.removeItem(this.id);
    removeRedPoint()
}
const divs = document.querySelectorAll('.message');
divs.forEach((div, i) => {
    div.id = `message-${i}`;
    const savedColor = localStorage.getItem(div.id);
    if (savedColor) {
        div.style.backgroundColor = savedColor;
    }
    div.addEventListener('click', changeBackgroundColor);
    div.addEventListener('dblclick', resetBackgroundColor);
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
        if (color === 'rgb(229, 239, 250)') {
            count ++;
        }
    })
    document.querySelector(".numberOfNotifications").innerText = count;
}

countNotificationsNotRead();

//Fonction qui permet de faire disparaître le bouton rouge quand le background de la div(message) est blanc
function removeRedPoint() {
    const divs = document.querySelectorAll('.message');
    divs.forEach(div => {
        let color = getComputedStyle(div).backgroundColor;
        let redPoints = div.querySelector(".redPoint");
        if (color !== 'rgb(229, 239, 250)') {
            redPoints.style.display = 'none';
        }
        else {
            redPoints.style.display = 'inline-block';
        }
    });
}
removeRedPoint()