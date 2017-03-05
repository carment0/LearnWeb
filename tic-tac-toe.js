const log = document.getElementById("log")

let turnNumber = 1;


for ( let num = 1; num < 10; num += 1) {
  const box = document.getElementById(num.toString());
  debugger
  box.addEventListener("click", function() {

    if (turnNumber % 2 === 1) {
      box.innerHTML = 'x';
    } else {
      box.innerHTML = 'o';
    }
    turnnumber += 1;
    
    log.innerHTML = "Box " + num  + " is clicked!";
  });
}
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
