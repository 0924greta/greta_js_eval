let test = document.querySelectorAll(".mouse");


let dernier=1;

function mouseov0(event) {
test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
test[0].style.backgroundColor="hsl(211, 68%, 94%";
dernier=0;
}

function mouseov1(event) {
    test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
    test[1].style.backgroundColor="hsl(211, 68%, 94%";
    dernier=1;
 }

 function mouseov2(event) {
    test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
    test[2].style.backgroundColor="hsl(211, 68%, 94%";
    dernier=2;
 }

 function mouseov3(event) {
    test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
    test[3].style.backgroundColor="hsl(211, 68%, 94%";
    dernier=3;
 }

 function mouseov4(event) {
    test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
    test[4].style.backgroundColor="hsl(211, 68%, 94%";
    dernier=4;
 }

 function mouseov5(event) {
    test[dernier].style.backgroundColor="hsl(0, 0%, 100%)";
    test[5].style.backgroundColor="hsl(211, 68%, 94%";
    dernier=5;
 }

test[0].addEventListener("mouseover", mouseov0);
test[1].addEventListener("mouseover", mouseov1);
test[2].addEventListener("mouseover", mouseov2);
test[3].addEventListener("mouseover", mouseov3);
test[4].addEventListener("mouseover", mouseov4);
test[5].addEventListener("mouseover", mouseov5);


