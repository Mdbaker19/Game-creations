(function (){

    let canvas;
    let ctx;
    let dimensions = 50;

    window.onload = function startGame(){
        canvas = document.getElementById("gamecanvas");
        ctx = canvas.getContext("2d");
        setInterval(callFunctions, 100);
    }

    function callFunctions(){
        drawEverything();
    }

    function drawEverything(){
        colorIn(0,0, canvas.width, canvas.height, "#220a12")
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

})();