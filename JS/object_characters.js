(function (){

    let canvas;
    let ctx;
    let dimensions = 65;
    let nameSpot = dimensions/5;
    let nameHeight = 10;

    let players = [{
        person: {
            x: 100,
            y: 100,
            firstName: "Matt",
            lastName: "b",
            age: 25
        },
        abilities: ["fix", "code", "install"]
    },
        {
        person: {
            x: 200,
            y: 200,
            firstName: "Mandy",
            lastName: "b",
            age: 25
        },
        abilities: ["cook", "design", "care"]
    },
        {
        person: {
            x: 300,
            y: 300,
            firstName: "Nemo",
            lastName: "goat Snake",
            age: 2
        },
        abilities: ["be weird", "groan", "paw"]
    },
        {
        person: {
            x: 400,
            y: 400,
            firstName: "Sabear",
            lastName: "say say",
            age: 3
        },
        abilities: ["guard", "drink", "listen"]
    }]



    //console.log(players[0].matt.x)

players.forEach(function(player){
    console.log(player.person.firstName);
    player.abilities.forEach(function(ability){
        console.log(ability);
    });
    console.log("----SPACE-------")
});


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

        colorIn(players[0].person.x, players[0].person.y, dimensions, dimensions, "#081b83");
        ctx.fillText(players[0].person.firstName, players[0].person.x + nameSpot, players[0].person.y - nameHeight);

        colorIn(players[1].person.x, players[1].person.y, dimensions, dimensions, "#95f469");
        ctx.fillText(players[1].person.firstName, players[1].person.x + nameSpot, players[1].person.y - nameHeight);

        colorIn(players[2].person.x, players[2].person.y, dimensions, dimensions, "black");
        ctx.fillText(players[2].person.firstName, players[2].person.x + nameSpot, players[2].person.y - nameHeight);

        colorIn(players[3].person.x, players[3].person.y, dimensions, dimensions, "#cbb64f");
        ctx.fillText(players[3].person.firstName, players[3].person.x + nameSpot, players[3].person.y - nameHeight);
    }

    function colorIn(leftX, topY, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(leftX, topY, width, height);
    }

})();