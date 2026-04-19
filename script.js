function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return "rock";
  } else if (computerChoice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt();
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper")
    computerScore++;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
  }
}

playGame();
