let markAllAsReadButton = document.querySelector("#mark-all-as-read");
let notifications = document.querySelectorAll("section");
const pointMarker = document.querySelectorAll(".unread-marker");
const notificationsCounter = document.querySelector("#notifications-number");
let counter = null;

markAllAsReadButton.addEventListener('click', () => {
    if(notificationsCounter.innerText === "0"){
        notifications.forEach((notification) => {
            notification.classList.add("unread-notifications");
            notificationsCounter.innerText = "7";
        })
    }
    else {
        notifications.forEach((notification) => {
            notification.classList.remove("unread-notifications");
            notificationsCounter.innerText = "0";
        })
    }
    counter = Number(notificationsCounter.innerText);
});

notifications.forEach((notification) => {
    counter = Number(notificationsCounter.innerText);
    
    notification.addEventListener('click', () => {
        if(notification.classList.contains("unread-notifications")){
            notification.classList.remove("unread-notifications");
            counter --;
        }
        else {
            notification.classList.add("unread-notifications");
            counter ++;
        }
        notificationsCounter.innerText = counter;
    })
})
