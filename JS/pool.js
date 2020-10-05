(function (){

    let player;
    let playerX = 390;
    let playerY = 770;
    let playerWidth = 20;
    let playerHeight = 20;
    let canvas;
    let canvasContext;
    //canvas is 800 by 800

    let goalDimensions = 50;
    let goal = "black"
    let topLeftGoal;
    let topLeftX = 0;
    let topLeftY = 0;
    let topRightGoal;
    let topRightX = 750;
    let topRightY = 0;
    let middleRightGoal;
    let middleRightX = 750;
    let middleRightY = 375;
    let middleLeftGoal;
    let middleLeftX = 0;
    let middleLeftY = 375;
    let bottomLeftGoal;
    let bottomLeftX = 0;
    let bottomLeftY = 750;
    let bottomRightGoal;
    let bottomRightX = 750;
    let bottomRightY = 750;


    window.onload = function game(){
        canvas = document.getElementById("gamecanvas");
        canvasContext = canvas.getContext("2d");
        setInterval(callFunctions, 200);

        window.addEventListener("keydown", function move(evt){
            const direction = evt.key.replace("Arrow", "");
            player = movePlayer(direction);
        })
    }

    function callFunctions(){
        drawEverything();
        movePlayer();
        //console.log(playerY, playerX);
    }


    function drawEverything(){
        colorIn(0, 0, canvas.width, canvas.height, "bisque");
        colorIn(10, 10, 780, 780, "saddlebrown");
        colorIn(topLeftX, topLeftY, goalDimensions, goalDimensions, goal);
        colorIn(topRightX, topRightY, goalDimensions, goalDimensions, goal);

        colorIn(middleRightX, middleRightY, goalDimensions, goalDimensions, goal);
        colorIn(middleLeftX, middleLeftY, goalDimensions, goalDimensions, goal);

        colorIn(bottomLeftX, bottomLeftY, goalDimensions, goalDimensions, goal);
        colorIn(bottomRightX, bottomRightY, goalDimensions, goalDimensions, goal);

        colorIn(playerX, playerY, playerWidth, playerHeight, "green");

    }

    function colorIn(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }

    function movePlayer(direction){
        switch (direction){
            case "Up":
                if(playerY > 11){
                    playerY -= 20;
                }
                break;
            case "Down":
                if(playerY < 770){
                    playerY += 20;
                }
                break;
            case "Left":
                if(playerX > 11){
                    playerX -= 20;
                }
                break;
            case "Right":
                if(playerX < 770){
                    playerX += 20;
                }
                break;
        }
    }




})();