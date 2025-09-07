# projects related with DOM

## My Projects Link
[Click here to access it] ()

# solution Code

# Project 1

```javascript
console.log("JS_WITH_YASH")
//console.log('Hello!');

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='red'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id;
    }
    
    

  })
});

```
 

## Project 2

## BMI Calculator

```javascript
const form=document.querySelector('form')
// this usecase will give you empty value
// const height=parseINT(documnet.querySelector(#'height).value)


form.addEventListener('submit',function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if(height===''||height<0||isNaN(height)){
    results.innerHTML=`Please give valid height ${height}`;
}else if(weight===''||weight<0||isNaN(weight)){
results.innerHTML=`please give valid weight ${weight}`;}
else {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`


if(bmi>=24.9){
    message.innerHTML=`Person is over Weight`
}else if(bmi>=16.9&&bmi<=24.9){
    message.innerHTML=`Person is in normal range`;
}
else{
    message.innerHTML=`Person is under weight`

}
}

})

```

## Project 3

## Digital Clock

```javascript
const clock=document.querySelector('#clock')

// you can use it by getElementById
// const clock=document.getElementById('clock')

//setInterval(function (){},1000) // use to give time interval in each second (time frame you can change by ypu requiremnet)

setInterval(function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);

// here 1000 miliseconds which stands for 1 seconds
```

## Project 4

## Guess The Number

``` javascript

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



```

## Project 4

##  Generating Random color every second

```javascript

//Here we are generating random color at every second

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)];

}


return color

}
console.log(randomColor());

const startchangingColor=function(){
    intervalId= setInterval(changeBgcolor,1000)
function changeBgcolor(){
    document.body.style.backgroundColor=randomColor();
}
}

const stopchangingColor=function(){
    clearInterval(intervalId)
}


document.getElementById('start').addEventListener('click',startchangingColor);
document.getElementById('stop').addEventListener('click',stopchangingColor);

```

