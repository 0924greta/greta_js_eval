function clearNotif() {
  const count = document.querySelector("#notification-count");
  count.innerText = "0";
}

function clearPoint() {
  const point = document.querySelectorAll(".red-point");
  point.forEach((element) => element.classList.remove("red-point"));
}

function clearUnread() {
  const unread = document.querySelectorAll(".unread");
  unread.forEach((el) => el.classList.replace("unread", "read"));
}

function markAllRead() {
  clearNotif();
  clearPoint();
  clearUnread();
}

const btn = document.querySelector("#mark-all-read");
btn.addEventListener("click", markAllRead);
