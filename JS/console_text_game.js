(function (){

    let canvas;
    let ctx;
    let dimensions = 35;

    let players = [{
        matt: {
            x: 100,
            y: 100,
            firstName: "matt",
            lastName: "b",
            age: 25
        },
        abilities: ["fix", "code", "install"]
    },
        {
        mandy: {
            x: 200,
            y: 200,
            firstName: "mandy",
            lastName: "b",
            age: 25
        },
        abilities: ["cook", "design", "care"]
    },
        {
        nemo: {
            x: 300,
            y: 300,
            firstName: "nemo",
            lastName: "goat Snake",
            age: 2
        },
        abilities: ["be weird", "groan", "paw"]
    },
        {
        sabear: {
            x: 400,
            y: 400,
            firstName: "sabear",
            lastName: "say say",
            age: 3
        },
        abilities: ["guard", "drink", "listen"]
    }]

    console.log(players.matt.x);

// players.forEach(function(player){
//     console.log(player.person.firstName);
//     player.abilities.forEach(function(ability){
//         console.log(ability);
//     });
//     console.log("----SPACE-------")
// });


    window.onload = function startGame(){
        canvas = document.getElementById("gamecanvas");
        ctx = canvas.getContext("2d");
        setInterval(callFunctions, 100);
    }

    function callFunctions(){
        drawEverything();
    }

    function drawEverything(){
        colorIn(0, 0, canvas.width, canvas.height, "#1eaea1")
        colorIn(players[0].x, players[0].y, dimensions, dimensions, "black");
        //ctx.fillText();
        colorIn();
        //ctx.fillText();
        colorIn();
        //ctx.fillText();
        colorIn();
        //ctx.fillText();
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

})();