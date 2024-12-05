// Select elements
const markAllReadButton = document.getElementById("mark-all-read");
const notificationCount = document.getElementById("notification-count");
const notifications = document.querySelectorAll(".notification-item.unread");

// Update the unread count
const updateNotificationCount = () =>
  (notificationCount.textContent = document.querySelectorAll(
    ".notification-item.unread"
  ).length);

// Mark a notification as read
const markAsRead = (notification) => {
  notification.classList.remove("unread");
  notification.style.backgroundColor = "#ffffff";
  const symbol = notification.querySelector(".notification-symbol");
  if (symbol) symbol.style.display = "none";
  updateNotificationCount();
};

// Add event listeners
notifications.forEach((notification) =>
  notification.addEventListener("click", () => markAsRead(notification))
);

markAllReadButton.addEventListener("click", () => {
  notifications.forEach(markAsRead);
  updateNotificationCount();
});
