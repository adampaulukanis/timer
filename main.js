var test = document.createElement("input");
var audioElement = document.querySelector("audio");
var divTime = document.querySelector("div.time");
var spanValidity = document.querySelector("span.validity");
var inputTime = document.querySelector('input[type="time"]');
var gTotalSecondsLeft = 0;
var timerFunction = null;
var progressA = document.querySelector(".progress a");


let startAngle = 0;
setInterval(function () {
    document.querySelector('.halfCircleRight').style.transform = `rotate(${startAngle++ % 360}deg)`;
}, 50);
