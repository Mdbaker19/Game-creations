(function (){

    window.onload = function (){
        let change = document.getElementById("off");
        let bulbOn = document.getElementById("firstLightOn");

        bulbOn.addEventListener("click", function (){
            change.src = ../images/bulbon.jpeg
        })


    }

})();