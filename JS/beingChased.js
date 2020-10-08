(function () {
//How to add a wall in the path
    //if computer x = wall x then only allow Y movement and if computer y = wall y only allow X movement
    // so i need to go in and separate an x and y speed movement for the ai
    //How to add a grow or change color when ai is "with in" a range of my piece
    let canvas;

    let canvasContext;

    let player1;

    let score = 0;
    let computerScore = 0;
    let difficultAmount = 0;

    let computer;
    let computerColor = "red";

    let playerX = 30;

    let playerY = 30;

    let computerX = 30;
    let computerEasySpeed = 5;
    let computerSpeed = 10;
    let computerWallSpeed = 10;

    let computerY = 30;
    let computerYSpeed;

    let wall = {
        x: 400,
        y: 200,
        width: 10,
        height: 400,
        color: "green"
    };

    let goal = {
        x: 950,
        y: 375,
        dimension: 50,
        color: "grey"
    };

    const dimension = 30;

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

        setInterval(callFunctions, 50);
        setInterval(logPosition, 500);

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

    function logPosition(){
        console.log(playerX, playerY);
        console.log(computerX, computerY);
    }

    function callFunctions(){
        drawEverything();
        movePlayer();
        ai();
        restart();
        enteredGoal();
    }

    function drawEverything(){
        colorRect(0, 0, canvas.width, canvas.height, "#ba8989");
        colorRect(0, 200, canvas.width, 400, "#52c22b")
        colorRect(playerX, playerY, dimension, dimension, "black");//player
        colorRect(computerX, computerY, dimension, dimension, computerColor);//ai
        colorRect(wall.x, wall.y, wall.width, wall.height, wall.color);//wall
        colorRect(goal.x, goal.y, goal.dimension, goal.dimension, goal.color);
        canvasContext.fillText(score, 490, 100)
        canvasContext.fillText("GOAL", goal.x + 10, goal.y - 5);
        canvasContext.fillText(computerScore, 500, 850); // why doesnt this work???

    }

    function colorRect(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);


    }

    function restart(){
        if(computerX >= playerX && computerX <= playerX + dimension){
            if(computerY >= playerY && computerY <= playerY + dimension){
                playerSpawn();
                computerSpawn();
                computerColor = "rebeccapurple";
                score = 0;
                computerScore++;
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

    function enteredGoal(){
        if(playerX >= goal.x && (playerY > goal.y && playerY < goal.y + goal.dimension)){
            playerSpawn();
            computerSpawn();
            score++;
        }
    }

    // function ai(){
    //     if(computerX > playerX){
    //         computerX -= computerSpeed;
    //     } if (computerY > playerY){
    //         computerY -= computerSpeed;
    //     } if (computerY < playerY){
    //         computerY += computerSpeed;
    //     } if (computerX < playerX){
    //         computerX += computerSpeed;
    //     }
    // }

    function ai(){//will prioritize moving around wall but still goes through
        if(computerX < canvas.width - dimension && computerX > 0 && computerY > dimension && computerY < canvas.height - dimension){
            //if computer is in the bottom half section of the wall go down(faster)
            if (computerY > wall.y + wall.height / 2) {
                computerY += computerWallSpeed;
                // computerSpeed = 0;
                if(computerY < playerY){
                    computerWallSpeed = 0;
                    computerY += computerSpeed;
                }
            }
            //if computer is in top half of wall go up
            if (computerY < wall.y + wall.height / 2) {
                computerY -= computerWallSpeed;
                // computerSpeed = 0;
                if(computerY > playerY){
                    computerWallSpeed = 0;
                    computerY -= computerSpeed;
                }
            }
            // if computer is on right side of wall go right
            if(computerX > wall.x + wall.width/2){
                computerX += computerWallSpeed;
                //computerSpeed = 0;
            }
            //if computer is on left side of wall go left
            if(computerX < wall.x + wall.width/2){
                computerX -= computerWallSpeed;
                //computerSpeed = 0;
            }
            // to move toward player x
            if(computerX > playerX){
                computerWallSpeed = 0;
                computerX -= computerSpeed;
            }
            if(computerX < playerX){
                computerWallSpeed = 0;
                computerX += computerSpeed;
            }
            // to move toward player Y
            if(computerY > playerY){
                computerWallSpeed = 0;
                computerY -= computerSpeed;
            }
            if(computerY < playerY){
                computerWallSpeed = 0;
                computerY += computerSpeed;
            }
        }

    }
    //
    // function ai(){
    //     do{
    //
    //
    //     } while(playerX < wall.x && computerX > wall.x + wall.width)
    // }

})();