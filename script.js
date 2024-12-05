// Select elements
const markAllReadButton = document.getElementById("mark-all-read");
const notificationCount = document.getElementById("notification-count");
const notifications = document.querySelectorAll(".notification-item");

// Function to update the unread count
function updateNotificationCount() {
  const unreadNotifications = document.querySelectorAll(
    ".notification-item.unread"
  );
  notificationCount.textContent = unreadNotifications.length;

  // Hide the counter if no unread notifications
  if (unreadNotifications.length === 0) {
    notificationCount.style.display = "none";
  } else {
    notificationCount.style.display = "inline-block";
  }
}

// Function to mark a single notification as read
function markAsRead(notification) {
  if (notification.classList.contains("unread")) {
    notification.classList.remove("unread");
    notification.style.backgroundColor = "#ffffff";

    // Find and hide the notification symbol
    const notificationSymbol = notification.querySelector(
      ".notification-symbol"
    );
    if (notificationSymbol) {
      notificationSymbol.style.display = "none";
    }

    updateNotificationCount();
  }
}

//EVENT LISTENER
// Event listener for each unread notification
notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    markAsRead(notification);
  });
});

// Event listener for the "Mark all as read" button
markAllReadButton.addEventListener("click", () => {
  notifications.forEach((notification) => {
    markAsRead(notification);
  });
  updateNotificationCount();
});
