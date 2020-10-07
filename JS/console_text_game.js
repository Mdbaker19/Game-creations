(function (){

    let canvas;
    let ctx;
    let dimensions = 35;
    let nameSpot = dimensions/7;
    let nameHeight = 10;

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



    //console.log(players[0].matt.x)

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
        colorIn(0, 0, canvas.width, canvas.height, "#1eaea1");

        colorIn(players[0].matt.x, players[0].matt.y, dimensions, dimensions, "#081b83");
        ctx.fillText(players[0].matt.firstName, players[0].matt.x + nameSpot, players[0].matt.y - nameHeight);

        colorIn(players[1].mandy.x, players[1].mandy.y, dimensions, dimensions, "#95f469");
        ctx.fillText(players[1].mandy.firstName, players[1].mandy.x + nameSpot, players[1].mandy.y - nameHeight);

        colorIn(players[2].nemo.x, players[2].nemo.y, dimensions, dimensions, "black");
        ctx.fillText(players[2].nemo.firstName, players[2].nemo.x + nameSpot, players[2].nemo.y - nameHeight);

        colorIn(players[3].sabear.x, players[3].sabear.y, dimensions, dimensions, "#cbb64f");
        ctx.fillText(players[3].sabear.firstName, players[3].sabear.x + nameSpot, players[3].sabear.y - nameHeight);
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

})();