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
console.log(' Mi número aleatorio es: ' + numberToGuess);


function handleUserChoice() {

  const inputValue = parseInt(userInput.value);

  if (inputValue > numberToGuess && inputValue <= 100) {
    userAttempt.value = 'Demasiado Alto.'
  } else if (inputValue < numberToGuess && inputValue >= 1) {
    userAttempt.value = 'Demasiado bajo.'
  } else if (inputValue === numberToGuess) {
    userAttempt.value = 'Has ganado Campeona!!!'
  } else if (isNaN(inputValue) === true && inputValue == userInput.value) {
    userAttempt.value = 'El número debe estar entre 1 y 100.'
  } else {
    userAttempt.value = 'El número debe estar entre 1 y 100.'
  }

}

function calcClicks() {
  sum++;
  numAttempt.value = `Número de intentos: ${sum} `
}

function handleAllFunctions(e) {
  e.preventDefault();
  handleUserChoice();
  calcClicks();

}

submitBtn.addEventListener('click', handleAllFunctions);