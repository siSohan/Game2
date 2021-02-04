'use strict';
let scoreBoard = 20;
let answer = Math.floor(Math.random() * 20 + 1);
//game answer
//console.log(answer);

let again = document.querySelector('.again');
//reset Button
let cheak = document.querySelector('.check');
//play Button

//gameHide number

// alert show

// Input for number

//game score

//gaem high score

//Game function ----
cheak.addEventListener('click', function () {
  // usefull variables --->
  let input = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  let comand = document.querySelector('.message').textContent;
  let highScore = document.querySelector('.highscore').textContent;

  //When no input here  -->
  if (!input) {
    document.querySelector('.message').textContent = `NOT a number `;
  }
  // When input grather than the answer -->
  else if (input > answer) {
    document.querySelector('.message').textContent = `📈 Too High `;
    scoreBoard--;
    document.querySelector('.score').textContent = scoreBoard;
  }
  // When input smaller than the input ==>
  else if (input < answer) {
    document.querySelector('.message').textContent = `📉 Too Low `;
    scoreBoard--;
    document.querySelector('.score').textContent = scoreBoard;
  }
  // When the got the answer ==>
  else if (input === answer) {
    document.querySelector('.message').textContent = `🏆 Correct number `;

    document.querySelector('.number').textContent = answer;
    document.querySelector('.highscore').textContent = scoreBoard;
    document.querySelector('body').style.backgroundColor = '#60B347';
  }
  //Fail the Game -->

  if (scoreBoard === 0) {
    document.querySelector(
      '.message'
    ).textContent = `😞 Sorry you loss the Game `;
    document.querySelector('.number').textContent = answer;
    document.querySelector('.number').textContent;

    document.querySelector('body').style.backgroundColor = '#F03A17';
  }
});

//Reset Button --->

again.addEventListener('click', function () {
  answer = Math.floor(Math.random() * 20 + 1); // Main number
  scoreBoard = 20; //score board
  document.querySelector('.message').textContent = `Start guessing... `; //game alert
  document.querySelector('.number').textContent = '?'; //game number hidden
  document.querySelector('body').style.backgroundColor = '#222'; //body color
  document.querySelector('.guess').value = ' '; //Game input
  document.querySelector('.score').textContent = scoreBoard; //Game score
});
