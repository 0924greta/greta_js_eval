let unread = document.querySelectorAll(".unRead");
let total = document.querySelector("#nbNotif");
let notif = unread.length;
total.innerHTML = " " + notif;
function reading(index) {
  if (unread[index].classList.contains("unRead")) {
    unread[index].classList.remove("unRead");
    unread[index].classList.add("read");
    console.log(unread[index]);
    notif--;
    total.innerHTML = " " + notif;
  }
}
function allReadFunc() {
  unread.forEach((el) => {
    el.classList.remove("unRead");
    el.classList.add("read");
    console.log(el);
    notif = 0;
    total.innerHTML = " " + notif;
  });
}
const allRead = document.querySelector("#delNotif");
allRead.addEventListener("click", allReadFunc);
for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", function () {
    reading(i);
  });
  console.log(unread[i]);
}
console.log(notif);
