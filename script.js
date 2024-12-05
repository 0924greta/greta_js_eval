// Sélection des éléments
const markAllReadButton = document.querySelector(".mark-all-read");
const notifications = document.querySelectorAll(".notification");
const notificationCount = document.querySelector(".notification-count");

// Mettre en mode "read" les notifications de Anna Kim, Nathan Peterson, Kimberly Smith, Rizky Hasanuddin
const readNotifications = [
  document.querySelectorAll(".notification")[3], // Rizky Hasanuddin
  document.querySelectorAll(".notification")[4], // Kimberly Smith
  document.querySelectorAll(".notification")[5], // Nathan Peterson
  document.querySelectorAll(".notification")[6], // Anna Kim
];

// Supprimer la classe 'unread' et cacher les pastilles de statut pour les notifications marquées comme lues
readNotifications.forEach((notification) => {
  notification.classList.remove("unread");
  const statusDot = notification.querySelector(".status-dot");
  if (statusDot) {
    statusDot.style.display = "none"; // Masquer la pastille
  }
});

// Fonction pour marquer toutes les notifications comme lues
markAllReadButton.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("unread"); // Enlever la classe "unread"
    const statusDot = notification.querySelector(".status-dot");
    if (statusDot) {
      statusDot.style.display = "none"; // Masquer la pastille
    }
  });

  // Mettre à jour le nombre de notifications non lues
  notificationCount.textContent = 0;
});
