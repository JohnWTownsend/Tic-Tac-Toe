$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        ctx = c.getContext("2d");
    }
)


addEventListener("click", makeSelection);

var wid = 166;


var makeSelection = function () {
    console.log("You did a click!");
    var x = event.clientX - gameCanvas.offsetLeft;
    var y = event.clientY - gameCanvas.offsetTop;
    
    if( x >= 0 && y >= 0 && x <= 500 && y <= 500)
    {
        if (x < wid) x = 0;
        else if (x < wid * 2) x = 1;
        else if (x < wid * 3) x = 2;
        if (y < wid) y = 0;
        else if (y < wid * 2) y = 3;
        else if (y < wid * 3) y = 6;

        spot = x + y;
        updateSpot(spot, ctx);
        checkIfWin();
    }
}