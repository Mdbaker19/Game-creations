(function (){
    let cvs;
    let ctx;
    const ship = {
        x: 25,
        y: 25,
        w: 50,
        h: 30,
        speed: 5,
        thrust: function flame(){
            fill(this.x - 18, this.y + 5, this.w/2, this.h/4, "#db720b");
            fill(this.x -18, this.y + 20, this.w/2, this.h/4, "#db720b");
        },
        gravity: function (){
            this.y += this.speed/3;
        },
        fly: function (direction){
            switch (direction){
                case "Up":
                    this.y -= this.speed;
                    break;
                case "Down":
                    this.y += this.speed;
                    break;
                case "Left":
                    this.x -= this.speed;
                    break;
                case "Right":
                    this.x += this.speed;
                    break;
            }
        }
    }
    // 1750 wide by 950 high  //
    window.onload = function (){
        cvs = document.getElementById("game");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
        setInterval(log, 500);

        window.addEventListener("keydown", function move(evt){
           const direction = evt.key.replace("Arrow", "");
           ship.fly(direction);

        });
    }

    function load(){
        draw();
        ship.fly();
        ship.gravity();
        ship.thrust();
    }

    function log(){
        console.log("the ship X is at: " + ship.x);
        console.log("the ship Y is at: " + ship.y);
    }

    function draw(){
        fill(0, 0, cvs.width, cvs.height, "#1d063a");//canvas
        fill(ship.x, ship.y, ship.w, ship.h, "#7c7b7b");//ship
    }

    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }



})();