let notArray = [];
const divNot = Array.from(document.querySelectorAll('.not'));
const divNotWithImg = Array.from(document.querySelectorAll('.not-with-img'));
const divNotWithComment = Array.from(document.querySelectorAll('.not-with-comment'));
const buttonMarkAllRead = document.querySelector('button');


notArray = notArray.concat(divNot);
notArray = notArray.concat(divNotWithImg);
notArray = notArray.concat(divNotWithComment);
UpdateStatusNotification();
sortNotification();



function sortDiv(array) {

}

function UpdateStatusNotification(){
    let counterNotificationRead = 0;
    notArray.forEach((div) => {
        if(div.getAttribute('status') === "unread"){
            div.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "visible"
            div.style.backgroundColor= "var(--body-color)";
            div.style.boxShadow = "1px 1px 3px var(--shadow-color)";
            counterNotificationRead += 1;
        }
        else if (div.getAttribute('status') === "read") {
            div.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.style.visibility = "hidden"
            div.style.backgroundColor = "var(--section-color)";
            div.style.boxShadow = "0px 0px 0px";
        }
    })
    document.querySelector('#not-counter').innerText = counterNotificationRead;
}


function MarkAllRead(){
    if (buttonMarkAllRead.innerText === "Mark all as read") {
        buttonMarkAllRead.innerText = "Mark all as unread";
        notArray.forEach(div => div.setAttribute('status', 'read'));
    }
    else {
        buttonMarkAllRead.innerText = "Mark all as read";
        notArray.forEach(div => div.setAttribute('status', 'unread'));
    }
    UpdateStatusNotification();
}
buttonMarkAllRead.addEventListener('click', MarkAllRead);


notArray.forEach(div => div.addEventListener('click', (event) => {
    if(event.target.getAttribute('status') === "unread") {
        event.target.setAttribute('status', 'read');
    }
    else{
        event.target.setAttribute('status', 'unread');
    }
    UpdateStatusNotification();
}));





function sortNotification(){
    notArray.sort((a, b) => a.firstElementChild.nextElementSibling.lastElementChild.innerText - b.firstElementChild.nextElementSibling.lastElementChild.innerText);

    for (let index = 0; index < notArray.length; index++) {
        notArray[index].firstElementChild.nextElementSibling.lastElementChild.innerText = ConvertTimeinText(Number(notArray[index].firstElementChild.nextElementSibling.lastElementChild.innerText));
    document.querySelector('section').removeChild(document.querySelector('section').lastElementChild)

    }
    for (let index = 0; index < notArray.length; index++) {
        document.querySelector('section').appendChild(notArray[index]);

    }
}




function ConvertTimeinText(time){
    if (time < 1) {
        return "less 1m"
    }
    else if(time >= 1 && time < 60){
        return String(time)+"m ago"
    }
    else if (time >= 60 && time < 1440)
    {
        if(Math.round(time/60) > 1)
        {
            return String(Math.round(time/60))+" hours ago"
        }
        else {
            return String(Math.round(time/60))+" hour ago"
        }
    }
    else if (time >= 1440 && time < 10080)
    {
        if(Math.round(time/1440) > 1)
            {
                return String(Math.round(time/1440))+" days ago"
            }
            else {
                return String(Math.round(time/1440))+" day ago"
            }
    }
    else if (time >= 10080 && time < 40320)
    {
        if(Math.round(time/10080) > 1)
            {
                return String(Math.round(time/10080))+" weeks ago"
            }
            else {
                return String(Math.round(time/10080))+" week ago"
            }
    }
    else if (time >= 40320 && time < 483840)
    {
        if(Math.round(time/40320) > 1)
            {
                return String(Math.round(time/40320))+" mounths ago"
            }
            else {
                return String(Math.round(time/40320))+" mount ago"
            }
    }
    else if (time >= 483840)
    {
        if(Math.round(time/483840) > 1)
            {
                return String(Math.round(time/483840))+" years ago"
            }
            else {
                return String(Math.round(time/483840))+" year ago"
            }
    }
}
