(function () {
    //Have an input to be checked against an array assigned random colors
    // have a placeholder text spot to log your input and the response
    // have it return correct color wrong spot by indexOf(your input) !== -1 and if the index matches then it is
    // correct color correct spot

    const colorKey = [
        "blue",
        "red",
        "yellow",
        "orange",
        "green",
        "purple",
        "white",
        "black"
    ];
    let key1 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key2 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key3 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key4 = Math.floor(Math.random() * colorKey.length-1) + 1;

    let newGame = document.getElementById("newGame");
    let done = document.getElementById("done");
    //hidden
    let hidden1 = document.getElementById("hide1");
    let hidden2 = document.getElementById("hide2");
    let hidden3 = document.getElementById("hide3");
    let hidden4 = document.getElementById("hide4");
    //answer key
    let answer1 = document.getElementById("key1");
    let answer2 = document.getElementById("key2");
    let answer3 = document.getElementById("key3");
    let answer4 = document.getElementById("key4");
    //your inputs

    //responses

    newGame.addEventListener("click", function (){
       hidden1.innerHTML = colorKey[key1];
       hidden2.innerHTML = colorKey[key2];
       hidden3.innerHTML = colorKey[key3];
       hidden4.innerHTML = colorKey[key4];
       done.addEventListener("click", function (){
            answer1.innerHTML = hidden1.innerHTML;
            answer2.innerHTML = hidden2.innerHTML;
            answer3.innerHTML = hidden3.innerHTML;
            answer4.innerHTML = hidden4.innerHTML;
       })
    });

})();