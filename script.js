function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Pick one: Rock, Paper, Scissors");
    console.log(playRound(playerSelection, computerSelection));
    console.log(`${playerScore} - ${computerScore}`);
  }

  if (playerScore === computerScore) {
    console.log("The result of the game is draw!");
    let playerScore = 0;
    let computerScore = 0;
  } else if (playerScore > computerScore) {
    console.log("You won the game!");
    let playerScore = 0;
    let computerScore = 0;
  } else {
    console.log("You lost the game!");
    let playerScore = 0;
    let computerScore = 0;
  }
}
