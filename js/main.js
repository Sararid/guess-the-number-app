'use strict';

const userInput = document.querySelector('.js_userInput');
const submitBtn = document.querySelector('.js_submitBtn');
const userAttempt = document.querySelector('.js_userAttempt');
const numAttempt = document.querySelector('.js_numAttempt');
const numberToGuess = getRandomNumber(100);
let sum = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(numberToGuess)

function handleUserChoice() {

  const inputValue = parseInt(userInput.value);

  if (inputValue > numberToGuess && inputValue <= 100) {
    userAttempt.innerHTML = 'Hint: Number is too high.'
  } else if (inputValue < numberToGuess && inputValue >= 1) {
    userAttempt.innerHTML = 'Hint: Number is too Low.'
  } else if (inputValue === numberToGuess) {
    userAttempt.innerHTML = 'Hint: You win!'
  } else if (isNaN(inputValue) === true && inputValue == userInput.value) {
    userAttempt.innerHTML = 'Hint: The number must be between 1 and 100.'
  } else {
    userAttempt.innerHTML = 'Hint: The number must be between 1 and 100.'
  }

}

function calcClicks() {
  sum++;
  numAttempt.innerHTML = ` Attempt Nº: ${sum} `
}

function handleAllFunctions(e) {
  e.preventDefault();
  handleUserChoice();
  calcClicks();

}

submitBtn.addEventListener('click', handleAllFunctions);