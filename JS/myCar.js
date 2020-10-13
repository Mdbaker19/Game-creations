(function (){
    //add a message for allowing lane change if car near by and confirm if want to do it anyway, crash
    let cv;
    let ctx;
    //600x900
    let crash = false;
    let crashR = false;
    let crashPed = false;
    let car = {
        x: 285,
        y: 850,
        h: 50,
        w: 30,
        drive: 20,
        laneShift: 50,
        move: function(direction){
            switch (direction){
                case "Up":
                    if(this.y > 0){
                        this.y -= this.drive;
                        break;
                    }
                case "Down":
                    if(this.y < cv.height - this.h){
                        this.y += this.drive;
                        break;
                    }
                case "Left":
                    if(this.x > 185){
                        this.x -= this.laneShift;
                        break;
                    }
                case "Right":
                    if(this.x < 385){
                        this.x += this.laneShift;
                        break;
                    }
            }
        }
    }
    let carL = {
        x: 235,
        y: 850,
        h: 50,
        w: 30,
        drive: 15,
        move: function(direction){
            switch (direction){
                case "f":
                    if(this.y > 0){
                        this.y -= this.drive;
                        break;
                    }
                case "b":
                    if(this.y < cv.height - this.h){
                        this.y += this.drive;
                        break;
                    }
            }
        }
    }
    let carR = {
        x: 335,
        y: 850,
        h: 50,
        w: 30,
        drive: 15,
        move: function(direction){
            switch (direction){
                case "u":
                    if(this.y > 0){
                        this.y -= this.drive;
                        break;
                    }
                case "d":
                    if(this.y < cv.height - this.h){
                        this.y += this.drive;
                        break;
                    }
            }
        }
    }
    let vRoad = {
        w: 150,
        h: 900
    }
    let hRoad = {
        w: 600,
        h: 150
    }
    let light = {
        x: 285,
        y: 435,
        d: 30,
        on: false,
        glow: function (){
            //setTimeout(this.turnRed, 8000);
            setTimeout(this.turnGreen, 5000);
        },
        turnRed: function(){
            light.on = false;
        },
        turnGreen: function(){
            light.on = true;
        }

    }
    let pedestrian = {

    }
    window.onload = function (){
        cv = document.getElementById("game");
        ctx = cv.getContext("2d");
        setInterval(load, 50);
        setInterval(log, 500);

        window.addEventListener("keydown", function(evt){
            const direction = evt.key.replace("Arrow", "");
            car.move(direction);
            carL.move(direction);
            carR.move(direction);
        });
    }
    function load(){
        draw();
        carCrash();
        light.glow();
    }
    function log(){
        //console.log(car.y);
        //console.log(car.x);
        // console.log(carL.x);
        //console.log(carL.y);
        // console.log(carR.x);
        // console.log(carR.y);
    }
    function draw() {
        fill(0, 0, cv.width, cv.height, "#747373");//canvas
        fill(195, 0, 30, cv.height, "#ffffff");//left sidewalk
        fill(375, 0, 30, cv.height, "#ffffff");// right sidewalk
        fill(0, 345, cv.width, 30, "#ffffff");//top sidewalk
        fill(0, 525, cv.width, 30, "#ffffff");//bottom sidewalk
        fill(225, 0, vRoad.w, vRoad.h, "#333333")// vertical road
        fill(0, 375, hRoad.w, hRoad.h, "#333333")//horizontal road
        fill(225, 525, vRoad.w, 10, "#b02c2c");//first V divider
        fill(225, 365, vRoad.w, 10, "#b02c2c");//second V divider
        fill(215, 375, 10, hRoad.h, "#b02c2c");//first H divider
        fill(375, 375, 10, hRoad.h, "#b02c2c");//second H divider
        if (light.on) {
            fill(light.x, light.y, light.d, light.d, "#40be0e");//light
        } else {
            fill(light.x, light.y, light.d, light.d, "#c90404");
        }
        fill(car.x, car.y, car.w, car.h, "#1665b5");//myCar
        fill(carL.x, carL.y, carL.w, carL.h, "#551475");//left car
        fill(carR.x, carR.y, carR.w, carR.h, "#5b3508");//right car
        //if light === false { draw bikes and people going across the street
        if (crash) {
            fill(10, 10, 50, 50, "#d001f8");
        }
        if (crashR) {
            fill(540, 10, 50, 50, "#d001f8");
        }
    }
    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

    function carCrash(){
        if(car.x === carL.x && (carL.y > car.y - car.h && carL.y - carL.h < car.y)){
            crash = true;
        }else if(car.x === carR.x && (carR.y > car.y - car.h && carR.y -carR.h < car.y)){
            crashR = true;
        } else {
            crash = false;
            crashR = false;
        }
    }

})();