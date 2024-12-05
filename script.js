// Select elements
const markAllReadButton = document.getElementById("mark-all-read");
const notificationCount = document.getElementById("notification-count");
const unreadNotifications = document.querySelectorAll(
  ".notification-item.unread"
);

// Mark all notifications as read
markAllReadButton.addEventListener("click", () => {
  unreadNotifications.forEach((notification) => {
    notification.classList.remove("unread");
  });

  // Update the unread count
  notificationCount.textContent = "0";
});
