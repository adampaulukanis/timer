var test = document.createElement('input');
var audioElement = document.createElement('audio');
var playStop = document.querySelector('#play-stop');
var divTime = document.querySelector('div.time');
var setTime = document.querySelector('#set-time');
var spanValidity = document.querySelector('span.validity');
var progress = document.querySelector('div.progress');

(function testInputType(){
    // Hide fallback initially
    spanValidity.style.display = 'none';

    try{
        test.type = 'time';
    } catch(e){
        console.error(e);
    }

    // Fallback
    if(test.type === 'text'){
        spanValidity.style.display = 'block';
        //document.querySelector('div.time input[type="time"]').style.width = "100px";
    }
})();

// play my sound
/*
var playButton = document.querySelector('div.progress a');
var audio = new Audio('./bell.wav');

playButton.addEventListener("click", handlePlayButton, false);

async function playAudio() {
    try {
        await audio.load();
        await audio.play();
    } catch(err) {
        console.error(err);
    }
}

function handlePlayButton() {
    return playAudio();

    if (audio.paused) {
        playAudio();
    } else {
        audio.pause();
    }
}
*/

audioElement.setAttribute('src', './bell.wav');
audioElement.addEventListener("load", function(ev) {
    console.log(ev);
    console.log('bell.wav loaded!');
    audioElement.play();
}, true);
audioElement.load()

playStop.onclick = function(event) {
    event.preventDefault();
    setTime.style.display = 'none';
    spanValidity.style.display = 'none';
    var counter = document.createElement('div');
    divTime.appendChild(counter);
    progress.removeChild(playStop);
    var pause = document.createElement('i');
    pause.setAttribute('class', 'fa fa-pause');
    progress.appendChild(pause);
    counter.innerText = setTime.value;
}

