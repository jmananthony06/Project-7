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

emptyField.addEventListener("click", () => {
    validateForm();
});


//this doesn't work but also return no errors - I don't get it - event listener was suggested from someone in community who looked at my code and no errors and is able to get it fully functional on their end but still cant get it to work on my end - sad face