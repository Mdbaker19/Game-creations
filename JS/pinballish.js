(function () {

    //canvas is 500 wide and 1000 tall
    let canvas;
    const cvsW = 500;
    const cvsH = 1000;

    let canvasContext;

    const paddleWidth = 175;
    const paddleHeight = 25;
    //leaves a 65px range for ball to fall through
    const paddleMove = 35;

    let leftPaddle;
    let leftPaddleX = 0;
    let leftPaddleY = 900;

    let rightPaddle;
    let rightPaddleX = cvsW - paddleWidth;
    let rightPaddleY = 900;

    let ball;
    const ballStartX = 250;
    const ballStartY = 50;
    let ballX = 250;
    let ballY = 50;
    let ballSpeedX = 0;
    let ballSpeedY = 5;




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
    }

    function drawEverything(){
        colorRectangles(0, 0, canvas.width, canvas.height, "lightblue");
        colorRectangles(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight, "black");
        colorRectangles(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight, "red");
        colorRectangles(ballX, ballY, 20, 20, "bisque");
    }


    function colorRectangles(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }


    function moveBall(){
        ballY += ballSpeedY;
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
        if(ballY > cvsH){
            ballX = ballStartX;
            ballY = ballSpeedY;
        }
    }


    function paddleRetract(){
        if(rightPaddleX < 325){
            rightPaddleX += 12.5;
        } if(leftPaddleX > 0){
            leftPaddleX -= 12.5;
        }
    }



})();