(function (){
    let cvs;
    let ctx;
    const ship = {
        x: 25,
        y: 25,
        w: 50,
        h: 30,
        speed: 7,
        thrust: function flame(){
            fill(this.x - 18, this.y + 5, this.w/2, this.h/4, "#db720b");
            fill(this.x -18, this.y + 20, this.w/2, this.h/4, "#db720b");
        },
        gravity: function (){
            if(this.y < cvs.height - this.h){
                this.y += this.speed / 3;
            }
        },
        fly: function (direction){
            switch (direction){
                case "Up":
                    if(this.y > 0){
                        fill(this.x + this.w/2, this.y + this.h, this.w/4, this.h/4, "#db720b");
                        fill(this.x + this.w/6, this.y + this.h, this.w/4, this.h/4, "#db720b");
                        this.y -= this.speed * 1.2;
                        break;
                }
                case "Down":
                    if(this.y < cvs.height - this.h){
                        this.y += this.speed;
                        break;
                }
                case "Left":
                    if(this.x > 0){
                        this.x -= this.speed;
                        break;
                }
                case "Right":
                    if(this.x < cvs.width - this.w){
                        this.x += this.speed;
                        break;
                }
                case "f":
                    shoot();
                    break;
            }
        }
    }

    let xRan1 = Math.floor(Math.random() * 1000) + 750;
    let yRan1 = Math.floor(Math.random() * 850) + 50;
    const meteor = {
        x: xRan1,
        y: yRan1,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan1;
                this.y =yRan1;
            }
        }
    }
    let xRan2 = Math.floor(Math.random() * 1000) + 750;
    let yRan2 = Math.floor(Math.random() * 850) + 50;
    const meteor2 = {
        x: xRan2,
        y: yRan2,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan2;
                this.y =yRan2;
            }
        }
    }
    let xRan3 = Math.floor(Math.random() * 1000) + 750;
    let yRan3 = Math.floor(Math.random() * 850) + 50;
    const meteor3 = {
        x: xRan3,
        y: yRan3,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan3;
                this.y =yRan3;
            }
        }
    }
    let xRan4 = Math.floor(Math.random() * 1000) + 750;
    let yRan4 = Math.floor(Math.random() * 850) + 50;
    const meteor4 = {
        x: xRan4,
        y: yRan4,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan4;
                this.y =yRan4;
            }
        }
    }
    let xRan5 = Math.floor(Math.random() * 1000) + 750;
    let yRan5 = Math.floor(Math.random() * 850) + 50;
    const meteor5 = {
        x: xRan5,
        y: yRan5,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan5;
                this.y =yRan5;
            }
        }
    }
    let xRan6 = Math.floor(Math.random() * 1000) + 750;
    let yRan6 = Math.floor(Math.random() * 850) + 50;
    const meteor6 = {
        x: xRan6,
        y: yRan6,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan6;
                this.y =yRan6;
            }
        }
    }
    let xRan7 = Math.floor(Math.random() * 1000) + 750;
    let yRan7 = Math.floor(Math.random() * 850) + 50;
    const meteor7 = {
        x: xRan7,
        y: yRan7,
        speed: 18,
        travel: function (){
            if(this.x > 0){
                this.x -= this.speed;
            } else if (this.x <= 0){
                this.x = xRan7;
                this.y =yRan7;
            }
        }
    }

    // 1750 wide by 950 high  //
    window.onload = function (){
        cvs = document.getElementById("game");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
        //setInterval(log, 500);

        window.addEventListener("keydown", function move(evt){
           const direction = evt.key.replace("Arrow", "");
           console.log(evt.key);
           ship.fly(direction);
        });

        window.addEventListener("mousedown", function (evt) {
            shoot();
        })

    }

    function load(){
        draw();
        ship.fly();
        ship.gravity();
        ship.thrust();
        asteroids();
        meteor.travel();
        meteor2.travel();
        meteor3.travel();
        meteor4.travel();
        meteor5.travel();
        meteor6.travel();
        meteor7.travel();
    }

    function log(){
        console.log("the ship X is at: " + ship.x);
        console.log("the ship Y is at: " + ship.y);
        console.log("the meteor would be at X : " + meteor.x);
        console.log("the meteor would be at Y : " + meteor.y);
    }

    function draw(){
        fill(0, 0, cvs.width, cvs.height, "#05010a");//canvas
        fill(ship.x, ship.y, ship.w, ship.h, "#7c7b7b");//ship
    }

    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function shoot(){
        fill(ship.x + ship.w, ship.y + ship.h/4, 30, 10, "#47f0ed");
    }

    function crash(){

    }

    function asteroids(){
        fill(meteor.x, meteor.y, 25, 25, "#f8f4f4");
        fill(meteor2.x, meteor2.y, 25, 25, "#f8f4f4");
        fill(meteor3.x, meteor3.y, 25, 25, "#f8f4f4");
        fill(meteor4.x, meteor4.y, 25, 25, "#f8f4f4");
        fill(meteor5.x, meteor5.y, 25, 25, "#f8f4f4");
        fill(meteor6.x, meteor6.y, 25, 25, "#f8f4f4");
        fill(meteor7.x, meteor7.y, 25, 25, "#f8f4f4");
    }

})();