function removeAllListerners() {
    for (let num = 1; num < 10; num +=1) {
        const box = document.getElementById(num.toString());
        box.addEventListener("click", handleClick);
    }
}

function addAllListener() {
    for (let num = 1; num < 10; num +=1) {
        const box = document.getElementById(num.toString());
        box.addEventListener("click", handleClick);
    }
}

function isRowWinningForX () {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        let xCount = 0;

        for (let i = 0; i < 3; i++) {

            if (board[rowNum][i] === 'x') {
                xCount += 1;
            }

            if (xCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function isColumnWinningForX () {
  for (let colNum = 0; colNum < 3; colNum++) {
    let xCount = 0;

    for (let i = 0; i < 3; i++) {

      if (board[i][colNum] === 'x') {
        xCount += 1;
      }
      if (xCount === 3) {
        return true;
      }
    }
  }
  return false;
}

function isDiagonal1WinningForX () {
  let xCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] === 'x') {
     xCount += 1;
   }
   if (xCount === 3) {
     return true;
   }
 }
 return false;
}

function isDiagonal2WinningForX () {
let xCount = 0;
let i = 0;
let j = 2;

  while (i < 3 && j >= 0) {
    if (board[i][j] === 'x') {
      xCount += 1;
      i += 1;
      j -= 1;
    }
    if (xCount === 3) {
      return true;
    }
  }
  return false;
}





function isRowWinningForO () {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        let oCount = 0;

        for (let i = 0; i < 3; i++) {

            if (board[rowNum][i] === 'o') {
                oCount += 1;
            }

            if (oCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function isColumnWinningForO () {
  for (let colNum = 0; colNum < 3; colNum++) {
    let oCount = 0;

    for (let i = 0; i < 3; i++) {

      if (board[i][colNum] === 'o') {
        oCount += 1;
      }
      if (oCount === 3) {
        return true;
      }
    }
  }
  return false;
}

function isDiagonal1WinningForO () {
 let oCount = 0;
 for (let i = 0; i < 3; i++) {

   if (board[i][i] === 'o') {
     oCount += 1;
   }
   if (oCount === 3) {
     return true;
   }
 }
 return false;
}

function isGameOver() {
    if (turnNumber > 9) {
        return true;
    }

    if (isRowWinningForX() || isRowWinningForO() || isColumnWinningForO() || isColumnWinningForX() || isDiagonal1WinningForX() || isDiagonal2WinningForX()) {
        return true;
    }
    return false;
}

function handleClick(event) {
    const box = event.target;
    const boxNum = parseInt(box.id);
    const row = parseInt((boxNum - 1) / 3);
    const col = parseInt((boxNum - 1) % 3);

    if (turnNumber % 2 === 1) {
        box.innerHTML = 'x';
        board[row][col] = 'x';
    } else {
        box.innerHTML = 'o';
        board[row][col] = 'o';
    }

    turnNumber += 1;
    console.table(board);
    console.log('Checking if it works', isGameOver());
    if (isGameOver()) {
        removeAllListerners();
        log.innerHTML += 'Game is over!';
    } else {
        log.innerHTML = 'Box ' + event.target.id + ' is clicked!';
    }
}


let turnNumber = 1;

let board = [];
for (let i = 0; i < 3; i += 1) {
    let row = [];
    for (let j = 0; j < 3; j += 1) {
        row.push(' ');
    }
    board.push(row);
}

console.table(board);

const log = document.getElementById("log");

addAllListener();
