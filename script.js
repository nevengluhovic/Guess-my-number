'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let messageEl = document.querySelector('.message');
let highscoreEl = document.querySelector('.highscore');
let scoreEl = document.querySelector('.score');
let checkBtnEl = document.querySelector('.check');

let score = 20;
let highscore = 0;

const displayMessage = message => (messageEl.textContent = message);

checkBtnEl.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  ///When there is no input
  if (!guess) {
    displayMessage('No number');

    /// When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').readOnly = true;
    document.querySelector('.check').style.disabled = true;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    /// When guess is too high or too small
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To high!' : 'To low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').readOnly = false;
  document.querySelector('.check').style.disabled = true;
});
