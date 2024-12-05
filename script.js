let unreadBox = document.querySelectorAll(".unread");
unreadBox.forEach((el, idx) =>
  el.addEventListener("click", (event) => {
    handleUnread(event, el, idx);
  })
);

const btn = document.querySelector("#mark-all-read");

btn.addEventListener("click", markAllAsRead);

function markAllAsRead(el, idx) {
  //change every class unread to read
  clearUnread();
  //update notif count
  clearNotif();
  //remove every red-point class to make point disapear
  clearNotifIndicator();
}

function handleUnread(event, el, idx) {
  //change class unread to read
  changeReadClass(el);
  //notification count reduce
  minusNotif();
  unreadBox = document.querySelectorAll(".unread");
  //remove red-point class to make point disapear
  removeNotifIndicator(idx);
}

function changeReadClass(el) {
  el.classList.replace("unread", "read");
  unreadBox = document.querySelectorAll(".unread");
}

function minusNotif() {
  const count = document.querySelector("#notification-count");
  count.innerText = `${unreadBox.length}`;
}

function removeNotifIndicator(idx) {
  let indexOfPoint = document.querySelector(`.pt${idx}`);
  indexOfPoint.classList.remove("red-point");
}

function clearUnread() {
  const unread = document.querySelectorAll(".unread");
  unread.forEach((el) => el.classList.replace("unread", "read"));
}

function clearNotif() {
  const count = document.querySelector("#notification-count");
  count.innerText = "0";
}

function clearNotifIndicator() {
  const point = document.querySelectorAll(".red-point");
  point.forEach((element) => element.classList.remove("red-point"));
}