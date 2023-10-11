//Generating a random number 
let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHigh = document.querySelector('.low-0R-High')
const StartOver = document.querySelector('.resultparas')

//we want to insert the value by ourselves
const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener(`click`, function (e) {
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    //check the number given by user is valid or not
    if (isNaN(guess)) {
        alert(`please enter a valid number`)
    } else if (guess < 1) {
        alert(`please enter a number greater than 1`)
    } else if (guess > 100) {
        alert(`please enter a number less than 100`)
    } else {
        prevGuess.push(guess)

        //user ka game over to nhi ho gya
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over .Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {

        displayMessage(`You gussed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    UserInput.value = '';
    guessSlot.innerHTML += `${guess}  , `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    loworHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    UserInput.value = ''
    UserInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame"> Start New Game</h2>`;
    StartOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener(`click`, function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        UserInput.removeAttribute('disabled')
        StartOver.removeChild(p)

        playGame = true
    })

}