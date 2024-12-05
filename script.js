
const btnRead = document.querySelector('h2');
const sections = document.querySelectorAll('section');
const notifNumber = document.querySelector('#notification-number');
const red = document.querySelectorAll('.red')

function markAllRead(){
    sections.forEach((section) => {
        section.style.backgroundColor = "white";
        section.setAttribute('status', 'read')
        eachNotif = 0;
    })

    notifNumber.innerText = eachNotif;
    red.forEach((element) => element.remove())
};

btnRead.addEventListener("click", markAllRead);



let eachNotif = Number(notifNumber.innerText);
sections.forEach((section) =>{
    section.addEventListener("click", () =>{
        
        if(section.getAttribute('status') === "unread"){
            section.setAttribute('status', 'read');
            section.style.backgroundColor = "white";
            eachNotif -= 1;
        }
    })
})

