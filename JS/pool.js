(function (){

    let player;
    let playerX = 390;
    let playerY = 770;
    let playerWidth = 20;
    let playerHeight = 20;
    let canvas;
    let canvasContext;
    //canvas is 800 by 800

    //could i of done this shorter with an object or something

    //


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
        scratch_BottomLeftForNow();
        //console.log(playerY, playerX);
    }

    // to make this process shorter too? with collectively coloring in balls with an object or something??

    //

    function drawEverything(){
        colorIn(0, 0, canvas.width, canvas.height, "bisque");
        colorIn(10, 10, 780, 780, "saddlebrown");
        colorIn(topLeftX, topLeftY, goalDimensions, goalDimensions, goal);
        colorIn(topRightX, topRightY, goalDimensions, goalDimensions, goal);

        colorIn(middleRightX, middleRightY, goalDimensions, goalDimensions, goal);
        colorIn(middleLeftX, middleLeftY, goalDimensions, goalDimensions, goal);

        colorIn(bottomLeftX, bottomLeftY, goalDimensions, goalDimensions, goal);
        colorIn(bottomRightX, bottomRightY, goalDimensions, goalDimensions, goal);

        colorIn(playerX, playerY, playerWidth, playerHeight, "white");

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

    function startPosition(){
        playerY = 770;
        playerX = 390;
    }

    // an object here?? like to make this way shorter and say if a ball of these balls is in the holes, to just
    // come off the table and to the side rail or center
    // rather than trying to make a function that checks this condition for each ball

    // higher order functions, objects

    function scratch_BottomLeftForNow (){
        if(playerX < 50 && playerY > 750){
            startPosition();
        }
    }


    // let goal1 = {
    //     x: 0,
    //     y: 0,
    //     held_balls: [],
    //     function hasBall(){
    //         if(held_balls.length > 0){
    //             true;
    //         } else false;
    //     },
    //     function addBall(ball){
    //         held_balls.push(ball);
    //     },
    //     function ballInPerimiter(){
    //         // check for ball in perimiter
    //
    //         if((ball.color !== "white") && (ballX < 50 && ballY < 50)){
    //             addBall(ballToAdd);
    //         }
    //     }
    // }
    //
    // function showBalls(){
    //     return goal.held_balls
    // }

})();