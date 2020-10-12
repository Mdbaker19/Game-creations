(function (){
    let cvs;
    let ctx;
    //1000x500
    const player = {
        x: 10,
        y: 215,
        h: 60,
        w: 10,
        move: function(direction){
            switch (direction){
                case "Up":
                    if(this.y > 0){
                    this.y -= 10;
                } break;
                case "Down":
                    if(this.y < cvs.height - this.h){
                    this.y += 10;
                } break;
            }
        }
    }
    const computer = {
        x: 980,
        y: 215,
        h: 60,
        w: 10,
        move: function trackBall(){
            if(this.y + this.h/2 > ball.y && this.y > 0){
                this.y -= 5;
            } else if(this.y < cvs.height -this.h && this.y - this.h/2 < ball.y){
                this.y += 5;
            }
        }
    }
    const ball = {
        x: 450,
        y: 250,
        d: 10,
        speed: 5,
        move: function(){
            this.y -= this.speed;
        }
    }
    window.onload = function (){
        cvs = document.getElementById("game");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);

        window.addEventListener("keydown", function(evt){
           const direction = evt.key.replace("Arrow", "");
           player.move(direction);
        });
    }
    function load(){
        draw();
        computer.move();
        ball.move();
    }
    function draw(){
        fill(0,0,cvs.width,cvs.height, "#2bbb6e");//canvas
        fill(cvs.width/2 -  5, 0, 10, cvs.height, "#e57575");//divider
        fill(player.x, player.y, player.w, player.h, "#110808");//player
        fill(computer.x, computer.y, computer.w, computer.h, "#010101");//computer
        fill(ball.x, ball.y, ball.d, ball.d, "#0338f4");//ball
    }
    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }
})();