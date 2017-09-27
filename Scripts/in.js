$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        ctx = c.getContext("2d");
    }
)

var cellWidth = 166;

function makeSelection () {
    let x = event.clientX - gameCanvas.offsetLeft;
    let y = event.clientY - gameCanvas.offsetTop;
    
    if( x >= 0 && y >= 0 && x <= 500 && y <= 500)
    {
        console.log("You clicked in a cell");
        let cell = getCell(x, y);
        updateSpot(cell, ctx);
        checkIfWin();
    }
}

function getCell(x,y){
    cell = {
        x: Math.floor(x / cellWidth),
        y: Math.floor(y / cellWidth)
    };
    return cell;
}