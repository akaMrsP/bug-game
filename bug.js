const sleep = "ZZZ";
const bug = "//o\\\\";
const initRow = [sleep, sleep, sleep, sleep, sleep];
const bugRow = [sleep, sleep, bug, sleep, sleep];
const gridState = [initRow, initRow, bugRow, initRow, initRow];
const startBtn = document.querySelector('.startBtn');
const gridSquare = document.querySelector('td');

// initializeGrid resets the gameboard to all sleep and one bug in the middle
function initializeGrid () {
    for (let i = 0; i < 5; i++)
    {
        if (i === 2) { gridState.splice(i, 1, bugRow); }
        else { gridState.splice(i, 1, initRow); }
    }
    console.log('grid initialized!');
}

// If the "Start Game" button is clicked, reset the gameboard
startBtn.addEventListener('click', initializeGrid);

console.log(gridState);