(function (){
    let cvs;
    let ctx;
    const dimensions = 50;
    let alienDimension = 50;
    const alien = {
        x: 1000,
        y: 0,
        speed: 20,
        score: 0
    }
    const player = {
        x: 100,
        y: 450,
        score: 0,
        shoot: function fire(){
            fill(this.x + dimensions/4, 0, dimensions/2, cvs.height-dimensions * 2, "#a44f19");
        }
    }

    window.onload = function start(){
        cvs = document.getElementById("gamecanvas");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);

        window.addEventListener("mousedown", function fire(){
            console.log("FIRE!");
            player.shoot();
            if(alien.x > player.x - dimensions/2 && alien.x < player.x +dimensions/2){
                alien.x = cvs.width;
                player.score++;
                alienDimension = 50;
            }
        })
    }
    // does not work right now
    // let restart = document.getElementById("restart");
    // restart.addEventListener("click", function startOver(){
    //     load();
    // })

    function load(){
        draw();
        moveAlien();
        gameOver();
    }

    function draw(){
        fill(0,0, cvs.width, cvs.height, "#4c1070");//canvas
        fill(alien.x, alien.y, alienDimension, alienDimension, "black");//alien
        fill(player.x, player.y, dimensions, dimensions, "#66dbca"); //player
        ctx.fillText("successful hits: " + player.score, 500, 200);//score
        ctx.fillText("aliens that survived: " + alien.score, 500, 210);//alien score
    }

    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function moveAlien(){
        if(alien.x <= -50){
            alien.x = cvs.width;
            alien.score++;
            alienDimension *= 1.2;
        }
        alien.x -= alien.speed;
    }

    function gameOver(){
        if(alienDimension >= cvs.height){
            fill(0,0,cvs.width, cvs.height, "red");
            ctx.fillText("GAME OVER!!!!!!!", 500, 250).fillStyle("black");//not working
        }
    }

})();