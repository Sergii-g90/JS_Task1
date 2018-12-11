/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/
// Function to get random integer value in a range
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

// Game values
let min = 1;
let max = 10;
let winningNum = 0;
winningNum = getRandomInt(min, max);
let guessesLeft = 3;

// UI Elements
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const restartBtn = document.querySelector('#restart-btn');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    wrongRightNumber(guess);
  }
});

// Set message
function setMessage (msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Checking for wrong right Number
function wrongRightNumber (guessVal) {
  if (guessesLeft > 0) {
    guessesLeft--;
    console.log(guessesLeft);
    if (guessVal === winningNum) {
      setMessage(`You guess it, the number was ${winningNum}. Do you want to try again?`, 'green');
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      restartBtn.style.display = 'block';
    } else {
      if (guessesLeft === 0) {
        setMessage('You are out of tries, do you want to try again?', 'red');
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        restartBtn.style.display = 'block';
      } else {
        setMessage(`You didn't guess it, try again. ${guessesLeft} tries are left`, 'red');
      }
    }
  }
}

// Listener for restrart
restartBtn.addEventListener('click', function () {
  guessesLeft = 3;
  restartBtn.style.display = 'none';
  guessInput.disabled = false;
  guessInput.style.borderColor = '';
  guessInput.value = '';
  winningNum = getRandomInt(min, max);
  setMessage('', '');
});
