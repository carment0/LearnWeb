// board = [[0, 0, 0] [0, 0, 0] [0, 0, 0]]
let board = []
for (let i = 0; i < 3; i += 1) {
  let row = [];
  for (let j = 0; j < 3; j += 1) {
    row.push();
  }
  board.push(row);
}
console.table(board);

//
// let column = []
// let j = 0
// for (let i = 0; i < 3; i += 1) {
//   column.push(board[i][j])
// }


// stops clicking
function removeAllListerners() {
  for (let num = 1; num < 10; num +=1) {
      const box = document.getElementById(num.toString());
      box.addEventListener("click", clickHandler)
  }
}

// allows clicking
function addAllListener() {
  for (let num = 1; num < 10; num +=1) {
      const box = document.getElementById(num.toString());
      box.addEventListener("click", clickHandler)
  }
}

function isRowWinningForX (row) {
  for (let i = 0; i < 3; i++) {
    if (row[i] !== 'x') {
      return false;
    }
  }
  return true;
}

function isRowWinningForO (row) {
  for (let i = 0; i < 3; i++) {
    if (row[i] !== 'o') {
      return false;
    }
  }
  return true;
}

// end game
function isGameOver(turn) {
    if (turn > 9) {
      return true;
    }

    for (let rowNum = 0; rowNum < 3; rowNum++) {
        let currentRow = board[rowNum];

        if (isRowWinningForX(currentRow) || isRowWinningForO(currentRow)) {
          return true;
        }
    }
    return false;
    // check whether it's 0 wins or x wins, if neither , return false
}


let turnNumber = 1;
//
function clickHandler(event) {
  // 0, but not 1
  // row = (box num - 1) / 3
  // col = (box num -1) % 3
  const box = event.target
  const boxNum = parseInt(event.target.id);
  const row = parseInt((boxNum - 1) / 3);
  const col = parseInt((boxNum - 1) % 3);


  if (turnNumber % 2 === 1) {
    box.innerHTML = 'x';
    board[row][col] = 'x';
  } else {
    box.innerHTML = 'o';
    board[row][col] = 'o';
  }

  console.table(board);

  turnNumber += 1;

  if (isGameOver(turnNumber)) {
    removeAllListerners();
    log.innerHTML = 'Game is over!';
  } else {
    log.innerHTML = "Box " + boxNum  + " is clicked!";
  }
}

const log = document.getElementById("log")

addAllListener()
