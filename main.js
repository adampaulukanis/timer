var test = document.createElement("input");
var audioElement = document.querySelector("audio");
var playStop = document.querySelector("#play-stop");
var divTime = document.querySelector("div.time");
var setTime = document.querySelector("#set-time");
var spanValidity = document.querySelector("span.validity");
var progress = document.querySelector("div.progress");
var inputTime = document.querySelector('input[type="time"]');
var gTotalSecondsLeft = 0;
var timerFunction = null;
var progressA = document.querySelector('.progress a');

(function testInputType() {
    // Hide fallback initially
    spanValidity.style.display = "none";

    try {
        test.type = "time";
    } catch (e) {
        console.error(e);
    }

    // Fallback
    if (test.type === "text") {
        spanValidity.style.display = "block";
        //document.querySelector('div.time input[type="time"]').style.width = "100px";
    }
})();

/*
var startStop = document.querySelector('#start-stop');
startStop.onclick = function (event) {
    this.classList.toggle('pause');
    if(this.classList.contains('pause')){
    }else{
    }
}
*/

progressA.onclick = function (event) {
    event.preventDefault();
    if (this.classList.contains("triangle-right")) {
        this.classList.replace("triangle-right", "pause");

        howManySecondsLeft(inputTime.value);
        timerFunction = setInterval(everySecond, 1000);
    } else {
        this.classList.replace("pause", "triangle-right");
        audioElement.pause();
        audioElement.load(); // Resets the media to the beginning
        clearInterval(timerFunction);
        timerFunction = null;
    }
};

function howManySecondsLeft(timeString) {
    var hours = Number(timeString.slice(0, 2));
    var minutes = Number(timeString.slice(3, 5));
    var seconds = Number(timeString.slice(6, 8));
    gTotalSecondsLeft = hours * 60 * 60 + minutes * 60 + seconds;
}

function everySecond() {
    if (gTotalSecondsLeft <= 0) {
        audioElement.play();
    } else {
        gTotalSecondsLeft--;
        divTime.innerText = gTotalSecondsLeft;
    }
}
