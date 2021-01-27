var numberOfButtonsInput = document.getElementById('numberOfButtonsInput');
var startButton = document.getElementById('startButton');
var spawnField = document.getElementById('spawnField');
var alertResult = document.getElementById('alertResult');
var resetButton = document.getElementById('resetButton');
var randomNumber;
var numberOfButtons;

startButton.addEventListener('click', function() {
    numberOfButtons = parseInt(numberOfButtonsInput.value);
    alertResult.style.display = 'none';
        if(numberOfButtons <= 100 && numberOfButtons >= 2) {
            randomNumber = Math.floor((Math.random() *  numberOfButtons) + 1); console.log(randomNumber);
            startButton.disabled = true;
            numberOfButtonsInput.disabled = true;
            for(let i = 1; i <= numberOfButtons; ++i){
                spawnField.innerHTML = spawnField.innerHTML + ` 
                <div class="col d-flex justify-content-center">
                <button type="button" class="btn btn-success" id="` + i +`" onclick="isLuckyOrNot(this.id);">???</button>
            </div>`
            }
        }else {
            alertResult.innerHTML = 'You need to enter how many buttons you want to have!!!(between 2 and 100)';
            alertResult.className = 'alert alert-warning text-center h3';
            alertResult.style.display = 'inline-block';
        }
})


function isLuckyOrNot(id) {
    var buttonId = parseInt(id);
    alertResult.style.display = 'inline-block';
    if(buttonId === randomNumber){
        alertResult.innerHTML = 'Congratulations this was the lucky BUTTON!!! You are a lucky person';
        alertResult.className = 'alert alert-success text-center h3';
        resetButton.style.display = 'inline-block';
    }else {
        alertResult.innerHTML = 'Try again, the next one might be the lucky button :)';
        alertResult.className =  'alert alert-danger text-center h3';
    }
    
}


