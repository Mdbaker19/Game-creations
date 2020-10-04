(function() {
    //canvas is 1000 wide and 500 tall
    let canvas;

    let canvasContext;

    let playerPiece;

    const playerWidth = 50;

    const playerHeight = 50;

    let playerPieceX = 10;

    let playerPieceY = 225;

    let projectile;

    let projectileX = 980;

    let projectileY = 235;

    let projectileWidth = 35;

    let projectileHeight = 130;

    let projectileSpeedX = -20;

    let score = 0;


    window.onload = function () {
        canvas = document.getElementById("gamecanvas");
        canvasContext = canvas.getContext("2d");

        const fps = 50;
        setInterval(callFunctions, 1000 / fps);

        window.addEventListener("keydown", function (evt){
            const direction = evt.key.replace("Arrow", "");
            playerPiece = movePlayer(direction);

        })
    }

    function callFunctions() {
        drawEverything();
        gravity();
        moveProjectile();
        collision();
    }


    function drawEverything() {
        //draw canvas with fill in function
        fillPieces(0, 0, canvas.width, canvas.height, "bisque");
        //draw player piece
        fillPieces(playerPieceX, playerPieceY, playerWidth, playerHeight, "black");
        //draw incoming item
        fillPieces(projectileX, projectileY, projectileWidth, projectileHeight, "green");
        //drawing a score counter
        canvasContext.fillText(score, 100, 100)

    }

    function fillPieces(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }

    function gravity (){
        if(playerPieceY <= 450){
            playerPieceY += 3;
        }
    }

    function movePlayer(direction) {
        switch (direction){
            case "Up":
                if(playerPieceY >= 100){
                playerPieceY -= 100;
            }
                break;
            case "Down":
                if(playerPieceY <= 349){
                playerPieceY += 100;
            }
                break;
        }
    }

    function collision(){
        if(projectileX <= 60){
                if((playerPieceY > projectileY &&
                playerPieceY < projectileY + projectileHeight) ||
                    (playerPieceY + playerHeight > projectileY &&
                        playerPieceY + playerHeight < projectileY + projectileHeight)){
                    score = 0;
                    projectileReset();
                }

        }
    }



    function moveProjectile(){
        projectileX = projectileX + projectileSpeedX + (Math.floor(Math.random() * 10) - 8);
        if (projectileX <= 0) {
            projectileReset();
            score++;
        }
    }

    function projectileReset(){
        let projectileSpot = Math.floor(Math.random()*4);
        if(projectileSpot === 1) {
            projectileX = 980;
            projectileY = 235;
        } else if (projectileSpot === 2) {
            projectileX = 980;
            projectileY = 10;
        } else if (projectileSpot === 3){
            projectileX = 980;
            projectileY = 450;
        } else {
            projectileX = 700;
            projectileY = 235;
        }
    }

})();