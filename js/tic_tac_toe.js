"use strict"

let flag = "pen-flag";

let counter = 9;

const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");

const msgtxt1 = '<p class="image"><img src ="img/penguins.jpg" width=61px height=61px></p><p class="text">Penguins Attack!</p>';
const msgtxt2 = '<p class="image"><img src ="img/whitebear.jpg" width=61px height=61px></p><p class="text">WhiteBear Attack!</p>';


window.addEventListener("DOMContentLoaded",
    function(){
    setMessage("pen-turn");
    },false
);

a_1.addEventListener("click",
    function(){
    isSelect(a_1);
    },false
);
a_2.addEventListener("click", () =>
{
    isSelect(a_2);
});
a_3.addEventListener("click", () =>
{
    isSelect(a_3);
});
b_1.addEventListener("click", () =>
{
    isSelect(b_1);
});
b_2.addEventListener("click", () =>
{
    isSelect(b_2);
});
b_3.addEventListener("click", () =>
{
    isSelect(b_3);
});
c_1.addEventListener("click", () =>
{
    isSelect(c_1);
});
c_2.addEventListener("click", () =>
{
    isSelect(c_2);
});
c_3.addEventListener("click", () =>
{
    isSelect(c_3);
});

function isSelect(selectSquare) {
    if(flag === "pen-flag") {
       selectSquare.classList.add("js-pen-checked"); 
       selectSquare.classList.add("js-unclickable");
       setMessage("bear-turn");
       flag = "bear-flag"
    }else{
        selectSquare.classList.add("js-bear-checked");
        selectSquare.classList.add("js-unclickable"); 
        setMessage("pen-turn");
        flag = "pen-flag"
    }
    counter--;

    if(counter === 0) {
        setMessage("draw")
    }
}
function setMessage(id) {
    switch (id) {
        case "pen-turn":
            document.getElementById("msgtext").innerHTML=msgtxt1;
            break;
        case "bear-turn":
            document.getElementById("msgtext").innerHTML=msgtxt2;
            break;
        default:
            document.getElementById("msgtext").innerHTML=msgtxt1;
    }
} 