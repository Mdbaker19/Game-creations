(function (){
    // 800x800
    let player;
    let px = 50;
    let py = 750;
    let pcolor = "#3481b5";
    let ball;
    let bx = 400;
    let by = 400;
    let bcolor = "#db7b7b";
    let border = 10;
    let dimensions = 25;
    let move = 10;

    window.onload = function start(){
        cvs = document.getElementById("gamecanvas");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);

        window.addEventListener("keydown", function(evt){
            const direction = evt.key.replace("Arrow", "");
            player = movePlayer(direction);
        })
    }

    function load(){
        draw();
        movePlayer();
    }

    function draw(){
        color(0,0, cvs.width, cvs.height, "#ffffff");
        color(border/2, border/2, cvs.width-border, cvs.height-border, "#040000")
        color(px, py, dimensions, dimensions, pcolor);
        color(bx, by, dimensions, dimensions, bcolor);
    }

    function color(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function movePlayer(direction){
        switch (direction){
            case "Up":
                py -= move;
                break;
            case "Down":
                py += move;
                break;
            case "Left":
                px -= move;
                break;
            case "Right":
                px += move;
                break;
        }
    }

})();