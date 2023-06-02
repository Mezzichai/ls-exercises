const readline = require("readline-sync")

function winner(user, computer) {
  if ((user === "rock" && computer === "scissors") ||
  (user === "scissors" && computer === "paper") || 
  (user === "paper" && computer === "rock")) {
  prompt("You win");
  } else if ((user === 'rock' && computer === 'paper') ||
        (user === 'paper' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'rock')) {
  prompt('You lose');
  }
}

function prompt(message) {
  console.log(message)
}



OPTIONS = ["rock", "paper", "scissors"]

let anotherGame = true
while (anotherGame) {

  let userChoice = ""
  let computerChoice = ""

  while (computerChoice === userChoice) {
    prompt(`Choose either: ${OPTIONS.join(", ")}`)
    userChoice = readline.question()

    while (!OPTIONS.includes(userChoice)) {
      prompt("That's not a valid choice");
      userChoice = readline.question();
    }
    if (userChoice[0].toLowerCase() === "r") {
      userChoice = "rock"
    } else if (userChoice[0].toLowerCase() === "p") {
      userChoice = "paper"
    } else {
      userChoice = "scissors"
    }

    computerChoice = OPTIONS[Math.floor(Math.random()* OPTIONS.length)]

    prompt(`You chose ${userChoice}`)
    prompt(`The computer chose ${computerChoice}`)

    if (computerChoice === userChoice) {
      prompt("Draw! Choose again.")
    } 
  }

  winner(userChoice, computerChoice)

  prompt("Want to play again?");
  prompt("Enter 'yes' or 'no':");

  let playAgain = readline.question().toLowerCase()

  while (playAgain[0] !== "n" && playAgain[0] !== "y") {
    prompt("Please enter 'yes' or 'no'")
    playAgain = readline.question().toLowerCase()
  }

  if (playAgain[0] !== "y") {
    anotherGame = false
  }
}