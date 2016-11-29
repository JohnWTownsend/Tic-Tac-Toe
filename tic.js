$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        ctx = c.getContext("2d");
    }
)


var board = [];
var turn = 0;
var xScore = 0;
var oScore = 0;

for (i = 0; i < 9 ; i++){
    board[i] = 0;
}

var getSpotType = function (spot) {
    return board[spot];
}

var updateSpotType = function (spot, type) {
    board[spot] = type;
}

var updateTurn = function () {
    turn++;
}

var checkTurn = function () {
    return turn % 2;
}

var addXScore = function () {
    xScore++;
    visXScore(xScore);
}

var addOScore = function () {
    oScore++;
    visOScore(oScore);
}

var checkIfWin = function () {
    console.log("You are in Check if I win...");
    if(board[0] == 1 && board[1] == 1 && board[2] == 1)
    {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[0] == 1 && board[4] == 1 && board[8] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[0] == 1 && board[3] == 1 && board[6] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[1] == 1 && board[4] == 1 && board[7] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[2] == 1 && board[5] == 1 && board[8] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[2] == 1 && board[4] == 1 && board[6] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[3] == 1 && board[4] == 1 && board[5] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[6] == 1 && board[7] == 1 && board[8] == 1) {
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[0] == 2 && board[1] == 2 && board[2] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[0] == 2 && board[4] == 2 && board[8] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[0] == 2 && board[3] == 2 && board[6] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[1] == 2 && board[4] == 2 && board[7] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[2] == 2 && board[5] == 2 && board[8] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[2] == 2 && board[4] == 2 && board[6] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[3] == 2 && board[4] == 2 && board[5] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
    else if (board[6] == 2 && board[7] == 2 && board[8] == 2) {
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
}