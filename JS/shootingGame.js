(function (){
    let cvs;
    let ctx;
    let score = 0;
    const dimensions = 50;
    const alien = {
        x: 1000,
        y: 0
    }
    const player = {
        x: 100,
        y: 450,
        shoot: function fire(){
            fill(this.x + dimensions/4, 0, dimensions/2, cvs.height-dimensions * 2, "#a44f19");
        }
    }

    window.onload = function start(){
        cvs = document.getElementById("gamecanvas");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);

        window.addEventListener("mousedown", function fire(){
            console.log("clicked");
            player.shoot();
            if(alien.x > player.x - dimensions/2 && alien.x < player.x +dimensions/2){
                alien.x = cvs.width;
                score++
            }
        })
    }

    function load(){
        draw();
        moveAlien();
    }

    function draw(){
        fill(0,0, cvs.width, cvs.height, "#4c1070");//canvas
        fill(alien.x, alien.y, dimensions, dimensions, "black");//alien
        fill(player.x, player.y, dimensions, dimensions, "#66dbca"); //player
        ctx.fillText(score, 500, 200);//score
    }

    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function moveAlien(){
        if(alien.x <= -50){
            alien.x = cvs.width;
        }
        alien.x -= 10;
    }

})();