(function (){
    let cvs;
    let ctx;
    const player = {

    }
    const computer = {

    }
    const ball = {

    }
    window.onload = function (){
        cvs = document.getElementById("game");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
    }
    function load(){
        draw();
    }
    function draw(){
        fill(0,0,cvs.width,cvs.height, "#2bbb6e");
    }
    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }
})();