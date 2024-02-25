const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('kkk');
const humanResults = document.getElementById('flex-container0');
const computerResults = document.getElementById('flex-container1');
let finalSay = document.getElementById('flex-container2');
let humanScore = document.getElementById('human');
let computerScore = document.getElementById('computer');
let human = document.getElementById('human');
let humann = parseInt(human.innerHTML);
let computer = document.getElementById('computer');
let computerr = parseInt(computer.innerHTML);

let humanChoice1 = '';
let compChoice1 = '';

const buttons = document.querySelectorAll('button');
buttons.forEach((buttonn) => {
  buttonn.addEventListener('click', function () {
    humanChoice1 = buttonn.innerHTML;
    console.log(`${humanChoice1} for human`);
    humanResults.innerHTML = `You chose ${buttonn.innerHTML}`;
    function computerGuess(arr) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const compChoice = ['Rock', 'Paper', 'Scissors'];
    const randomValue = computerGuess(compChoice);
    compChoice1 = randomValue;
    console.log(`${compChoice1} for computer`);

    computerResults.innerHTML = `Computer chose ${randomValue}`;
    if (compChoice1 === humanChoice1) {
      finalSay.innerHTML = 'Its a draw 😌';
      console.log(`its a draw `);
    } else if (
      (humanChoice1 === 'Rock' && compChoice1 === 'Scissors') ||
      (humanChoice1 === 'Paper' && compChoice1 === 'Rock') ||
      (humanChoice1 === 'Scissors' && compChoice1 === 'Paper')
    ) {
      finalSay.innerHTML = 'You Win 😊 ';
      humann += 1;
      human.innerHTML = humann;
      console.log(`${humann} for Human`);
    } else {
      finalSay.innerHTML = 'You Lose 😞';
      computerr += 1;
      computer.innerHTML = computerr;
      console.log(`${computerr} for Computer`);
    }
  });
});

reset.addEventListener('click', function resetGame() {
  console.log('reset game');
  computer.innerHTML = 0;
  human.innerHTML = 0;
  humanResults.innerHTML = 'Make your selection';
  computerResults.innerHTML = 'Computer selection';
  finalSay.innerHTML = ' ';
});
