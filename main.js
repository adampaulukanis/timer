document.addEventListener('click', function (event) {
    console.log(event.target);
});

function testInputTime() {
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
}

testInputTime();
