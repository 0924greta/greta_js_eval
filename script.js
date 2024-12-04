let unread = document.querySelectorAll("p");
let total = document.querySelector("h2");
let notif = unread.length;
total.innerHTML = notif + " Notifications";
function reading(index) {
  if (unread[index].classList.contains("unRead")) {
    unread[index].classList.remove("unRead");
    unread[index].classList.add("read");
    console.log(unread[index]);
    notif--;
    total.innerHTML = notif + " Notifications";
  }
}
function allReadFunc() {
  unread.forEach((p) => {
    p.classList.remove("unRead");
    p.classList.add("read");
    console.log(p);
    notif = 0;
    total.innerHTML = notif + " Notifications";
  });
}
const allRead = document.querySelector("#delNotif");
allRead.addEventListener("click", allReadFunc);
for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener("click", function () {
    reading(i);
  });
  unread[i].classList.add("unRead");
  console.log(unread[i]);
}
console.log(notif);
