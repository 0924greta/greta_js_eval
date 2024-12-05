let unread = document.querySelectorAll(".unRead");
let activeNotif = document.querySelectorAll(".activeNotif");
let total = document.querySelector("#nbNotif");
let notif = unread.length;
total.innerHTML = " " + notif;
function reading(index) {
  if (unread[index].classList.contains("unRead")) {
    unread[index].classList.remove("unRead");
    unread[index].classList.add("read");
    activeNotif[index].style.display = "none";
    notif--;
    total.innerHTML = " " + notif;
  }
}
function allReadFunc() {
  unread.forEach((el) => {
    el.classList.remove("unRead");
    el.classList.add("read");
    notif = 0;
    total.innerHTML = " " + notif;
  });
  activeNotif.forEach((el) => {
    el.style.display = "none";
  });
}
const allRead = document.querySelector("#delNotif");
allRead.addEventListener("click", allReadFunc);
for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", function () {
    reading(i);
  });
}
