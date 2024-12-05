let test = document.querySelectorAll(".mouse");
let puce = document.querySelectorAll(".puce");
const colorwhite = "hsl(0, 0%, 100%)";
const colorblue = "hsl(211, 68%, 94%)";
const colorblue2 = "hsl(205, 33%, 90%)";

let tabPuceNotRead = [0];

sum = 0;
for (let index = 0; index < test.length; index++) {
  tabPuceNotRead[index] = 1;
  sum = sum + tabPuceNotRead[index];
}

let cpt = document.querySelector(".comptr");
cpt.innerHTML = sum;
cpt.style.backgroundColor=colorblue2;


function calculPuceNotRead() {
  let sum = 0;
  for (let index = 0; index < test.length; index++) {
    sum = sum + tabPuceNotRead[index];
  }

  let cpt = document.querySelector(".comptr");
  cpt.innerHTML = sum;
}

let resetF = document.querySelector(".reset");
resetF.addEventListener("click", mouseReset);

function mouseReset(event) {
  let sum = 0;
  for (let index = 0; index < test.length; index++) {
    tabPuceNotRead[index] = 0;
    sum = sum + tabPuceNotRead[index];
  }

  for (let index = 0; index < test.length; index++) {
    puce[index].style.backgroundColor = colorwhite;
  }

  let cpt = document.querySelector(".comptr");
  cpt.innerHTML = sum;
}

let dernier = 1;

function mouseov0(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[0].style.backgroundColor = colorblue;
  dernier = 0;
  tabPuceNotRead[0] = 0;
  calculPuceNotRead();
  puce[0].style.backgroundColor = colorwhite;
}

function mouseov1(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[1].style.backgroundColor = colorblue;
  dernier = 1;
  tabPuceNotRead[1] = 0;
  calculPuceNotRead();
  puce[1].style.backgroundColor = colorwhite;
}

function mouseov2(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[2].style.backgroundColor = colorblue;
  dernier = 2;
  tabPuceNotRead[2] = 0;
  calculPuceNotRead();
  puce[2].style.backgroundColor = colorwhite;
}

function mouseov3(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[3].style.backgroundColor = colorblue;
  dernier = 3;
  tabPuceNotRead[3] = 0;
  calculPuceNotRead();
  puce[3].style.backgroundColor = colorwhite;
}

function mouseov4(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[4].style.backgroundColor = colorblue;
  dernier = 4;
  tabPuceNotRead[4] = 0;
  calculPuceNotRead();
  puce[4].style.backgroundColor = colorwhite;
}

function mouseov5(event) {
  test[dernier].style.backgroundColor = colorwhite;
  test[5].style.backgroundColor = colorblue;
  dernier = 5;
  tabPuceNotRead[5] = 0;
  calculPuceNotRead();
  puce[5].style.backgroundColor = colorwhite;
}

test[0].addEventListener("click", mouseov0);
test[1].addEventListener("click", mouseov1);
test[2].addEventListener("click", mouseov2);
test[3].addEventListener("click", mouseov3);
test[4].addEventListener("click", mouseov4);
test[5].addEventListener("click", mouseov5);
