function markAllAsRead() {
    clearUnread();
    clearNotif();
    clearNotifIndicator();
  }
  
  function handleUnread(el, idx) {
    changeReadClass(el);
    decrementNotif();
    removeNotifIndicator(idx);
  }
  
  function changeReadClass(el) {
    el.classList.replace("unread", "read");
    unreadBox = document.querySelectorAll(".unread");
  }
  
  function decrementNotif() {
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