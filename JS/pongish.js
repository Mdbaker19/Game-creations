(function (){


    let canvas;
    //canvas is 1000 wide by 500 high
    let canvasContext;

    const paddleWidth = 10;
    const paddleHeight = 100;

    let player;
    let playerScore = 0;
    let computerScore = 0;

    let playerPaddleX = 10;
    let playerPaddleY = 200;

    let computerPaddleX = 980;
    let computerPaddleY = 200;

    const ballSize = 8;
    let ballX = 485;
    let ballSpeedX = 4;
    let ballY = 240;
    let ballSpeedY = 4;

    window.onload = function (){
        canvas = document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");


        setInterval(callFunctions, 20);

        window.addEventListener("keydown", function move(evt){
            const direction = evt.key.replace("Arrow", "");
            player = movePlayer(direction);
        })

    }

    function callFunctions(){
        drawEverything();
        colorIn();
        moveBall();
        ai();
        ballWallCollision();
        ballRestart();
        computerPaddleContact();
        playerPaddleContact();
    }

    function drawEverything(){
        colorIn(0, 0, canvas.width, canvas.height, "lightblue");//canvas
        colorIn(canvas.width/2, 0, 5, canvas.height, "black");//divider
        colorIn(playerPaddleX, playerPaddleY, paddleWidth, paddleHeight, "grey");//player 1 paddle
        colorIn(computerPaddleX, computerPaddleY, paddleWidth, paddleHeight, "grey");//computer paddle
        colorIn(ballX, ballY, ballSize, ballSize, "black");//ball
        canvasContext.fillText(playerScore, 250, 50)//player score
        canvasContext.fillText(computerScore, 750, 50)//computer score
    }

    function colorIn(topX, leftY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(topX, leftY, width, height);
    }

    function moveBall(){
        ballX += ballSpeedX;
        ballY += ballSpeedY;
    }

    function movePlayer(direction) {
        switch(direction){
            case "Up":
                playerPaddleY -= 50;
                break;
            case "Down":
                playerPaddleY += 50;
                break;
        }
    }

    function ai(){
            if (computerPaddleY + paddleHeight/2 > ballY) {
                computerPaddleY -= 3;
            } else {
                computerPaddleY += 3;
            }
    }

    function ballWallCollision(){
        if(ballY >= canvas.height){
            ballSpeedY = -ballSpeedY;
        }
        if(ballY <= 0){
            ballSpeedY = -ballSpeedY;
        }
    }

    function ballRestart(){
        if(ballX >= canvas.width){
            ballX = 485;
            ballY = 240;
            playerScore += 1;
        }
        if(ballX <= 0){
            ballX = 485;
            ballY = 240;
            computerScore += 1;
        }
    }

    //y position gets higher the lower down the canvas you get
    // y position on paddle is the top

    function computerPaddleContact(){
        if(ballX >= 979) {
            if (ballY >= computerPaddleY && ballY <= computerPaddleY + paddleHeight) {
                ballSpeedX = -ballSpeedX
            }
        }
    }

    function playerPaddleContact(){
        if(ballX <= 29) {
            if (ballY >= playerPaddleY && ballY <= playerPaddleY + paddleHeight) {
                ballSpeedX = -ballSpeedX;
            }
        }
    }



})();