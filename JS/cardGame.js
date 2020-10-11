(function (){
    let pCard1 = document.getElementById("playerCard1");
    let dCard1 = document.getElementById("dealerCard1");
    let pCard2 = document.getElementById("playerCard2");
    let dCard2 = document.getElementById("dealerCard2");
    let dealOutCards = document.getElementById("dealCards");
    let hitMe = document.getElementById("HitMe");
    let fold = document.getElementById("Fold");
    let stay = document.getElementById("stay");

    let king = 10;
    let queen = 10;
    let jack = 10;
    let ace = 11;

    const allCards = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        king, queen, jack, ace
    ]; // 13 items



    window.onload = function start(){

        dealOutCards.addEventListener("click", function dealCards(){
            let pickCard1 = Math.floor(Math.random() * 13);
            let pickCard2 = Math.floor(Math.random() * 13);
            let pickDealerCard1 = Math.floor(Math.random() * 13);
            pCard1.innerText = allCards[pickCard1];
            pCard2.innerText = allCards[pickCard2];
            dCard1.innerText = allCards[pickDealerCard1];
            dCard2.innerText = "X"

        });

        hitMe.addEventListener("click", function hit(){

        });

        fold.addEventListener("click", function end(){
            let showDealerCard2 = Math.floor(Math.random() * 13);
            dCard2.innerText = allCards[showDealerCard2];
        });

        stay.addEventListener("click", function finish(){
            let showDealerCard2 = Math.floor(Math.random() * 13);
            dCard2.innerText = allCards[showDealerCard2];
            //if(dealer cards total is > 21){
                //player wins })
        })

    }


})();