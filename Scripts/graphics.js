$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        x = document.getElementById("XS");
        o = document.getElementById("OS");
        CTX = c.getContext("2d");
        xCTX = x.getContext("2d");
        oCTX = o.getContext("2d");
        drawXScore(0);
        drawOScore(0);
    }
)

var cellWidth = 166;
var alreadyWon = 0;

function updateSpot (cell, CTX) {
    var imgx = document.getElementById("imagex");
    var imgo = document.getElementById("imageo");

    if(getCellType(cell) == CellType.Clear){
        let img = getTurn() ? imgo : imgx;
        let type = getTurn() ? CellType.O : CellType.X;
        CTX.drawImage(img, cell.x * cellWidth, cell.y * cellWidth, cellWidth, cellWidth);
        updateCellType(cell, type);
        updateTurn();
    }
}

function clearGrid()
{
    clearAllCells();
    ctx.fillStyle = "#CFE2DB";
    ctx.fillRect(0, 0, 500, 500);
}

function drawXScore (amt) {
    xCTX.fillStyle = "#00CCFF";
    xCTX.fillRect(0, 0, 200, 100);

    xCTX.font = "50px Haettenschweiler";
    xCTX.fillStyle = "#CFE2DB";
    xCTX.textAlign = "center";
    xCTX.fillText("X Score", XS.width / 2, 50);
    xCTX.strokeText("X Score", XS.width / 2, 50);
    xCTX.fillText(amt, XS.width / 2, XS.height -10);
    xCTX.strokeText(amt, OS.width / 2, OS.height -10);
}

function drawOScore (amt) {
    oCTX.fillStyle = "magenta";
    oCTX.fillRect(0, 0, 200, 100);

    oCTX.font = "50px Haettenschweiler";
    oCTX.fillStyle = "#CFE2DB";
    oCTX.textAlign = "center";
    oCTX.fillText("O Score", XS.width / 2, 50);
    oCTX.strokeText("O Score", XS.width / 2, 50);
    oCTX.fillText(amt, XS.width / 2, XS.height - 10);
    oCTX.strokeText(amt, OS.width / 2, OS.height - 10);
}

function youWin (type){
    ctx.font = "100px Haettenschweiler";
    ctx.fillStyle = "chartreuse";
    ctx.textAlign = "center";
    
    if (type == CellType.X){
        addXScore();
        ctx.fillText("Xs Win!", gameCanvas.width / 2, gameCanvas.height / 2);
        ctx.strokeText("Xs Win!", gameCanvas.width / 2, gameCanvas.height / 2);
    }
    else{
        addOScore();
        ctx.fillText("Os Win!", gameCanvas.width / 2, gameCanvas.height / 2);
        ctx.strokeText("Os Win!", gameCanvas.width / 2, gameCanvas.height / 2);
    }
}