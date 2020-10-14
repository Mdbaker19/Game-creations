function level2(){
    let cvs;
    let ctx;
    window.onload = function (){
        cvs = document.getElementById("level2");
        ctx = cvs.getContext("2d");
        setInterval(load, 50);
    }
    function load(){
        draw();
    }
    function draw(){
        fill(0,0,cvs.width, cvs.height, "#03d0f9");
    }
    function fill(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }
}