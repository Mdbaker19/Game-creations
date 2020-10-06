(function (){

    const players = [{
        person: {
            firstName: "matt",
            lastName: "b",
            age: 25
        },
        abilities: ["fix", "code", "install"]
    },
        {
        person: {
            firstName: "mandy",
            lastName: "b",
            age: 25
        },
        abilities: ["cook", "design", "care"]
    },
        {
        person: {
            firstName: "nemo",
            lastName: "goat Snake",
            age: 2
        },
        abilities: ["be weird", "groan", "paw"]
    },
        {
        person: {
            firstName: "sabear",
            lastName: "say say",
            age: 3
        },
        abilities: ["guard", "drink", "listen"]
    }]

players.forEach(function(player){
    console.log(player.person.firstName);
    player.abilities.forEach(function(ability){
        console.log(ability);
    });
    console.log("----SPACE-------")
});


})();