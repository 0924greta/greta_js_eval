// counter of notifications
let notifCounter = 0;

// function get locate / target

function locateTarget(element) {
  return document.querySelectorAll(element);
}

// function to update notifications counter (in header)
function updateNotifCounter() {
  const targetNotifCounter = document.querySelector("#container-nav div");
  targetNotifCounter.innerText = locateTarget(".unread").length;
  return locateTarget(".unread").length;
}

// function to add listerner to the "mark all as read" link
function markAllReadListener() {
  // 2 targets with front update :
  const unreadNotificationArray = document.querySelectorAll(".unread");
  const unreadNotificationBadge = document.querySelectorAll(".badge-unread");
  // DOM location of link
  const markAllReadBtn = document.querySelector(".mark-all-read-btn");

  // Add a listerner to DOM location of link
  markAllReadBtn.addEventListener("click", () => {
    unreadNotificationArray.forEach((element, index) => {
      element.classList.remove("unread");
      unreadNotificationBadge[index].classList.remove("badge-unread");
    });
    // Auto-update the notification counter
    updateNotifCounter();
  });
}
markAllReadListener(); // Always active listener

// function to add listerner to each notifications "unread"
function unreadListenerOnNotification() {
  // 2 targets with front update :
  const unreadNotificationArray = document.querySelectorAll(".unread");
  const unreadNotificationBadge = document.querySelectorAll(".badge-unread");

  // For each notifications "unread" :
  unreadNotificationArray.forEach((element, index) => {
    // Add listener to this element
    element.addEventListener("click", () => {
      element.classList.remove("unread");
      unreadNotificationBadge[index].classList.remove("badge-unread");
      // Auto-update the notification counter
      updateNotifCounter();
    });
  });
}
unreadListenerOnNotification(); // Always active listener
