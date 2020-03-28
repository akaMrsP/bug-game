const sleep = "ZZZ";
const bug = "//o\\\\";
// const initRow = [sleep, sleep, sleep, sleep, sleep];
// const bugRow = [sleep, sleep, bug, sleep, sleep];
// const gridState = [initRow, initRow, bugRow, initRow, initRow];
const gridState = new Array (5);
const startBtn = document.getElementById('startBtn');
const gridSquare = document.getElementsByClassName('col');

// initializeGrid resets the gameboard to all sleep and one bug in the middle
function initializeGrid () {
    for (let i = 0; i < 5; i++)
    {
        gridState[i] = new Array (5);
        for (let j = 0; j < 5; j++)
        {
          gridState[i][j] = sleep;
          document.getElementById(i+"-"+j).innerHTML = sleep;
        }
    }
    gridState[2][2] = bug;    // set the first bug
    document.getElementById("2-2").innerHTML = bug;
    console.log('grid initialized!');
}

// If a square is clicked, update the gameboard
function updateGrid (squareClicked) {
  // break down the idClicked to change all three - five squares that need to update.
  console.log(squareClicked.id);
  if (document.getElementById(squareClicked.id).innerHTML == bug) {
    document.getElementById(squareClicked.id).innerHTML = sleep;
  } else if (document.getElementById(squareClicked.id).innerHTML == sleep) {
    document.getElementById(squareClicked.id).innerHTML = bug;
  } else {
    alert("To play the game, please press the Start Game button!");
  }
}

function listenerForGrid( square ) {
  gridSquare[square].addEventListener('click', function() {updateGrid(gridSquare[square])}, false);
}

// If the "Start Game" button is clicked, reset the gameboard
startBtn.addEventListener('click', initializeGrid);

// Create listeners for every square
for (var i = 0; i < gridSquare.length; i++) {
  listenerForGrid( i );
}

// Need to have neighbors update 
// don't forget about boundary conditions
// Finally, check for win state!!!

console.log(gridState);