// Select important elements
const notifications = document.querySelectorAll(".notification");
const notificationCountEl = document.querySelector(".notification-count");
const markAllReadBtn = document.querySelector(".mark-all-read");
const statutDot = document.querySelector(".status-dot");

// Function to update the notification count
function updateNotificationCount() {
  const unreadNotifications = document.querySelectorAll(".notification.unread");
  notificationCountEl.textContent = unreadNotifications.length;
}

// Function to mark a notification as read
function markAsRead(notification) {
  if (notification.classList.contains("unread")) {
    notification.classList.remove("unread");
    updateNotificationCount();
  }
}

// Add a 'click' event to each notification
notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    // Select the span with the 'status-dot' class in the clicked notification
    const statusDot = notification.querySelector(".status-dot");

    // Hide the 'status-dot'
    if (statusDot) {
      statusDot.style.display = "none";
    }
  });
});

// Add an event listener to each notification to mark it as read
notifications.forEach((notification) => {
  notification.addEventListener("click", () => markAsRead(notification));
});

// Mark all notifications as read
markAllReadBtn.addEventListener("click", () => {
  notifications.forEach((notification) =>
    notification.classList.remove("unread")
  );
  updateNotificationCount();
});

// Mark all 'status-dot' as read
// Add a 'click' event to the button
markAllReadBtn.addEventListener("click", () => {
  // For each notification, hide the 'status-dot'
  notifications.forEach((notification) => {
    const statusDot = notification.querySelector('.status-dot');
    if (statusDot) {
      // Hide the status-dot using style
      statusDot.style.display = 'none';
    }
  });
});

// Initialize the notification count
updateNotificationCount();
