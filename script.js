let markAllAsReadButton = document.querySelector("#mark-all-as-read");
let notifications = document.querySelectorAll("section");
const notificationsCounter = document.querySelector("#notifications-number");

markAllAsReadButton.addEventListener('click', () => {
    if(notificationsCounter.innerText === "3" || notificationsCounter.innerText === "7" ){
        notifications.forEach((notification) => {
            notification.classList.remove("unread-notifications");
            notificationsCounter.innerText = "0";
            notificationsCounter.classList.add(".notifications-number");
            
        })
    }
    else if(notificationsCounter.innerText === "0"){
        notifications.forEach((notification) => {
            notification.classList.add("unread-notifications");
            notificationsCounter.innerText = "7";
            notificationsCounter.classList.add(".notifications-number");
            
        })
    }
});