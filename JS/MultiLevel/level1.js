function lvl1() {
    let cvs;
    let ctx;
    const player = {
        x: 100,
        y: 100,
        move: function (direction) {
            switch (direction) {
                case "Left":
                    this.x -= 10;
            }
        }
    }
    window.onload = function () {
        cvs = document.getElementById("level1");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
        window.addEventListener("keydown", function (evt) {
            const direction = evt.key.replace("Arrow", "");
            player.move(direction);
        });
    }
    function load() {
        draw();
    }
    function draw() {
        fill(0, 0, cvs.width, cvs.height, "#f70303");
        fill(player.x, player.y, 20, 20, "#b3acac");
    }
    function fill(leftX, topY, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }
}

let loadLvl1 = document.getElementById("load1");
loadLvl1.addEventListener("click", function (){
    console.log("loading lvl 1");
    lvl1();
});