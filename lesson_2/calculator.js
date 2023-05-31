// prompt for the first and then second number
// prompt for operation
// perform calculations
// print result
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to Calclulator!");

let continuesLoop = true

while (continuesLoop === true) {
  prompt("What is the first operand?");
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }
  
  prompt("What is the second operand?");
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }
  
  prompt("What operation do you want to perform?\n1)Add 2) Subtract 3) Multiply 4) Divide');");
  let operation = readline.question();
  
  
  while (!['1','2','3','4'].includes(operation)) {
    prompt("Enter a number that is 1-4");
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case  "1":
      output = Number(number1) + Number(number2);
      break;
    case  "2":
      output = Number(number1) - Number(number2);
      break;
    case  "3":
      output = Number(number1) * Number(number2);
      break;
    case  "4":
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`The result is: ${output}`);

  prompt("Would you like to make another calculation?\ntype N if you want to stop");
  let loop = readline.question();
  if (loop.toLowerCase() === "n") {
    continuesLoop = false
  }
}

prompt("No more calculations")

