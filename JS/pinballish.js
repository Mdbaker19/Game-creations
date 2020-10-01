(function () {

    //canvas is 500 wide and 1500 tall
    let canvas;

    let canvasContext;

    let leftPaddle;
    let leftPaddleX;
    let leftPaddleY;

    let rightPaddle;
    let rightPaddleX;
    let rightPaddleY;

    let ball;
    let ballX;
    let ballY;
    let ballSpeedX;
    let ballSpeedY;




    window.onload = function (){
        canvas = document.getElementById("gamecanvas");
        canvasContext = canvas.getContext("2d");

        const fps = 60;
        setInterval(callFunctions, 1000/fps);
    }


    function callFunctions(){
        drawEverything();
    }

    function drawEverything(){
        colorRectangles(0, 0, canvas.width, canvas.height, "lightblue");
    }


    function colorRectangles(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);
    }







})();