//your code here
const computerChoices = [0, 1, 2]; // 0 = ROCK, 1 = PAPER, 2 = SCISSORS
let userPoints = 0;
let computerPoints = 0;
let roundsLeft = 0;
let currentRound = 1;

function playRound(userChoice) {
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById('computer-choose').textContent = getChoiceName(computerChoice);
  const roundResult = getRoundResult(userChoice, computerChoice);
  document.getElementById('round-result').textContent = roundResult;
  if (roundResult === 'WON') {
    userPoints++;
  } else if (roundResult === 'LOSE') {
    computerPoints++;
  }
  roundsLeft--;
  document.getElementById('rounds-left').textContent = roundsLeft;
  document.getElementById('user-points').textContent = userPoints;
  document.getElementById('computer-points').textContent = computerPoints;
  if (roundsLeft === 0) {
    endGame();
  } else {
    currentRound++;
  }
}

function getChoiceName(choice) {
  switch (choice) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}

function getRoundResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'TIE';
  }
  if (userChoice === 0 && computerChoice === 2 ||
      userChoice === 1 && computerChoice === 0 ||
      userChoice === 2 && computerChoice === 1) {
    return 'WON';
  }
  return 'LOSE';
}

function endGame() {
  const gameResult = userPoints > computerPoints ? 'WON' : userPoints === computerPoints ? 'TIE' : 'LOSE';
 

