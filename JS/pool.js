(function (){

    let player;
    let playerX = 390;
    let playerY = 770;
    let ballWidth = 20;
    let ballHeight = 20;
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

    let ball1 = {
        x: 400,
        y: 200
    };
    let ball2 = {
        x: 380,
        y: 170
    };
    let ball3 = {
        x: 420,
        y: 170
    };
    let ball4 = {
        x: 440,
        y: 140
    };
    let ball5 = {
        x: 400,
        y: 140
    };
    let ball6 = {
        x: 360,
        y: 140
    }



    window.onload = function game(){
        canvas = document.getElementById("gamecanvas");
        canvasContext = canvas.getContext("2d");
        setInterval(callFunctions, 100);
        setInterval(positionCheck, 500);

        window.addEventListener("keydown", function move(evt){
            const direction = evt.key.replace("Arrow", "");
            player = movePlayer(direction);
        })
    }

    function callFunctions(){
        drawEverything();
        movePlayer();
        scratch();
    }

    function positionCheck(){
        console.log(playerX, playerY);
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

        colorIn(ball1.x, ball1.y, ballWidth, ballHeight, "blue");
        colorIn(ball2.x, ball2.y, ballWidth, ballHeight, "red");
        colorIn(ball3.x, ball3.y, ballWidth, ballHeight, "green");
        colorIn(ball4.x, ball4.y, ballWidth, ballHeight, "yellow");
        colorIn(ball5.x, ball5.y, ballWidth, ballHeight, "black");
        colorIn(ball6.x, ball6.y, ballWidth, ballHeight, "lightblue");
        colorIn(playerX, playerY, ballWidth, ballHeight, "white");

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

    function scratch(){
        //bottom left
        if(playerX < bottomLeftX + goalDimensions && playerY >= bottomLeftY){
            startPosition();
        }
        //bottom right
        if(playerX >= bottomRightX && playerY >= bottomRightY){
            startPosition();
        }
        //middle left
        if(playerY >= 370 && playerY < middleLeftY + goalDimensions && playerX < goalDimensions){
            startPosition();
        }
        //middle right
        if(playerY >= 370 && playerY <= middleRightY + goalDimensions && playerX >= middleRightX){
            startPosition();
        }
        //top right
        if(playerY < goalDimensions && playerX >= canvas.width - goalDimensions){
            startPosition();
        }
        //top left
        if(playerY < goalDimensions && playerX < goalDimensions){
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

    // function showBalls(){
    //     return goal.held_balls
    // }

})();