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

