const readline = require("readline-sync");


function prompt(message) {
  console.log(message);
};

function winner(user, computer) {
  if ((user === "rock" && (computer === "scissors" || computer === "lizard")) ||
      (user === "scissors" && (computer === "paper" || computer === "lizard")) || 
      (user === "paper" && (computer === "rock" || computer === "spock")) || 
      (user === "spock" && (computer === "rock" || computer === "scissors")) ||
      (user === "lizard" && (computer === "spock" || computer === "paper"))
      ) {
  prompt("You win");
  return "user"
  } else if ((computer === "rock" && (user === "scissors" || user === "lizard")) ||
             (computer === "scissors" && (user === "paper" || user === "lizard")) || 
             (computer === "paper" && (user === "rock" || user === "spock")) || 
             (computer === "spock" && (user === "rock" || user === "scissors")) ||
             (computer === "lizard" && (user === "spock" || user === "paper"))) {
  prompt('You lose');
  return "computer"
  };
};

const OPTIONS = ["rock", "paper", "scissors", "spock", "lizard"];
const AbrevOPTIONS = ["r", "p", "sc", "sp", "l"];

let anotherGame = true;

while (anotherGame) {
  let userScore = 0;
  let computerScore = 0;
  while (userScore < 3 && computerScore < 3) {
    let userChoice = "";
    let computerChoice = "";

    while (computerChoice === userChoice) {
      prompt(`Choose either: ${OPTIONS.join(", ")}`);
      userChoice = readline.question();

      while (!OPTIONS.includes(userChoice)) {
        if (userChoice[0] === "r") {
          userChoice = "rock"
        } else if (userChoice[0] === "p") {
          userChoice = "paper"
        } else if (userChoice[0] === "s" && userChoice[1] === "p") {
          userChoice = "spock"
        } else if (userChoice[0] === "s" && userChoice[1] === "c") {
          userChoice = "scissors"
        } else {
          prompt("That's not a valid choice");
          userChoice = readline.question();
        }
      };
      

      computerChoice = OPTIONS[Math.floor(Math.random()* OPTIONS.length)];

      prompt(`You chose ${userChoice}`);
      prompt(`The computer chose ${computerChoice}`);

      if (computerChoice === userChoice) {
        prompt("Draw! Choose again.");
      } ;
    };
    let roundWinner = winner(userChoice, computerChoice);
    if (roundWinner === "user") {
      userScore += 1
      prompt(`you win round ${userScore+computerScore}`)
    } else {
      computerScore += 1
      prompt(`The computer wins round ${userScore+computerScore}`)
    }
  };
  if (userScore > computerScore) {

  } else prompt("The computer wins")

  prompt("Want to play again?");
  prompt("Enter 'yes' or 'no':");

  let playAgain = readline.question().toLowerCase();

  while (playAgain[0] !== "n" && playAgain[0] !== "y") {
    prompt("Please enter 'yes' or 'no'");
    playAgain = readline.question().toLowerCase();
  };

  if (playAgain[0] !== "y") {
    anotherGame = false;
  };

};