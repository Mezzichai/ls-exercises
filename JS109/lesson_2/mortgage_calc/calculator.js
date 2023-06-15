const readline = require("readline-sync");

function prompt(message) {
  console.log(message);
}

function invalidNumber(number) {
  return number < 0 || Number.isNaN(number);
}
prompt('Welcome to Mortgage Calculator!');


while (true) {
  prompt("What is the loan amount?");

  let loanAmount = parseFloat(readline.question()).toFixed(2);
  while (invalidNumber(loanAmount)) {
    prompt("enter a positive number");
    loanAmount = parseFloat(readline.question()).toFixed(2);
  }

  prompt("What is the APR?");
  prompt("Enter it as a decimal value");
  let APR = parseFloat(readline.question()) / 100;
  while (invalidNumber(APR)) {
    prompt("enter a positive number");
    APR = parseFloat(readline.question()) / 100;
  }

  prompt("What is the loan duration?");
  let years = parseInt(readline.question());
  while (invalidNumber(years)) {
    prompt("enter a positive number");
    years = parseInt(readline.question());
  }
 

  let monthlyInterestRate = APR / 12;
  let loanDurationMonths = years * 12;

  let monthlyPayment = (loanAmount * (monthlyInterestRate /
  (1 - Math.pow(1 + monthlyInterestRate, -loanDurationMonths)))).toFixed(2);

  prompt(`the monthly payment is $${monthlyPayment}`);


  prompt("Do you want to do another calculation?");
  prompt("y or n");
  let answer = readline.question();
  while (answer[0].toLowerCase() !== "y" || "n") {
    prompt("enter y or n");
    answer = readline.question();
  }
  if (answer[0].toLowerCase() !== "y") {
    break;
  }
}

// dont go craxy with parseInts, just on the individual vars is fine