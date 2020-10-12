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
    let dealerChips = document.getElementById("dChips");
    let dealerBet = document.getElementById("dBet");
    let playerChips = document.getElementById("pChips");
    let playerBet = document.getElementById("pBet");
    let placeBet = document.getElementById("betInput");
    let submitBet = document.getElementById("betAmount");

    let pChipAmount = 100;
    let dChipAmount = 100;
    let king = 10;
    let queen = 10;
    let jack = 10;
    let ace = 1;// maybe [1, 11] and index it by choice??

    const allCards = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        king, queen, jack, ace
    ]; // 13 items


    window.onload = function () {
        dealerChips.innerHTML = pChipAmount;
        playerChips.innerHTML = dChipAmount;

        submitBet.addEventListener("click", function bet(){
            if(dChipAmount >= 24){
                var dealerBetRandom = Math.floor(Math.random() * 20) + 5;
            } else if(dChipAmount < 24){
                dealerBetRandom = Math.floor(Math.random() * dChipAmount) + 1;
            }
            dealerBet.innerHTML = dealerBetRandom;
            playerBet.innerHTML = placeBet.value;
            pChipAmount -= placeBet.value;
            playerChips.innerHTML = pChipAmount;
            dChipAmount -= dealerBetRandom;
            dealerChips.innerHTML = dChipAmount;

        });

        dealOutCards.addEventListener("click", function start() {
            let pickCard1 = Math.floor(Math.random() * 13);
            let pickCard2 = Math.floor(Math.random() * 13);
            let playerTotal1And2 = pickCard1 + pickCard2;
            let pickDealerCard1 = Math.floor(Math.random() * 13);
            dealerExtraCards.innerHTML = "-";
            playerExtraCards.innerHTML = "-";
            pCard1.innerHTML = allCards[pickCard1];
            pCard2.innerHTML = allCards[pickCard2];
            dCard1.innerHTML = allCards[pickDealerCard1];
            dCard2.innerHTML = "X"
            dCard3.innerHTML = "x-"
            dCard4.innerHTML = "-x-"
            dCard5.innerHTML = "-x"
            pCard3.innerHTML = "x-"
            pCard4.innerHTML = "-x-"
            pCard5.innerHTML = "-x"

            hitMe.addEventListener("click", function hit() {
                if (playerTotal1And2 < 21) {
                    let pickCard3 = Math.floor(Math.random() * 13);
                    pCard3.innerHTML = allCards[pickCard3] + "--";
                    if (pickCard3 + playerTotal1And2 > 21) {
                        playerExtraCards.innerHTML = "BUST!";
                        dealerExtraCards.innerHTML = "Dealer Wins--";
                    }
                }
            });

            stay.addEventListener("click", function stay() {
                let pickDealerCard2 = Math.floor(Math.random() * 13);
                dCard2.innerHTML = allCards[pickDealerCard2];
                let dealerTotal1And2 = pickDealerCard2 + pickDealerCard1;
                if (dealerTotal1And2 < 21) {
                    let pickDealerCard3 = Math.floor(Math.random() * 13);
                    dCard3.innerHTML = allCards[pickDealerCard3];
                    if (dealerTotal1And2 + pickDealerCard3 > 21) {
                        dealerExtraCards.innerHTML = "BUST!";
                        playerExtraCards.innerHTML = "Player Wins!--";
                    } else if (dealerTotal1And2 > playerTotal1And2) {
                        playerExtraCards.innerHTML = "Dealer Wins--";
                        dealerExtraCards.innerHTML = "Dealer Wins--";
                    } else if (dealerTotal1And2 < playerTotal1And2) {
                        playerExtraCards.innerHTML = "Player Wins--";
                        dealerExtraCards.innerHTML = "Player Wins--";
                    }
                }
            });

            fold.addEventListener("click", function end(){
               let pickDealerCard2 = Math.floor(Math.random() * 13);
               dCard2.innerHTML = allCards[pickDealerCard2];
               dealerExtraCards.innerHTML = "Dealer Wins--";
               playerExtraCards.innerHTML = "Dealer Wins--";
            });

        });
    }

})();