// function nbUnreadNotification() {

// Notification unread
let notifCounter = 0;

function updateNotifCounter() {
  const unreadNotificationArray = document.querySelectorAll(".unread");
  notifCounter = unreadNotificationArray.length;
  const targetNotifCounter = document.querySelector("#container-nav div");
  targetNotifCounter.innerText = notifCounter;
  return notifCounter;
}
function markAllReadListener() {
  const unreadNotificationArray = document.querySelectorAll(".unread");
  const unreadNotificationBadge = document.querySelectorAll(".badge-unread");
  const markAllReadBtn = document.querySelector(".mark-read-btn");

  markAllReadBtn.addEventListener("click", () => {
    unreadNotificationArray.forEach((element, index) => {
      element.classList.remove("unread");
      unreadNotificationBadge[index].classList.remove("badge-unread");
    });
    updateNotifCounter();
  });
}
markAllReadListener();

function unreadListenerOnNotification() {
  const unreadNotificationArray = document.querySelectorAll(".unread");
  const unreadNotificationBadge = document.querySelectorAll(".badge-unread");

  unreadNotificationArray.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.classList.remove("unread");
      unreadNotificationBadge[index].classList.remove("badge-unread");
      updateNotifCounter();
    });
  });
}
unreadListenerOnNotification();
