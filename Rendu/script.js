let notArray = [];
const divNot = Array.from(document.querySelectorAll('.not'));
const divNotWithImg = Array.from(document.querySelectorAll('.not-with-img'));
const divNotWithComment = Array.from(document.querySelectorAll('.not-with-comment'));
const buttonMarkAllRead = document.querySelector('button');


notArray = notArray.concat(divNot);
notArray = notArray.concat(divNotWithImg);
notArray = notArray.concat(divNotWithComment);


function UpdataStatusNotification(){
    let counter = 0;
    notArray.forEach((div) => {
        if(div.getAttribute('status') === "unread"){
            div.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "visible"
            div.style.backgroundColor= "var(--body-color)";
            div.style.boxShadow = "1px 1px 3px var(--shadow-color)";
            counter += 1;
        }
        else if (div.getAttribute('status') === "read") {
            div.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "hidden"
            div.style.backgroundColor = "var(--section-color)";
            div.style.boxShadow = "0px 0px 0px";
        }
    })
    document.querySelector('#not-counter').innerHTML = counter;
}


UpdataStatusNotification();


function MarkAllRead(){
    if (buttonMarkAllRead.innerText === "Mark all as read") {
        buttonMarkAllRead.innerText = "Mark all as unread";
        notArray.forEach(div => div.setAttribute('status', 'read'));
    }
    else {
        buttonMarkAllRead.innerText = "Mark all as read";
        notArray.forEach(div => div.setAttribute('status', 'unread'));
    }
    UpdataStatusNotification();
}
buttonMarkAllRead.addEventListener('click', MarkAllRead);


notArray.forEach(div => div.addEventListener('click', (event) => {
    if(event.target.getAttribute('status') === "unread") {
        event.target.setAttribute('status', 'read');
    }
    else{
        event.target.setAttribute('status', 'unread');
    }
    UpdataStatusNotification();
}));

