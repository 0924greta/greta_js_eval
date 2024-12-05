let unreadBox = document.querySelectorAll(".unread");
const btn = document.querySelector("#mark-all-read");

unreadBox.forEach((el, idx) =>
  el.addEventListener("click", (e) => {
    handleUnread(el, idx);
  })
);

btn.addEventListener("click", markAllAsRead);