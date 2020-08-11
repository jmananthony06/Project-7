//ALERT BANNER

alertX.addEventListener('click', function() {
    alertBox.remove();
});


//TOGGLE BUTTON

let onOffButtons = document.getElementsByClassName('onOffButton');

for(let i = 0; i < onOffButtons.length; i++) {
    onOffButtons[i].addEventListener('click', function(e){
        console.log(e.target)
        onOffButtons[i].classList.toggle('on')
    })
}

//EMPTY INPUT ALERT

sendButton.addEventListener("click", () => {
    var inputs = ['sendInput', 'sendText'];
    inputs.map(item => {
        var e = document.getElementById(item);
        var val = e.value;
        if(!val.trim()) {
            e.style.border = "2px solid red"; //if the value is empty, give it a red border
        } else {
            e.style.border = ""; // if its not empty, it's good to go
        }
    });
});

// this event listener throws red border when appropriate criteria isn't met 