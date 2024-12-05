/*
function clearNotif() {
  const count = document.querySelector("#notification-count");
  count.innerText = "0";
}

function clearNotifIndicator() {
  const point = document.querySelectorAll(".red-point");
  point.forEach((element) => element.classList.remove("red-point"));
}

function clearUnread() {
  const unread = document.querySelectorAll(".unread");
  unread.forEach((el) => el.classList.replace("unread", "read"));
}

function markAllAsRead() {
  clearNotif();
  clearNotifIndicator();
  clearUnread();
}

const btn = document.querySelector("#mark-all-read");
btn.addEventListener("click", markAllAsRead);
*/

let unreadBox = document.querySelectorAll(".unread");
console.log(unreadBox);

unreadBox.forEach((el, idx) =>
  el.addEventListener("click", (event) => {
    handleUnread(event, el, idx)
  })
);

function minusNotif() {
  const count = document.querySelector("#notification-count");
  count.innerText = `${unreadBox.length}`;
}


function handleUnread(event, el, idx) {
  //change class unread to read
  el.classList.replace("unread", "read");
  unreadBox = document.querySelectorAll(".unread");
  //notification count reduce
  minusNotif();
  //remove red-point class to make point disapear
  let nbp = document.querySelector(`.pt${idx}`);
  nbp.classList.remove("red-point");
}