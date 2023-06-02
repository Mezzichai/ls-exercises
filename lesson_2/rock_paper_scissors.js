const readline = require("readline-sync");

function winner(user, computer) {
  if ((user === "rock" && (computer === "scissors" || computer === "lizard")) ||
      (user === "scissors" && (computer === "paper" || computer === "lizard")) || 
      (user === "paper" && (computer === "rock" || computer === "spock")) || 
      (user === "spock" && (computer === "rock" || computer === "scissors")) ||
      (user === "lizard" && (computer === "spock" || computer === "paper"))
      ) {
  prompt("You win");
  } else if ((computer === "rock" && (user === "scissors" || user === "lizard")) ||
             (computer === "scissors" && (user === "paper" || user === "lizard")) || 
             (computer === "paper" && (user === "rock" || user === "spock")) || 
             (computer === "spock" && (user === "rock" || user === "scissors")) ||
             (computer === "lizard" && (user === "spock" || user === "paper"))) {
  prompt('You lose');
  };
};

function prompt(message) {
  console.log(message);
};



OPTIONS = ["rock", "paper", "scissors", "spock", "lizard"];

let anotherGame = true;

while (anotherGame) {

  let userChoice = "";
  let computerChoice = "";

  while (computerChoice === userChoice) {
    prompt(`Choose either: ${OPTIONS.join(", ")}`);
    userChoice = readline.question();

    while (!OPTIONS.includes(userChoice)) {
      prompt("That's not a valid choice");
      userChoice = readline.question();
    };

    computerChoice = OPTIONS[Math.floor(Math.random()* OPTIONS.length)];

    prompt(`You chose ${userChoice}`);
    prompt(`The computer chose ${computerChoice}`);

    if (computerChoice === userChoice) {
      prompt("Draw! Choose again.");
    } ;
  };

  winner(userChoice, computerChoice);

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