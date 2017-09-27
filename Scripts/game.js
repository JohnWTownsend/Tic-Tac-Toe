var CellType = {
    Clear: 0,
    X: 1,
    O: 2
}

var board = new Array(3);
for (let i = 0; i < 3 ; i++){
    board[i] = new Array(3);
    for(let j = 0; j < 3; j++){
        board[i][j] = CellType.Clear;
    }
}

var turn = 0;
var xScore = 0;
var oScore = 0;

$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        ctx = c.getContext("2d");
    }
)


function getCellType(cell) {
    return board[cell.x][cell.y];
}

function updateCellType(cell, type) {
    board[cell.x][cell.y] = type;
}

function clearAllCells(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            board[i][j] = CellType.Clear;
        }
    }
}

function updateTurn() {
    turn = turn == 0 ? 1 : 0;
}

function getTurn() {
    return turn;
}

function addXScore() {
    xScore++;
    drawXScore(xScore);
}

function addOScore() {
    oScore++;
    drawOScore(oScore);
}

function checkIfWin() {
    for(let i = 1; i <= 2; i++){
        if( (board[0][0] == i && board[1][0] == i && board[2][0] == i) ||
            (board[0][0] == i && board[1][1] == i && board[2][2] == i) ||
            (board[0][0] == i && board[0][1] == i && board[0][2] == i) || 
            (board[0][1] == i && board[1][1] == i && board[2][1] == i) ||
            (board[0][2] == i && board[1][2] == i && board[2][2] == i) ||
            (board[1][0] == i && board[1][1] == i && board[1][2] == i) ||
            (board[2][0] == i && board[1][1] == i && board[0][2] == i) ||
            (board[2][0] == i && board[2][1] == i && board[2][2] == i))
        {
            youWin(i);
            window.setTimeout(clearGrid, 1000);
        }
    }
    
}