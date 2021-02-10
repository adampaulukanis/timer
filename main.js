var test = document.createElement('input');
var audioElement = document.querySelector('audio');
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

var startStop = document.querySelector('#start-stop');
startStop.onclick = function (event) {
    this.classList.toggle('pause');
    if(this.classList.contains('pause')){
        audioElement.play();
    }else{
        audioElement.pause();
        audioElement.load(); // Resets the media to the beginning
    }
}
