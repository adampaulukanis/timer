(function(){
    var test = document.createElement('input');
    var fallbackPicker = document.querySelector('span.validity');

    // Hide fallback initially
    fallbackPicker.style.display = 'none';

    try{
        test.type = 'time';
    } catch(e){
        console.error(e);
    }

    // Fallback
    if(test.type === 'text'){
        fallbackPicker.style.display = 'block';
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

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', './bell.wav');
audioElement.addEventListener("load", function(ev) {
    console.log(ev);
    console.log('bell.wav loaded!');
    audioElement.play();
}, true);
audioElement.load()
