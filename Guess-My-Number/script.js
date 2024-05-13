'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
    return;
  }
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'orange';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'orange';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetButton();
});

function resetButton() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
