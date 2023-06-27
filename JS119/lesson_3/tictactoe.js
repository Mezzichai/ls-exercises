const readline  = require("readline-sync")

const PLAYER = "player"
const COMPUTER = "computer"

function prompt(msg) {
  console.log(msg)
}

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
]

let winningPositions =  [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
]

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log('     |     |');
  console.log('');
}

function availablePositions(board) {
  let positions = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === " ") {
        positions.push([rowIndex, columnIndex]);
      }
    });
  });
  return positions;
}


function listPositions(board) {
  prompt("List of avaliable positions:")
  availablePositions(board).forEach(elem => {
    prompt(`row: ${elem[0] + 1} column: ${elem[1] + 1}`)
  })
}


function findWinOrDefense(board) {

  let twoInARow = winningPositions.filter(positions => {
    let filteredForTwo = positions.filter(([row, col]) => {
      return "XO".includes(board[row][col])
    });

    if (filteredForTwo.length < 2) return false
    return (
           filteredForTwo.every(([row,col]) => board[row][col] === "O") || 
           filteredForTwo.every(([row,col]) => board[row][col] === "X")
        )
  })

  let takingPositions = twoInARow.filter(elem => {
    return elem.some(([row, column]) => {
      return board[row][column] === "O"
    })
  })

  let blockingPositions = twoInARow.filter(elem => {
    return elem.some(([row, column]) => {
      return board[row][column] === "X"
    })
  })
//using the .find higher order method would have been simpler
  if (0 < takingPositions.length) {
    return takingPositions.shift().filter(elem => {
      return board[elem[0]][elem[1]] === " "
    })
  } else if (0 < blockingPositions.length) {
    return blockingPositions.shift().filter(elem => {
      return board[elem[0]][elem[1]] === " "
    })
  }
  return false
}

// //minimax algorithm 
// takes 3 parameters, the board, the depth, and a bool indicating whether
// the player is maximizing or minmizing the score


function computerTurn(board) {
  let position = []

    if (findWinOrDefense(board)) {
      let positionToTake = findWinOrDefense(board)
      console.log(positionToTake)
      let takingPosition = positionToTake[Math.floor(Math.random() * positionToTake.length)]
      position.push(takingPosition[0], takingPosition[1])
      board[position[0]][position[1]] = "O"
    } else if (board[1][1] === " ") {   
      board[1][1] = "O"
    } else {
      let available = availablePositions(board)
      let spaces = available[Math.floor(Math.random() * available.length)]
      position.push(...spaces)

      board[position[0]][position[1]] = "O"
    }    
  }

  function playerTurn(board) {
    let position = []
    let row = 0;
    let column = 0;
    listPositions(board)
    while (true) {
      while (true) {
        row = parseInt(readline.question("Choose a row 1 - 3 that you want to place an x:"))
        if (row < 1 || 3 < row || Number.isNaN(row)) {
          prompt("Please enter a number between 1 and 3")
        } else {
          position.push(row - 1)
          break
        }
      } 
      while (true) {
        column = parseInt(readline.question("Choose a column 1 - 3 that you want to place an x:"))
        if (column < 1 || 3 < column || Number.isNaN(column)) {
          prompt("Please enter a number between 1 and 3")
        } else {
          position.push(column - 1)
          break
        }
      }
  
      if (board[position[0]][position[1]] !== " ") {
        prompt("Please choose an unused square")
        position = []
        continue
      } else {
        board[position[0]][position[1]] = "X"
        break;
      }
    }
  }

  



function determineWin(player) {
 let piece = "X"
 if (player === "computer") {
  piece = "O"
 }
 return winningPositions.some(positions => {
    return positions.every(pos => {
      let [row, col] = pos;
      return board[row][col] === piece;
    });
  });
}



function isWinning(board) {

  let playerWon = determineWin("player")
  let computerWon = determineWin("computer")
  if (playerWon) {
    return "player"
  }
  if (computerWon) {
    return "computer"
  }
}



function isTie(board) {
  return !board.some(row => row.includes(" "))
}



function clearBoard() {
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]
}



while (true) {
  clearBoard()
  prompt("Welcome to Tic Tac Toe!")
  let playerScore = 0;
  let compScore = 0;

  let whoseTurn = readline.question('Who will go first? \n computer or player or random? ')
  if (whoseTurn === "random") {
    let choice = Math.floor(Math.random() * 2)
    if (choice === 1) {
      whoseTurn = PLAYER
    } else {
      whoseTurn = COMPUTER
    }
  }
  while (playerScore + compScore < 5) {
    prompt(`Game ${playerScore + compScore} / 5`)

   

    if (whoseTurn === PLAYER) {
      playerTurn(board)

      if (isWinning(board) === PLAYER){
        prompt("You won!")
        playerScore += 1
        displayBoard(board)
        clearBoard()
        continue
      } else if (isTie(board)) {
        prompt("Tie!")
        displayBoard(board)
        clearBoard()
        continue
      } else {
        prompt("Your move:")
      }
      displayBoard(board)
      whoseTurn = COMPUTER
    } else {
      computerTurn(board)

      if (isWinning(board) === "computer"){
        prompt("You lose!")
        compScore += 1
        displayBoard(board)
        clearBoard()
        continue
      } else if (isTie(board)) {
        prompt("Tie!")
        displayBoard(board)
        clearBoard()
        continue
      } else {
        prompt("The computers move:")
      }
      displayBoard(board)
      whoseTurn = PLAYER
    }
  }

  if (playerScore < compScore) {
    prompt("You lose!")
  } else prompt("You win!")

  let answer = readline.question("Want to play again?")
  if (answer[0] !== "y") break;
}