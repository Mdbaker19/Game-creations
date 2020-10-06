(function (){

    const players = [{
        person: {
            firstName: "matt",
            lastName: "b",
            age: 25
        }
    },
        {
        person: {
            firstName: "mandy",
            lastName: "b",
            age: 25
        }
    },
        {
        person: {
            firstName: "nemo",
            lastName: "goat Snake",
            age: 2
        }
    },
        {
        person: {
            firstName: "sabear",
            lastName: "say say",
            age: 3
        }
        }]

players.forEach(function(player){
    console.log(player.person.firstName);
});


})();