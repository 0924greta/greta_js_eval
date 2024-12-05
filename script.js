// Select elements
const markAllReadButton = document.getElementById("mark-all-read");
const notificationCount = document.getElementById("notification-count");
const notifications = document.querySelectorAll(".notification-item");

// Update the unread count
function updateNotificationCount() {
  const unreadNotifications = document.querySelectorAll(
    ".notification-item.unread"
  );
  notificationCount.textContent = unreadNotifications.length;

  // Mark all notifications as read
  function markAsRead(notification) {
    if (notification.classList.contains("unread")) {
      notification.classList.remove("unread");
      notification.style.backgroundColor = "#ffffff";

      // Update the counter after each modification
      updateNotificationCount();
    }
  }

  // Add a click event for each notification
  notifications.forEach((notification) => {
    notification.addEventListener("click", () => {
      markAsRead(notification);
    });
  });

  // Mark all notifications as read
  markAllReadButton.addEventListener("click", () => {
    notifications.forEach((notification) => {
      markAsRead(notification);
    });
  });
}
