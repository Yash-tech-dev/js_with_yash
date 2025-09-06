let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();// for holding the value
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)

    });
}
function validateGuess(guess) {
    //check that number should be in range
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMeassage(`Game Over .Random Number was ${randomNumber}`)
            endGame()

        }
        else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }


}


function checkGuess(guess) {
    if(guess===randomNumber){
        displayMeassage(`You Guessed it right`)
        endGame()
    }else if(guess<randomNumber){
                displayMeassage(`Number is TOOO low`)
    }else if(guess>randomNumber){
                displayMeassage(`Number is TOOO HIGH`)
    }
}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML += `${guess},   `;
    numGuess++;
    reamining.innerHTML= `${11-numGuess}` ;


}

function displayMeassage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`



}

function endGame() {
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML= `<h2 id="newGame">Start new Game</h2>`
   startOver.appendChild(p)
   playGame=false
   newGame();

}


function newGame() {

    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''   
        reamining.innerHTML= `${11-numGuess+1}`;
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame=true
    });


}



