let notArray = [];
const divNot = Array.from(document.querySelectorAll('.not'));
const divNotWithImg = Array.from(document.querySelectorAll('.not-with-img'));
const divNotWithComment = Array.from(document.querySelectorAll('.not-with-comment'));
const button = document.querySelector('button');

function AddDivInMyArray(array) {
    for (let index = 0; index < array.length; index++) {
        notArray.push(array[index]);
    }
}

AddDivInMyArray(divNot);
AddDivInMyArray(divNotWithComment);
AddDivInMyArray(divNotWithImg);


function UpdataStatusNotification(){
    let counter = 0;
    for (let index = 0; index < notArray.length; index++) {
        if (notArray[index].getAttribute('status') === "unread"){
            notArray[index].firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "visible"
            notArray[index].style.backgroundColor= "var(--body-color)";
            notArray[index].style.boxShadow = "1px 1px 3px var(--shadow-color)";
            counter += 1;
        }
        else if (notArray[index].getAttribute('status') === "read") {
            notArray[index].firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "hidden"
            notArray[index].style.backgroundColor = "var(--section-color)";
            notArray[index].style.boxShadow = "0px 0px 0px";
        }
    }
    document.querySelector('#not-counter').innerHTML = counter;
}
UpdataStatusNotification();


function MarkAllRead(){
    for (let index = 0; index < notArray.length; index++) {
        notArray[index].setAttribute('status', 'read');
    }
    UpdataStatusNotification();
}

button.addEventListener('click', MarkAllRead);

for (let index = 0; index < notArray.length; index++) {
    notArray[index].addEventListener('click', (event) => {
        event.target.setAttribute('status', 'read');
        UpdataStatusNotification();
    })
};

