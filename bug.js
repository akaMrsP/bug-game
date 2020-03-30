const sleep = "ZZZ";
const bug = "//o\\\\";
const gameboard = new Array(5);
const startBtn = document.getElementById('startBtn');
const gridSquare = document.getElementsByClassName('col');

// initializeGrid resets the gameboard to all bugs
function initializeGrid () {
    for (let i = 0; i < 5; i++)
    {
        gameboard[i] = new Array(5);
        for (let j = 0; j < 5; j++)
        {
          gameboard[i][j] = bug;
          document.getElementById(i+"-"+j).innerHTML = bug;
        }
    }
    console.log('grid initialized!');
}

// If a square is clicked, update the gameboard
function updateGrid (squareClicked) {
  // break down the id clicked to grab the row and col number.
  console.log(squareClicked.id);
  let row = Number(squareClicked.id.split('-')[0]);
  let col = Number(squareClicked.id.split('-')[1]);

  // create an array of squares to be updated (will be 3-5 squares)
  // push the clicked square
  // check squares to the left, to the right, above, and below
  // only push squares that are not out-of-bounds
  let updateSquares = new Array();
  updateSquares.push(squareClicked.id); // add the square that was clicked
  if (row - 1 >= 0) { updateSquares.push((row - 1) + '-' + col); }  // check left
  if (row + 1 <= 4) { updateSquares.push((row + 1)  + '-' + col); } // check right
  if (col - 1 >= 0) { updateSquares.push(row + '-' + (col - 1)); }  // check above
  if (col + 1 <= 4) { updateSquares.push(row + '-' + (col + 1)); }  // check below
  
  // Since we know the array only contains valid squares, we can loop through to flip the status of each square.
  for (let index = 0; index < updateSquares.length; index++) {
    // We have to update our gameBoard array, too
    row = Number(updateSquares[index].split('-')[0]);
    col = Number(updateSquares[index].split('-')[1]);
    if (document.getElementById(updateSquares[index]).innerHTML == bug) {
      gameboard[row][col] = sleep;
      document.getElementById(updateSquares[index]).innerHTML = sleep;
    } else if (document.getElementById(updateSquares[index]).innerHTML == sleep) {
      gameboard[row][col] = bug;
      document.getElementById(updateSquares[index]).innerHTML = bug;
    } else {
      alert("To play the game, please press the Start Game button!");
    }
  }
}

// Did the user win?
function checkForWin() {
  let isWin = true;
  for (row of gameboard) {
    for (square of row) {
      if (square == bug) { isWin = false; }
    }
  }
  if (isWin) { 
    alert("You win! To play the game again, please press the Start Game button!");
    location.reload();
  }
}

// If the "Start Game" button is clicked, reset the gameboard
startBtn.addEventListener('click', initializeGrid);

function listenerForGrid( square ) {
  gridSquare[square].addEventListener('click', function() {updateGrid(gridSquare[square])}, false);
  gridSquare[square].addEventListener('click', function() {checkForWin()}, false);
}

// Create listeners for every square
for (var i = 0; i < gridSquare.length; i++) {
  listenerForGrid( i );
}