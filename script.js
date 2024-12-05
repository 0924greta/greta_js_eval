// Sélection des éléments importants
const notifications = document.querySelectorAll(".notification");
const notificationCountEl = document.querySelector(".notification-count");
const markAllReadBtn = document.querySelector(".mark-all-read");
const statutDot = document.querySelector(".status-dot");

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

// Ajouter un événement 'click' à chaque notification
notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    // Sélectionner le span avec la classe 'status-dot' dans la notification cliquée
    const statusDot = notification.querySelector(".status-dot");

    // Rendre le 'status-dot' invisible
    if (statusDot) {
      statusDot.style.display = "none";
    }
  });
});

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

// Marquer toutes les 'status-dot' comme lues
// Ajouter un événement 'click' au bouton
markAllReadBtn.addEventListener("click", () => {
  // Pour chaque notification, masquer la 'status-dot'
  notifications.forEach((notification) => {
    const statusDot = notification.querySelector('.status-dot');
    if (statusDot) {
      // Masquer le status-dot en utilisant style
      statusDot.style.display = 'none';
    }
  });
});


// Initialiser le compteur
updateNotificationCount();
