(function () {
//How to add a wall in the path
    //if computer x = wall x then only allow Y movement and if computer y = wall y only allow X movement
    // so i need to go in and separate an x and y speed movement for the ai
    //How to add a grow or change color when ai is "with in" a range of my piece
    let canvas;

    let canvasContext;

    let player1;

    let score = 0;
    let difficultAmount = 0;

    let computer;
    let computerColor = "red";

    let playerX = 30;

    let playerY = 30;

    let computerX = 30;
    let computerEasySpeed = 2;
    let computerSpeed = 5;

    let computerY = 30;
    let computerYSpeed;

    const PIECE_HEIGHT = 30;
    const PIECE_WIDTH = 30;

    const reduceDif = document.getElementById("difficulty");//in progress
    let difficulty = document.getElementById("amount");

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



        })
    }

    //needed to be moved outside of onload
    reduceDif.addEventListener("click", function (){
        if(computerSpeed > 3) {
            difficultAmount -= 1;
            computerSpeed -= 1;
            difficulty.innerHTML(difficultAmount);
            console.log("you clicked me");
        }
    })

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
        colorRect(computerX, computerY, PIECE_WIDTH, PIECE_HEIGHT, computerColor);//ai
        colorRect(400, 200, 10, 200, "green");//wall
        canvasContext.fillText(score, 490, 100)

    }

    function colorRect(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);


    }

    function restart(){
        if(computerX > playerX && computerX < playerX + PIECE_WIDTH){
            if(computerY > playerY && computerY < playerY + PIECE_HEIGHT){
                playerSpawn();
                computerSpawn();
                computerColor = "rebeccapurple";
                score = 0;
            }
        }
    }

    function movePlayer(direction){
        switch (direction){
            case "Up":
                if(playerY > 31){
                playerY -= 30;
            }
                break;
            case "Down":
                if(playerY < canvas.height - 31){
                playerY += 30;
            }
                break;
            case "Left":
                if(playerX > 31){
                playerX -= 30;
            }
                break;
            case "Right":
                if(playerX < canvas.width - 31){
                playerX += 30;
            }
                break;
        }
    }

    function ai(){
        if(computerX > playerX){
            computerX -= computerSpeed;
        } if (computerY > playerY){
            computerY -= computerSpeed;
        } if (computerY < playerY){
            computerY += computerSpeed;
        } if (computerX < playerX){
            computerX += computerSpeed;
        }
    }




})();