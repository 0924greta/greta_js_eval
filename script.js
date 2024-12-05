let markAllAsReadButton = document.querySelector("#mark-all-as-read");
let notifications = document.querySelectorAll("section");
const pointMarker = document.querySelectorAll(".unread-marker");
const notificationsCounter = document.querySelector("#notifications-number");
const notificationsDots = document.querySelectorAll(".unread-marker");
let counter = null;


markAllAsReadButton.addEventListener('click', () => {
    if(notificationsCounter.innerText === "0"){
        notifications.forEach((notification) => {
            notifications = Array.from(notifications);
            const index = notifications.indexOf(notification);

            notification.classList.add("unread-notifications");
            //notificationsDots[index].style.display = "inline";
            notificationsCounter.innerText = "7";
        })
    }
    else {
        notifications.forEach((notification) => {
            notifications = Array.from(notifications);
            const index = notifications.indexOf(notification);

            notification.classList.remove("unread-notifications");
            //notificationsDots[index].style.display = "none";
            notificationsCounter.innerText = "0";
        })
    }
    counter = Number(notificationsCounter.innerText);
});

notifications.forEach((notification) => {
    notifications = Array.from(notifications);
    const index = notifications.indexOf(notification);

    counter = Number(notificationsCounter.innerText);
    
    notification.addEventListener('click', () => {
        if(notification.classList.contains("unread-notifications")){
            notification.classList.remove("unread-notifications");
            //notificationsDots[index].style.display = "none";
            counter --;
        }
        else {
            notification.classList.add("unread-notifications");
            //notificationsDots[index].style.display = "inline";
            counter ++;
        }
        notificationsCounter.innerText = counter;
    })
})
