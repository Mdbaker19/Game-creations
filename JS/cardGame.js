(function (){
    let pCard1 = document.getElementById("playerCard1");
    let dCard1 = document.getElementById("dealerCard1");
    let pCard2 = document.getElementById("playerCard2");
    let dCard2 = document.getElementById("dealerCard2");
    let dealOutCards = document.getElementById("dealCards");
    let hitMe = document.getElementById("HitMe");
    let fold = document.getElementById("Fold");
    let stay = document.getElementById("stay");
    let pCard3 = document.getElementById("p3rd");
    let pCard4 = document.getElementById("p4th");
    let pCard5 = document.getElementById("p5th");
    let dCard3 = document.getElementById("d3rd");
    let dCard4 = document.getElementById("d4th");
    let dCard5 = document.getElementById("d5th");
    let playerExtraCards = document.getElementById("playerExtra");
    let dealerExtraCards = document.getElementById("dealerExtra");

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
            pCard1.innerHTML = allCards[pickCard1];
            pCard2.innerHTML = allCards[pickCard2];
            dCard1.innerHTML = allCards[pickDealerCard1];
            dCard2.innerHTML = "X"

        });

        hitMe.addEventListener("click", function hit(){
            if("playerCards" < 21){
                "add another card allowed";
                if("playerCards" < 21){
                    "add another card allowed";
                    if("playerCards" < 21){
                        "add another card allowed";
                    }
                }
            } else {
                playerExtraCards.innerHTML = "BUST!--"
            }
        });

        fold.addEventListener("click", function end(){
            let showDealerCard2 = Math.floor(Math.random() * 13);
            dCard2.innerHTML = allCards[showDealerCard2];
            dealerExtraCards.innerHTML = "Dealer Wins--";
            playerExtraCards.innerHTML = "Dealer Wins--";
        });

        stay.addEventListener("click", function finish(){
            let showDealerCard2 = Math.floor(Math.random() * 13);
            dCard2.innerHTML = allCards[showDealerCard2];
            if("dealerCards" < 21 || "dealerCards" < "playerCards"){
                "add another card";
                if("dealerCards" < 21 || "dealerCards" < "playerCards"){
                    "add another card";
                    if("dealerCards" < 21 || "dealerCards" < "playerCards"){
                        "add another card";
                    }
                }
            } else if("dealerCards" > "playerCards") {
                playerExtraCards.innerHTML = "Dealer Wins--";
                dealerExtraCards.innerHTML = "Dealer Wins--";
            } else {
                dealerExtraCards.innerHTML = "BUST!--";
            }
        })

    }


})();