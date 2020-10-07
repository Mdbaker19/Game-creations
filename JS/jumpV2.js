(function (){
    //1000 by 600
    let canvas;
    let ctx;
    let dimensions = 50;
    let playerColor = "aliceblue";

    let player = {
        head: {
          x: 475,
          y: 190,
          width: 100,
          height: 50
        },
        neck: {
          x: 512.5,
          y: 250,
          height: 40,
          width: 25
        },
        leftArm: {
            x: 390,
            y: 300,
            width: 100,
            height: 30
        },
        rightArm: {
            x: 560,
            y: 300,
            width: 100,
            height: 30
        },
        upperBody: {
            x: 500,
            y: 300
        },
        lowerBody: {
            x: 500,
            y: 360,
        },
        leftLeg: {
            x: 440,
            y: 420,
            height: 100
        },
        rightLeg: {
            x: 560,
            y: 420,
            height: 100
        },
    }

    window.onload = function startGame(){
        canvas = document.getElementById("gamecanvas");
        ctx = canvas.getContext("2d");
        setInterval(callFunctions, 100);

        window.addEventListener("keydown", function(evt){
            const direction = evt.key.replace("Arrow", "");
            //console.log(direction);
            player = move(direction);
        })
    }

    function callFunctions(){
        drawEverything();
        move();
    }

    function move (direction){
        switch (direction){
            //do not need case "ArrowUp" with the replace arrow with ""
            case "Up":
                player.head.y -= 5;
                player.neck.y -= 5;
                player.upperBody.y -= 5;
                player.lowerBody.y -= 5;
                player.leftLeg.y -= 5;
                player.rightLeg.y -= 5;
                player.rightArm.y -= 5;
                player.leftArm.y -= 5;
                break;
            case "Down":
                player.head.y += 5;
                player.neck.y += 5;
                player.upperBody.y += 5;
                player.lowerBody.y += 5;
                player.leftLeg.y += 5;
                player.rightLeg.y += 5;
                player.rightArm.y += 5;
                player.leftArm.y += 5;
                break;
            case "Left":
                player.head.x -= 5;
                player.neck.x -= 5;
                player.upperBody.x -= 5;
                player.lowerBody.yx -= 5;
                player.leftLeg.x -= 5;
                player.rightLeg.x -= 5;
                player.rightArm.x -= 5;
                player.leftArm.x -= 5;
                break;
            case "Right":
                player.head.x += 5;
                player.neck.x += 5;
                player.upperBody.x += 5;
                player.lowerBody.x += 5;
                player.leftLeg.x += 5;
                player.rightLeg.x += 5;
                player.rightArm.x += 5;
                player.leftArm.x += 5;
                break;
        }
    }

    function drawEverything(){
        colorIn(0,0, canvas.width, canvas.height, "#220a12");
        colorIn(player.head.x, player.head.y, player.head.width, player.head.height, playerColor);
        colorIn(player.neck.x, player.neck.y, player.neck.width, player.neck.height, playerColor);
        colorIn(player.upperBody.x, player.upperBody.y, dimensions, dimensions, playerColor);
        colorIn(player.lowerBody.x, player.lowerBody.y, dimensions, dimensions, playerColor);
        colorIn(player.leftArm.x, player.leftArm.y, player.leftArm.width, player.leftArm.height, playerColor);
        colorIn(player.rightArm.x, player.rightArm.y, player.rightArm.width, player.rightArm.height, playerColor);
        colorIn(player.leftLeg.x, player.leftLeg.y, dimensions, player.rightLeg.height, playerColor);
        colorIn(player.rightLeg.x, player.rightLeg.y, dimensions, player.leftLeg.height, playerColor);
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }


})();