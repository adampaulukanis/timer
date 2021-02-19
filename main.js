const circle = document.querySelector(".circle");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");

(function timer() {
    var setTime = 60; // ile sekund?
    var second = 0;
    circle.classList.add("pie");
    circle.style.animation = "pie " + setTime * 2 + "s linear";
    var timerId = setInterval(function () {
        second += 1;
        if (second >= setTime) {
            clearInterval(timerId);
        }
        countTime = setTime - second;
        minuteElem.innerText = ((countTime % 3600) / 60) | 0;
        secondElem.innerText = countTime % 60;
    }, 1000);
})();
