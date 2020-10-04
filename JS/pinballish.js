(function () {

    //canvas is 500 wide and 900 tall
    let canvas;
    const cvsW = 500;
    const cvsH = 1000;

    let canvasContext;
    let score = 0;


    function leftBumperHit(){
        if(ballX > leftBumperX && ballX < leftBumperX + bumperWidth){
            if(ballY > leftBumperY && ballY < leftBumperY + bumperHeight){
                ballSpeedY = -ballSpeedY * 1.1;
                ballSpeedX = -ballSpeedX * 1.1;
            }
        }
    }

    function rightBumperHit(){
        if(ballX > rightBumperX && ballX < rightBumperX + bumperWidth){
            if(ballY > rightBumperY && ballY < rightBumperY + bumperHeight){
                ballSpeedY = -ballSpeedY * 1.1;
                ballSpeedX = -ballSpeedX * 1.1;
            }
        }
    }


    const leftBumperX = 140;
    const leftBumperY = 300;
    const rightBumperX = 350;
    const rightBumperY = 300;
    const bumperWidth = 50;
    const bumperHeight = 30;

    const paddleWidth = 135;
    const paddleHeight = 25;
    //leaves a 65px range for ball to fall through
    const paddleMove = 35;

    let leftPaddle;
    let leftPaddleX = 0;
    let leftPaddleY = 800;

    let rightPaddle;
    let rightPaddleX = cvsW - paddleWidth;
    let rightPaddleY = 800;

    let ball;
    const ballStartX = 250;
    const ballStartY = 50;
    let ballX = 250;
    let ballY = 50;
    let ballSpeedX = 2;
    let ballSpeedY = 7;




    window.onload = function (){
        canvas = document.getElementById("gamecanvas");
        canvasContext = canvas.getContext("2d");

        const fps = 60;
        setInterval(callFunctions, 1000/fps);

        window.addEventListener("keydown", function (evt){
            const direction = evt.key.replace("Arrow", "");
            leftPaddle = controlPaddles(direction);
            rightPaddle = controlPaddles(direction);
        })

    }


    function callFunctions(){
        drawEverything();
        moveBall();
        controlPaddles();
        paddleRetract();
        restartBall();
        rightBumperHit();
        leftBumperHit();
        ballWallBounce();
        rightPaddleBounce();
        leftPaddleBounce();
    }

    function drawEverything(){
        colorRectangles(0, 0, canvas.width, canvas.height, "lightblue");// for canvas
        colorRectangles(leftBumperX, leftBumperY, bumperWidth, bumperHeight, "orange");//for left bumper
        colorRectangles(rightBumperX, rightBumperY, bumperWidth, bumperHeight, "orange");//for right bumper
        colorRectangles(ballX, ballY, 20, 20, "bisque");// for ball
        colorRectangles(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight, "black");
        colorRectangles(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight, "red");
        canvasContext.fillText(score, 250, 100);
    }


    function colorRectangles(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }


    function moveBall(){
        ballY += ballSpeedY;
        ballX += ballSpeedX;
    }

    function ballWallBounce(){
        if(ballX <= 0){
            ballSpeedX = -ballSpeedX * 1.1;
        }
        if(ballX >= canvas.width - 10){
            ballSpeedX = -ballSpeedX * 1.1;
        }
        if(ballY <= 0){
            ballSpeedY = -ballSpeedY * 1.1;
        }
    }

    function leftPaddleBounce(){
        if(ballY >= leftPaddleY - paddleHeight/2){
            if(ballX >= 0 && ballX <= leftPaddleX + paddleWidth){
                ballSpeedY = -ballSpeedY * 1.1;
                score++;
            }
        }
    }

    function rightPaddleBounce(){
        if(ballY >= rightPaddleY - paddleHeight/2){
            if(ballX <= canvas.width - 10 && ballX >= rightPaddleX){
                ballSpeedY = -ballSpeedY * 1.1;
                score++;
            }
        }
    }

    function controlPaddles(direction){
        switch (direction){
            case "Up":
                leftPaddleY -= paddleMove;
                rightPaddleY -= paddleMove;
                break;
            case "Left":
                rightPaddleX -= paddleMove;
                break;
            case "Right":
                leftPaddleX += paddleMove;
                break;
            case "Down":
                leftPaddleY += paddleMove;
                rightPaddleY += paddleMove;
                break;
        }
    }

    function restartBall(){
        if(ballY >= cvsH - 10){
            ballX = ballStartX;
            ballY = ballStartY;
            ballSpeedX = 2;
            ballSpeedY = 7;
            score = 0;
        }
    }



    function paddleRetract(){
        if(rightPaddleX < 365){
            rightPaddleX += 12.5;
        } if(leftPaddleX > 0){
            leftPaddleX -= 12.5;
        }if(rightPaddleY >= 900){
            rightPaddleY -= paddleMove;
        }if(leftPaddleY >= 900) {
            leftPaddleY -= paddleMove;
        }if(rightPaddleY <= 700){
            rightPaddleY += paddleMove;
        }if(leftPaddleY <= 700){
            leftPaddleY += paddleMove;
        }
    }



})();