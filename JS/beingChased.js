(function () {

    let canvas;

    let canvasContext;

    let player1;

    let score = 0;

    let computer;

    let playerX = 30;

    let playerY = 30;

    let computerX = 30;
    let computerXSpeed;

    let computerY = 30;
    let computerYSpeed;

    const PIECE_HEIGHT = 30;
    const PIECE_WIDTH = 30;

    const reduceDif = document.getElementById("difficulty");//in progress


    function playerSpawn() {
        playerX = Math.floor(Math.random() * 300) + 100;
        playerY = Math.floor(Math.random() * 600) + 100;
    }
    function computerSpawn(){
        computerX = Math.floor(Math.random() * 300) + 600;
        computerY = Math.floor(Math.random() * 600) + 100;
    }

    //canvas is 1000 wide and 800 high
    window.onload = function () {
        canvas = document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");
        computerSpawn();
        playerSpawn();

        const fps = 30;
        setInterval(callFunctions, 1000/fps);

        window.addEventListener("keydown", function (evt){
            const direction = evt.key.replace("Arrow", "");
            player1 = movePlayer(direction);


        reduceDif.addEventListener("click", function (){
            // function ai(){
            //     if(computerX > playerX){
            //         computerX -= 3;
            //     } if (computerY > playerY){
            //         computerY -= 3;
            //     } if (computerY < playerY){
            //         computerY += 3;
            //     } if (computerX < playerX){
            //         computerX += 3;
            //     }
            // }
        })

        })
    }


    function callFunctions(){
        drawEverything();
        movePlayer();
        ai();
        restart();
        score++;
    }

    function drawEverything(){
        colorRect(0, 0, canvas.width, canvas.height, "#bc8f8f");
        colorRect(playerX, playerY, PIECE_WIDTH, PIECE_HEIGHT, "black");//player
        colorRect(computerX, computerY, PIECE_WIDTH, PIECE_HEIGHT, "red");//ai
        canvasContext.fillText(score, 490, 100)

    }

    function colorRect(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);


    }


    function restart(){
        if(computerY === playerY + 10 || computerY === playerY - 10){
            playerSpawn();
            computerSpawn();
        } if (computerX === playerX + 10 || computerX === playerX - 10){
            playerSpawn();
            computerSpawn();
        }
    }

    function movePlayer(direction){
        switch (direction){
            case "Up":
                playerY -= 30;
                break;
            case "Down":
                playerY += 30;
                break;
            case "Left":
                playerX -= 30;
                break;
            case "Right":
                playerX += 30;
                break;
        }
    }


    function playerMovement(){

    }

    function ai(){
        if(computerX > playerX){
            computerX -= 5;
        } if (computerY > playerY){
            computerY -= 5;
        } if (computerY < playerY){
            computerY += 5;
        } if (computerX < playerX){
            computerX += 5;
        }
    }




})();