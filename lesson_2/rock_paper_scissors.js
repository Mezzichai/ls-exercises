const readline = require("readline-sync");


function prompt(message) {
  console.log(message);
}

function winner(user, computer) {
  if ((user === "rock" && (computer === "scissors" || computer === "lizard")) ||
      (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
      (user === "paper" && (computer === "rock" || computer === "spock")) ||
      (user === "spock" && (computer === "rock" || computer === "scissors")) ||
      (user === "lizard" && (computer === "spock" || computer === "paper"))
  ) {
    prompt("You win");
    return "user";
  } else {
    prompt('You lose');
    return "computer";
  }
}

const OPTIONS = ["rock", "paper", "scissors", "spock", "lizard"];

function determineInput(userInput) {
  prompt(`Choose either: ${OPTIONS.join(", ")}`);
  userInput = readline.question().toLowerCase();
  while (!OPTIONS.includes(userInput)) {
    if (userInput[0] === "r") {
      userInput = "rock";
    } else if (userInput[0] === "p") userInput = "paper";
    else if (userInput[0] === "l") userInput = "lizard";
    else if (userInput[0] === "s" && userInput[1] === "p") userInput = "spock";
    else if (userInput[0] === "s" && userInput[1] === "c")  userInput = "scissors";
    else {
      prompt("That's not a valid choice");
      userInput = readline.question();
    }
  }
  return userInput;
}

function wantsToPlayAgain() {
  prompt("Want to play again?");
  prompt("Enter 'yes' or 'no':");

  let playAgain = readline.question().toLowerCase();

  while (playAgain[0] !== "n" && playAgain[0] !== "y") {
    prompt("Please enter 'yes' or 'no'");
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] !== "y") {
    return false;
  } else return true;
}


let anotherGame = true;

while (anotherGame) {

  let userScore = 0;
  let computerScore = 0;

  while (userScore < 3 && computerScore < 3) {

    let userChoice = '';
    let computerChoice = '';

    while (computerChoice === userChoice) {

      userChoice = determineInput(userChoice);
      computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

      prompt(`You chose ${userChoice}`);
      prompt(`The computer chose ${computerChoice}`);

      if (computerChoice === userChoice) {
        prompt("Draw! Choose again.");
      }
    }
  
    let roundWinner = winner(userChoice, computerChoice);

    if (roundWinner === "user") {
      userScore += 1;
      prompt(`you win round ${userScore + computerScore}`);
      //userScore + winnerScore is an quick way to find the current round
    } else {
      computerScore += 1;
      prompt(`The computer wins round ${userScore + computerScore}`);
    }
  }

  if (userScore > computerScore) {
    prompt("You win");
  } else prompt("The computer wins");

  anotherGame = wantsToPlayAgain();
}

