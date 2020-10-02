(function() {
//add an up and down movement
//projectile will switch between spawn at top section and bottom section randomly
//Make the speed random too
    //canvas is 1000 wide and 500 tall
    let canvas;

    let canvasContext;

    let playerPiece;

    const playerWidth = 50;

    const playerHeight = 50;

    let playerPieceX = 10;

    let playerPieceY = 250;

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
        playerPieceY +=3;
        moveProjectile();
        collision();
    }


    function drawEverything() {
        //draw canvas with fill in funciton
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

    function movePlayer(direction){
        //switch (direction) {
            if(direction === "Up") { //add an if case for when piece is at top
                if (playerPieceY <= 0) {
                    playerPieceY += 3;
                } else
                    playerPieceY -= 100;
            }
                 //break;
            if(direction === "Down") { //add an if case for when piece is at bottom
                if (playerPieceY >= canvas.height) {
                    playerPieceY -= 3;
                }
                playerPieceY += 100;
            }
                //break;
        }
    //}

    function collision(){
        if(projectileY === playerPieceY){
            score = 0;
        }
    }


    function moveProjectile(){
        projectileX = projectileX + projectileSpeedX // makes it move sporadically not a random set speed like i want * Math.floor(Math.random()*2) + .25);
        if (projectileX <= 0) {
            projectileReset();
            //do i need a different if case here to increment score???
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