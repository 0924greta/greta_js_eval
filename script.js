// Sélection des éléments importants
const notifications = document.querySelectorAll(".notification");
const notificationCountEl = document.querySelector(".notification-count");
const markAllReadBtn = document.querySelector(".mark-all-read");

// Fonction pour mettre à jour le compteur
function updateNotificationCount() {
  const unreadNotifications = document.querySelectorAll(".notification.unread");
  notificationCountEl.textContent = unreadNotifications.length;
}

// Fonction pour marquer une notification comme lue
function markAsRead(notification) {
  if (notification.classList.contains("unread")) {
    notification.classList.remove("unread");
    updateNotificationCount();
  }
}

// Ajouter un écouteur à chaque notification pour la marquer comme lue
notifications.forEach((notification) => {
  notification.addEventListener("click", () => markAsRead(notification));
});

// Marquer toutes les notifications comme lues
markAllReadBtn.addEventListener("click", () => {
  notifications.forEach((notification) =>
    notification.classList.remove("unread")
  );
  updateNotificationCount();
});

// Initialiser le compteur
updateNotificationCount();
