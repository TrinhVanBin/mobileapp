"use strict";

window.addEventListener("DOMContentLoaded",
    function() {
        $("header").textillate({
            loop: false, 
            minDisplayTime: 2000, 
            initialDelay: 2000, 
            autoStart: true, 
            in: { 
            effect: "fadeInLeftBig", 
            delayScale: 1.5, 
            delay: 50, 
            sync: false, 
            shuffle: true 
            }
        });
        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
        setTimeout(
            function(){
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert( popMessage);
            },
            "5000"
        );
    }, false
);
let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3"];
let soundEndflag = "0";
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");
btn1.addEventListener("click",
    function(){
        if(soundEndflag === "1"){
            soundControl("end","");
        }
        let resultText = ["imgg/daikichi.png","imgg/chukichi.png","imgg/syokichi.png","imgg/suekichi.png","imgg/daikyo.png"];
        let n = Math.floor(Math.random()*resultText.length);
        let resultMaxSpeed = [10,10,8,5,5];
        let resultMaxSize = [30,30,30,40,30];
        let resultImage = ["imgg/star.png","imgg/sakura_hanabira.png","imgg/water1.png","imgg/redLeaves4.png","imgg/snowflakes.png"];
        let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3"];
        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");
        omikujiTextImage.addEventListener("animationend",
            function(){
                omikujiTextImage.classList.remove("omikujiPaper");
            }, false
            );
        w_sound = resultSound[n];
        soundControl("start", w_sound);
        soundEndflag = "1";
        //let n = Math.floor(Math.random()*3);

       //switch (n) {
          // case 0:
           //    btn1.textContent = "Very Happy!!";
           //    btn1.style.color = "#FF0000";
           //    btn1.style.fontSize = "35px";
           //    break;
           // case 1:
           //     btn1.textContent = "Happy!";
           //     btn1.style.color = "#fff001";
           //     btn1.style.fontSize = "30px";
           //     break;
           // case 2:
           //    btn1.textContent = "UnHappy...";
           //    btn1.style.color = "#261e1c";
           //    btn1.style.fontSize = "20px";
           //    break;
    //    }
       $(document).snowfall("clear");
       setTimeout(
           function(){
                $(document).ready(function(){
                    $(document).snowfall({
                        maxSpeed : resultMaxSpeed[n],
                        minSpeed : 1, // 最小速度
                        maxSize : resultMaxSize[n],
                        minSize : 1, // 最小サイズ
                        image : resultImage[n]
                    });
            });
        }, "200" );
    },false
    );
let w_sound
let music
function soundControl(status, w_sound) {
    if(status === "start"){
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if(status === "end"){
        music.pause();
        music.currentTime = 0;
    }
}
