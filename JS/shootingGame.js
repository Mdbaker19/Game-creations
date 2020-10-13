(function (){
    // draw of laser is a little buggy, sometimes does not animate
    // add a resize function for when alien is shot and game restarts
    let cvs;
    let ctx;
    let gameOverText = document.getElementById("ifGameOver");
    let highScore = document.getElementById("highscore");
    let isGameOver = false;
    const dimensions = 50;
    let alienDimension = 50;
    const ammoAdd = 1;
    const alien = {
        x: 1000,
        y: 0,
        speed: 15,
        score: 0,
        eyes: 5,
        arms: 15
    };
    const player = {
        x: 100,
        y: 450,
        score: 0,
        shoot: function fire(){
            if(ammo.ammoArray.length >= 1){
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
        //setInterval(logPositions, 350);

        window.addEventListener("mousedown", function fire(){
            ammo.ammoArray.pop();
            player.shoot();
            if(alien.x + alienDimension > player.x + (dimensions * .75) && alien.x < (player.x + dimensions/4)){
                alien.x = cvs.width;
                revertAlienSize();
                player.score++;

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
            console.log("not eligible for new game yet")
            return false;
        }
    });
    function reLoad(){
        load();
        ammo.ammoArray.length = 0;
        alien.speed = 15;
        alien.score = 0;
        player.score = 0;
        player.y = 450;
        revertAlienSize();
    }

    function load(){
        draw();
        moveAlien();
        player.gravity();
        ammo.bullet.appear();
        moveBullet();
    }

    function draw() {
        fill(0, 0, cvs.width, cvs.height, "#581183");//canvas
        fill(0, 300, cvs.width, 200, "#17748f");//sky
        fill(0, 400, cvs.width, 100, "#3b3333");//ground
        fill(player.x, player.y, dimensions, dimensions, "#66dbca"); //player
        ctx.fillText("successful hits: " + player.score, 500, 200);//score
        ctx.fillText("aliens that survived: " + alien.score, 500, 210);//alien score
        ctx.fillText("ammo left: " + ammo.ammoArray.length, 500, 220);// ammo count
        fill(alien.x, alien.y, alienDimension, alienDimension, "black");//alien
        fill(alien.x + alienDimension / 4, alien.y + alienDimension / 2, alien.eyes, alien.eyes, "#f35f11");//alien eyes
        fill(alien.x + alienDimension * .7, alien.y + alienDimension / 2, alien.eyes, alien.eyes, "#f35f11");//alien eyes
        fill(alien.x + alienDimension * .12, alien.y + alienDimension, alien.eyes, alien.arms, "#000000");//alien arm
        fill(alien.x + alienDimension * .45, alien.y + alienDimension, alien.eyes, alien.arms, "#000000");//alien arm
        fill(alien.x + alienDimension * .78, alien.y + alienDimension, alien.eyes, alien.arms, "#000000");//alien arm
    }
    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function moveAlien(){
        if(alien.x <= -alienDimension){
            alien.x = cvs.width;
            alien.score++;
            alien.speed += 1
            alienDimension = Math.round(alienDimension * 1.2);
            alien.eyes *= 1.2;
            alien.arms *= 1.2
        } else if(alienDimension > 444 && alien.x < -163){
            alien.speed *= .2;
            player.y -= 100;
            isGameOver = true;
            ammo.bullet.x = 1000;
            highScore.innerHTML = player.score;
            gameOverText.innerHTML = "GAME OVER";
            fill(alien.x + alienDimension * .45, alien.y + alienDimension * .75, alienDimension/2, alien.eyes, "#f80909");
        }
        alien.x -= alien.speed;
    }
    function revertAlienSize(){
        alien.eyes = 5;
        alien.arms = 15;
        alienDimension = dimensions;
    }

    function moveBullet(){
        if(ammo.bullet.x < 0) {
            ammo.bullet.x = 800;
        }else {
            ammo.bullet.x -= ammo.bullet.speed;
        }
        if((ammo.bullet.x > player.x - ammo.bullet.size && ammo.bullet.x < player.x + dimensions) && ammo.bullet.y > player.y){
            ammo.ammoArray.push(ammoAdd);
            ammo.ammoArray.push(ammoAdd);
            ammo.bullet.x = 800;
        }
    }

    function logPositions(){
        //console.log(alienDimension);
        //console.log(alien.x);
        //console.log("bullet is at x pos: " + ammo.bullet.x);
        //console.log("player is at x pos: " + player.x);
        //console.log("bullet is at Y pos: " + ammo.bullet.y);
        //console.log("player is at Y pos: " + player.y);
    }
    console.log("The alien will move across the screen and will grow 20% the next time it passes" + "\n" +
        "if it is not shot down. If you fail to shoot down the alien before it" + "\n" +
        "grows too big, you will be eaten and the game will end. You will need to start" + "\n" +
        "a new game by clicking the button (ammo will be reset along with score)" + "\n" +
        "(you can not reset for a new game until the game has ended)" + "\n" +
        "to shoot the alien you need to jump and grab an ammo box as it passes over head," + "\n" +
        "you will be given 2 shots for each successful ammo box catch," + "\n" +
        "click the mouse to shoot the alien at the right time" + "\n" +
        " when shot down the alien will revert back to it's normal size");
})();