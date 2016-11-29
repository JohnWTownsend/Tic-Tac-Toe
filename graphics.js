$(document).ready(
    function () {
        c = document.getElementById("gameCanvas");
        ctx = c.getContext("2d");
        x = document.getElementById("XS");
        xtx = x.getContext("2d");
        o = document.getElementById("OS");
        otx = o.getContext("2d");
        //drawLines(ctx);
        visXScore(0);
        visOScore(0);
    }
)

var wid = 166;
var alreadyWon = 0;

/*lines on game canvas*/
var drawLines = function (onCanvas) {
   
    //var wid = 166;
    for (i = 0; i < 2; i++)
    {
        onCanvas.moveTo(wid, 0);
        onCanvas.lineTo(wid, 500);
        onCanvas.stroke();
        onCanvas.moveTo(0, wid);
        onCanvas.lineTo(500, wid);
        onCanvas.stroke();
        wid = wid * 2;
    }
}



var updateSpot = function (spot, ctx) {
    wid = 166;
    var imgx = document.getElementById("imagex");
    var imgo = document.getElementById("imageo");

    if(getSpotType(spot) == 0 && checkTurn() == 0/*|| getSpotType(spot) == 2*/){
        if (spot == 0) {
            ctx.drawImage(imgx,0,0, wid, wid);
            /*ctx.fillStyle = ;*/
           /* ctx.fillRect(0, 0, wid, wid);*/ updateSpotType( 0 , 1);
        }
        else if (spot == 1) {
            
            ctx.drawImage(imgx, wid, 0, wid, wid); updateSpotType( 1 , 1);
        }
        else if (spot == 2) {
            
            ctx.drawImage(imgx, wid*2, 0, wid, wid); updateSpotType( 2 , 1);
        }
        else if (spot == 3) {
            
            ctx.drawImage(imgx, 0, wid, wid, wid); updateSpotType( 3 , 1);
        }
        else if (spot == 4) {
            
            ctx.drawImage(imgx, wid, wid, wid, wid); updateSpotType( 4 , 1);
        }
        else if (spot == 5) {
            
            ctx.drawImage(imgx, wid*2, wid, wid, wid); updateSpotType( 5 , 1);
        }
        else if (spot == 6) {
            
            ctx.drawImage(imgx, 0, wid*2, wid, wid); updateSpotType( 6 , 1);
        }
        else if (spot == 7) {
            
            ctx.drawImage(imgx, wid, wid*2, wid, wid); updateSpotType( 7 , 1);
        }
        else if (spot == 8) {
            
            ctx.drawImage(imgx, wid * 2, wid*2, wid, wid); updateSpotType( 8 , 1);
        }

        updateTurn();

    }
    
    else if (getSpotType(spot) == 0 && checkTurn() == 1) {
        if (spot == 0) {
            
            ctx.drawImage(imgo, 0, 0, wid, wid); updateSpotType( 0 , 2);
        }
        else if (spot == 1) {
            
            ctx.drawImage(imgo, wid, 0, wid, wid); updateSpotType( 1 , 2);
        }
        else if (spot == 2) {
            
            ctx.drawImage(imgo, wid * 2, 0, wid, wid); updateSpotType( 2 , 2);
        }
        else if (spot == 3) {
            
            ctx.drawImage(imgo, 0, wid, wid, wid); updateSpotType( 3 , 2);
        }
        else if (spot == 4) {
            
            ctx.drawImage(imgo, wid, wid, wid, wid); updateSpotType( 4 , 2);
        }
        else if (spot == 5) {
            
            ctx.drawImage(imgo, wid * 2, wid, wid, wid); updateSpotType( 5 , 2);
        }
        else if (spot == 6) {
            
            ctx.drawImage(imgo, 0, wid * 2, wid, wid); updateSpotType( 6 , 2);
        }
        else if (spot == 7) {
            
            ctx.drawImage(imgo, wid, wid * 2, wid, wid); updateSpotType( 7 , 2);
        }
        else if (spot == 8) {
            
            ctx.drawImage(imgo, wid * 2, wid * 2, wid, wid); updateSpotType( 8 , 2);
        }

        updateTurn();

    }
}

var clearGrid = function()
{
    for (i = 0; i < 9; i++) {
        updateSpotType(i, 0);
    }
    ctx.fillStyle = "mediumaquamarine";
    ctx.fillRect(0, 0, 500, 500);
}

var visXScore = function (amt) {
    xtx.fillStyle = "mediumaquamarine";
    xtx.fillRect(0, 0, 200, 100);

    

    xtx.font = "50px Haettenschweiler";
    xtx.fillStyle = "chartreuse";
    xtx.textAlign = "center";
    xtx.fillText("X Score", XS.width / 2, 50);
    xtx.strokeText("X Score", XS.width / 2, 50);
    xtx.fillText(amt, XS.width / 2, XS.height -10);
    xtx.strokeText(amt, OS.width / 2, OS.height -10);
}

var visOScore = function (amt) {
    otx.fillStyle = "mediumaquamarine";
    otx.fillRect(0, 0, 200, 100);

    otx.font = "50px Haettenschweiler";
    otx.fillStyle = "chartreuse";
    otx.textAlign = "center";
    otx.fillText("O Score", XS.width / 2, 50);
    otx.strokeText("O Score", XS.width / 2, 50);
    otx.fillText(amt, XS.width / 2, XS.height - 10);
    otx.strokeText(amt, OS.width / 2, OS.height - 10);
}

var youWin = function(type){
    if (type == 0)
        addXScore();
    else
        addOScore();

    ctx.font = "100px Haettenschweiler";
    ctx.fillStyle = "chartreuse";
    ctx.textAlign = "center";
    if (type == 0) {
        ctx.fillText("Xs Win!", gameCanvas.width / 2, gameCanvas.height / 2);
        ctx.strokeText("Xs Win!", gameCanvas.width / 2, gameCanvas.height / 2);
    }
    else {
        ctx.fillText("Os Win!", gameCanvas.width / 2, gameCanvas.height / 2);
        ctx.strokeText("Os Win!", gameCanvas.width / 2, gameCanvas.height / 2);
    }
}