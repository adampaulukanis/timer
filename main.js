var test = document.createElement("input");
var audioElement = document.querySelector("audio");
var divTime = document.querySelector("div.time");
var spanValidity = document.querySelector("span.validity");
var inputTime = document.querySelector('input[type="time"]');
var gTotalSecondsLeft = 0;
var timerFunction = null;
var progressA = document.querySelector(".progress a");

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

progressA.onclick = function (event) {
    event.preventDefault();
    if (this.classList.contains("triangle-right")) {
        this.classList.replace("triangle-right", "pause");

        if (!timerFunction) {
            howManySecondsLeft(inputTime.value);
        }

        everySecond(); // start counter immediately
        // without it, the timer seems to be delayed by 1 second
        timerFunction = setInterval(everySecond, 1000);
    } else {
        this.classList.replace("pause", "triangle-right");
        audioElement.pause();
        audioElement.load(); // Resets the media to the beginning
        clearInterval(timerFunction);
        // timerFunction = null;
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
        divTime.innerText = secondsToHMS(gTotalSecondsLeft);
    }
}

function secondsToHMS(d) {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    return (
        ("0" + h).slice(-2) +
        ":" +
        ("0" + m).slice(-2) +
        ":" +
        ("0" + s).slice(-2)
    );
}

document.querySelector(".status-add").onclick = function (event) {
    event.preventDefault();
    alert("not implemented yet!");
};
