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
        setInterval(logPositions, 100);
    }

    function callFunctions(){
        drawEverything();
        moveAI();
        restart();
        //collisionDetection();
    }

    function logPositions(){
        //console.log(goalX, goalY);
        console.log(computerX, computerY);
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

    function restart(){
        if(collisionDetection(goalX, computerX, computerDimension, goalY, computerY)){
            computerX = 375;
            computerY = 750;
        }
    }

    //piece 1 is the goal, 2 is the computer
    function collisionDetection(piece1X, piece2X, piece2Width, piece1Y, piece2Y){
        if(piece1Y === piece2Y){
            if(piece2X > piece1X && piece2X < piece1X + piece2Width/2){
                return true;
            }
        }
    }

    // function restart(){
    //     if(goalY === computerY){
    //         if(computerX > goalX && computerX < goalX + computerDimension/2){
    //             return true;
    //         }
    //     }
    // }

})();