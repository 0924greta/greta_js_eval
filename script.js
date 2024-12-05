function locateTarget(element) {
  return document.querySelectorAll(element);
}

let notifCounter = 0;
function updateNotifCounter() {
  const targetNotifCounter = document.querySelector("#container-nav div");
  targetNotifCounter.innerText = locateTarget(".unread").length;
  return locateTarget(".unread").length;
}

// function to add listerner to the "mark all as read" link
function markAllReadListener() {
  // 2 targets with front update :
  const unreadNotificationBadge = document.querySelectorAll(".badge-unread");
  // DOM location of link
  const markAllReadBtn = document.querySelector(".mark-all-read-btn");

  markAllReadBtn.addEventListener("click", () => {
    locateTarget(".unread").forEach((element, index) => {
      locateTarget(".badge-unread").forEach((element) => {
        element.classList.remove("badge-unread");
      });
      locateTarget(".unread").forEach((element) => {
        element.classList.remove("unread");
      });
    });
    updateNotifCounter();
  });

  locateTarget(".unread").forEach((element, index) => {
    // Add listener to this element
    element.addEventListener("click", function () {
      element.classList.remove("unread");
      unreadNotificationBadge[index].classList.remove("badge-unread");
      updateNotifCounter();
    });
  });
}
markAllReadListener(); // Always active listener
