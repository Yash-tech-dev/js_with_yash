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
        if (numGuess === 10) {
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
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);

  // style the new button
  const newGameBtn = document.getElementById('newGame');
  newGameBtn.style.background = "linear-gradient(135deg, #ffcc70, #ff8177)";
  newGameBtn.style.color = "#1f1c2c";
  newGameBtn.style.fontWeight = "bold";
  newGameBtn.style.fontSize = "18px";
  newGameBtn.style.border = "none";
  newGameBtn.style.borderRadius = "12px";
  newGameBtn.style.padding = "12px 20px";
  newGameBtn.style.marginTop = "20px";
  newGameBtn.style.cursor = "pointer";
  newGameBtn.style.transition = "0.3s";
  newGameBtn.style.width = "85%";
  newGameBtn.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.3)";

  // hover effect
  newGameBtn.addEventListener("mouseover", () => {
    newGameBtn.style.transform = "scale(1.05)";
    newGameBtn.style.boxShadow = "0px 6px 15px rgba(255, 129, 119, 0.6)";
  });

  newGameBtn.addEventListener("mouseout", () => {
    newGameBtn.style.transform = "scale(1)";
    newGameBtn.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.3)";
  });

  playGame = false;
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



