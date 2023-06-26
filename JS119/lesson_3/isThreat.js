const readline  = require("readline-sync")

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



function aiTurn(board) {

  let playerPositions = winningPositions.map((positions) => {
    return positions.filter(([row, column]) => {
      return !"XO".includes(board[row][column])
    })
  })
  console.log(playerPositions)
  let twoInARow = []
  playerPositions.forEach(positions => {
    if(positions.length === 1) {
      twoInARow.push(...positions)
    }
  })
console.log(twoInARow)
  let takingPositions = twoInARow.slice().filter(elem => {
    return 2 === elem.filter(([row, column]) => {
      return board[row][column] === "O"
    }).length
  })
  

  let blockingPositions = twoInARow.slice().filter(elem => {
    return 2 === elem.filter(([row, column]) => {
      return board[row][column] === "X"
    }).length
  })

  // let aiPositions = winningPositions.map((positions) => {
  //   return positions.filter(([row, column]) => {
  //     return !"O".includes(board[row][column])
  //   })
  // })

  // let positionsToWin = []
  // aiPositions.forEach(positions => {
  //   if (positions.length === 1) {
  //     positionsToWin.push(...positions)
  //   }
  // })

  if (0 < takingPositions.length) {
    console.log(takingPositions)
    return takingPositions
  } else if (0 < blockingPositions.length) {
    // console.log(blockingPositions)
    return blockingPositions
  }

  return false
}


// function positionToWin(board) {
//   let aiPositions = winningPositions.map((positions) => {
//     return positions.filter(([row, column]) => {
//       return !"O".includes(board[row][column])
//     })
//   })

// }


// //minimax algorithm 
// takes 3 parameters, the board, the depth, and a bool indicating whether
// the player is maximizing or minmizing the score







function computerTurn(board) {
  let position = []
  while (true) {
    if (!aiTurn(board)) {
      position.push(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3))
    } else {   
      let positionsToBlock = aiTurn(board)
      let blockingPosition = positionsToBlock[Math.floor(Math.random()*positionsToBlock.length)]
      position.push(blockingPosition[0], blockingPosition[1])
    }
    if (board[position[0]][position[1]] !== " ") {
      position = []
      continue
    } else {
      board[position[0]][position[1]] = "O"
      break
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
  while (playerScore + compScore < 5) {
    prompt(`Game ${playerScore + compScore} / 5`)

    playerTurn(board)

    if (isWinning(board) === "player"){
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
  }

  if (playerScore < compScore) {
    prompt("You lose!")
  } else prompt("You win!")

  let answer = readline.question("Want to play again?")
  if (answer[0] !== "y") break;
}







// problem: 
//   detect when a player has won a game of tictactoe

//   All three squares within any row are marked with the player's marker.
//   All three squares within any column are marked with the player's marker.
//   All three diagonal squares in either direction are marked with the player's marker.


//   Rewriting these rules in terms of our implementation, we can say 
//   that a player wins when any of the following sequences of squares
//    all contain the player's marker:

 

