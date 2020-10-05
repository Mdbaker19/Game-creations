(function (){
    //canvas is 800 by 800
    let canvas;
    let ctx;
    let computer;
    let move = 10;
    let computerDimension = 50;
    let computerX = 375;
    let computerY = 750;
    let goal;
    let goalX = 375;
    let goalY = 0;
    let wall;
    let wallWidth = 400;
    let wallHeight = 50;
    let middleWallX = 200;
    let middleWallY = 200;

    window.onload = function gameStart(){
        canvas = document.getElementById("gameCanvas");
        ctx = canvas.getContext("2d");

        setInterval(callFunctions, 50);
    }

    function callFunctions(){
        drawEverything();
        moveAI();
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function drawEverything(){
        colorIn(0, 0, canvas.width, canvas.height, "bisque");
        colorIn(computerX, computerY, computerDimension, computerDimension, "green");
        colorIn(goalX, goalY, computerDimension, computerDimension, "black");
        colorIn(middleWallX, middleWallY, wallWidth, wallHeight, "black");
    }

    function moveAI(){
        if(computerX > middleWallX && computerX < middleWallX + wallWidth){
            computerX += move;
        }
        if(computerY > goalY){
            computerY -= move;
        }
        if(computerY < middleWallY - wallHeight){
                computerX -= move;
                if(computerX > goalX){
                    computerX -= move;
                }
        }
    }

})();