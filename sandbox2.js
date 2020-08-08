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

function validateForm() {
if (emptyField.value == null || emptyField.value == "") {
    emptyField.value = "Please fill in this field";
    return false;
    }
    else {
        return true;
    }
} 

validateForm(); //this doesn't work but also return no errors - I don't get it