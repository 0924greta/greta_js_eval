let notArray = [];
const divNot = Array.from(document.querySelectorAll('.not'));
const divNotWithImg = Array.from(document.querySelectorAll('.not-with-img'));
const divNotWithComment = Array.from(document.querySelectorAll('.not-with-comment'));

function AddDivInMyArray(array) {
    for (let index = 0; index < array.length; index++) {
        notArray.push(array[index]);
    }
}

AddDivInMyArray(divNot);
AddDivInMyArray(divNotWithComment);
AddDivInMyArray(divNotWithImg);

console.log(notArray[0].firstElementChild.nextElementSibling.firstElementChild.lastElementChild);

function UpdataStatusNotification(){
    for (let index = 0; index < notArray.length; index++) {
        if (notArray[index].getAttribute('status') = "unread"){
            notArray[index].firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "visible"
            notArray[index].backgroundColor= "var(--body-color)";
        }
        
    }
}