let onOffButtons = document.getElementsByClassName('onOffButton');

for(let i = 0; i < onOffButtons.length; i++) {
    onOffButtons[i].addEventListener('click', function(e){
        console.log(e.target)
        onOffButtons[i].classList.toggle('on')
    })
}