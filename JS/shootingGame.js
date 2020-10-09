(function (){
    //game over black text
    // restart game button
    // bullets being added
    let cvs;
    let ctx;
    const dimensions = 50;
    let alienDimension = 50;
    const ammoToBePushed = 1;
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
            if(bullets.bulletsArray.length >= 1){
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
                this.y += 50;
            }
        }
    }
    const bullets = {
        bulletsArray: [],//will push items in if a successful jump grab is done
        bullet: {
            x: 800,
            y: 425,
            speed: 20,
            appear: function drawBullet(){
                fill(this.x, this.y, 25, 25, "grey");
            }
        }

    }

    window.onload = function start(){
        cvs = document.getElementById("gamecanvas");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
        setInterval(logPositions, 500);

        window.addEventListener("mousedown", function fire(){
            console.log("FIRE!");
            bullets.bulletsArray.pop();
            player.shoot();
            if(alien.x > player.x - dimensions/2 && alien.x < player.x +dimensions/2){
                alien.x = cvs.width;
                player.score++;
                alienDimension = 50;
            }
        });

        window.addEventListener("keydown", function jump(evt){
            const direction = evt.key.replace("Arrow", "");
            player.jump(direction);
        })
    }
    // does not work right now
    // let restart = document.getElementById("restart");
    // restart.addEventListener("click", function startOver(){
    //     reLoad();
    // })
    //
    // function reLoad(){
    //     draw();
    //     moveAlien();
    // }

    function load(){
        draw();
        moveAlien();
        gameOver();
        player.gravity();
        bullets.bullet.appear();
        moveBullet();
    }

    function draw(){
        fill(0,0, cvs.width, cvs.height, "#4c1070");//canvas
        fill(alien.x, alien.y, alienDimension, alienDimension, "black");//alien
        fill(player.x, player.y, dimensions, dimensions, "#66dbca"); //player
        ctx.fillText("successful hits: " + player.score, 500, 200);//score
        ctx.fillText("aliens that survived: " + alien.score, 500, 210);//alien score
        ctx.fillText("bullets left: " + bullets.bulletsArray.length, 500, 220);
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

    function moveBullet(){
        if(bullets.bullet.x < 0) {
            bullets.bullet.x = 800;
        }else {
            bullets.bullet.x -= bullets.bullet.speed;
        }
        if(bullets.bullet.y <= player.y && (bullets.bullet.x > player.x && bullets.bullet.x < player.x + dimensions)){
            console.log("bullet added!!")
            bullets.bulletsArray.push(ammoToBePushed);
        }
    }

    function logPositions(){
        console.log("bullet is at x pos: " + bullets.bullet.x);
        console.log("player is at x pos: " + player.x);
        console.log("bullet is at Y pos: " + bullets.bullet.y);
        console.log("player is at Y pos: " + player.y);
    }

    function gameOver(){
        if(alienDimension >= cvs.height){
            fill(0,0,cvs.width, cvs.height, "red");
            ctx.fillText("GAME OVER!!!!!!!", 500, 250).fillStyle("black");//not working
        }
    }

})();