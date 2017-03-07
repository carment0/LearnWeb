let turnNumber = 1;
let board = []
for (let i = 0; i < 3; i += 1) {
  let row = [];
  for (let j = 0; j < 3; j += 1) {
      // zero represents empty spot
    row.push(0);
  }
  board.push(row);
}
console.table(board);

const log = document.getElementById("log")

function isGameOver(turn) {
    if (turn > 9) {
      return true;
    }
    // check whether it's 0 wins or x wins, if neither , return false
}

function removeAllListerners() {
  for (let num = 1; num < 10; num +=1) {
      const box = document.getElementById(num.toString());
      box.addEventListener("click", clickHandler)
  }
}

function addAllListener() {
  for (let num = 1; num < 10; num +=1) {
      const box = document.getElementById(num.toString());
      box.addEventListener("click", clickHandler)
  }
}

// 0, but not 1
// row = (box num - 1) / 3
// col = (box num -1) % 3

function clickHandler(event) {
  // box id is a string not a number so we need to covert it
  const box = parseInt(target.id);
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
    log.innerHTML = "Box " + num  + " is clicked!";
  }
}

addAllListener()




/*
 const box1 = document.getElementById("1")

box1.addEventListener("click", function() {
  log.append("Box 1 is clicked");
});

const box2 = document.getElementById("2")
box1.addEventListener("click", function() {
  log.append("Box 2 is clicked");
});

const box3 = document.getElementById("3")
*/
