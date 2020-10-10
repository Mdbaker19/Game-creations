(function (){
    // draw of laser is a little buggy, sometimes does not animate
    let cvs;
    let ctx;
    let gameOverText = document.getElementById("ifGameOver");
    const dimensions = 50;
    let alienDimension = 50;
    const ammoAdd = 1;
    const alien = {
        x: 1000,
        y: 0,
        speed: 15,
        score: 0
    };
    const player = {
        x: 100,
        y: 450,
        score: 0,
        shoot: function fire(){
            if(ammo.ammoArray.length >= 1){
                //the height and topY is set to be drawn from the top of the canvas down to just above the player
                // leftX is that so it is set to be center with the given width of half the player
                fill(this.x + dimensions / 4, 0, dimensions / 2, cvs.height - dimensions * 2, "#a44f19");
            }
        },
        jump: function jumpUp(direction){
            switch (direction) {
                case "Up":
                    this.y -= 50;
                    break;
            }
        },
        gravity: function fallBackDown(){
            if(this.y < 450){
                this.y += 10;
            }
        }
    }
    const ammo = {
        ammoArray: [],
        bullet: {
            x: 800,
            y: 425,
            speed: 20,
            size: 25,
            appear: function drawBullet(){
                fill(this.x, this.y, this.size, this.size, "grey");
            }
        }
    }
    window.onload = function start(){
        cvs = document.getElementById("gamecanvas");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
        //setInterval(logPositions, 50);

        window.addEventListener("mousedown", function fire(){
            ammo.ammoArray.pop();
            player.shoot();
            if(alien.x + alienDimension > 137.5 && alien.x < 112.5){
                alien.x = cvs.width;
                player.score++;
                alienDimension = dimensions;
            }
        });

        window.addEventListener("keydown", function jump(evt){
            const direction = evt.key.replace("Arrow", "");
            player.jump(direction);
        });
    }

    let restart = document.getElementById("restart");
    restart.addEventListener("click", function startOver(){
        if(isGameOver){
            reLoad();
            gameOverText.innerHTML = "Click to shoot the passing alien before it grows too big!";
            return true;
        } else{
            return false;
        }
    });
    function reLoad(){
        load();
        ammo.ammoArray.length = 0;
    }

    function load(){
        draw();
        moveAlien();
        gameOver();
        player.gravity();
        ammo.bullet.appear();
        moveBullet();
    }

    function draw(){
        fill(0,0, cvs.width, cvs.height, "#4c1070");//canvas
        fill(alien.x, alien.y, alienDimension, alienDimension, "black");//alien
        fill(player.x, player.y, dimensions, dimensions, "#66dbca"); //player
        ctx.fillText("successful hits: " + player.score, 500, 200);//score
        ctx.fillText("aliens that survived: " + alien.score, 500, 210);//alien score
        ctx.fillText("ammo left: " + ammo.ammoArray.length, 500, 220);// ammo count
    }

    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function moveAlien(){
        if(alien.x <= -alienDimension){
            alien.x = cvs.width;
            alien.score++;
            alienDimension *= 1.2;
        }
        alien.x -= alien.speed;
    }

    function moveBullet(){
        if(ammo.bullet.x < 0) {
            ammo.bullet.x = 800;
            //ammo.bullet.appear(); why does this not work
        }else {
            ammo.bullet.x -= ammo.bullet.speed;
        }
        if((ammo.bullet.x > player.x - ammo.bullet.size && ammo.bullet.x < player.x + dimensions) && ammo.bullet.y > player.y){
            ammo.ammoArray.push(ammoAdd);
            ammo.ammoArray.push(ammoAdd);
            ammo.ammoArray.push(ammoAdd);
            ammo.bullet.x = 800;
            //ammo.bullet.appear(); why does this not work
        }
    }

    function logPositions(){
        //console.log("bullet is at x pos: " + ammo.bullet.x);
        //console.log("player is at x pos: " + player.x);
        //console.log("bullet is at Y pos: " + ammo.bullet.y);
        //console.log("player is at Y pos: " + player.y);
    }

    let isGameOver = false;
    function gameOver(){
        if(alienDimension >= cvs.height){
            fill(0,0,cvs.width, cvs.height, "red");
            ammo.bullet.x = 1000;
            alien.score = 0;
            player.score = 0;
            gameOverText.innerHTML = "GAME OVER";
            isGameOver = true;
        }
    }
})();