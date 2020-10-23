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
    ];

    window.onload = function () {
        dealerChips.innerHTML = pChipAmount;
        playerChips.innerHTML = dChipAmount;

        let pickDealerCard1 = Math.floor(Math.random() * 13);
        let pickDealerCard2 = Math.floor(Math.random() * 13);
        let pickDealerCard3 = Math.floor(Math.random() * 13);
        let pickDealerCard4 = Math.floor(Math.random() * 13);
        let pickDealerCard5 = Math.floor(Math.random() * 13);

        submitBet.addEventListener("click", function bet(){
            if(dChipAmount >= 21){
                var dealerBetRandom = Math.floor(Math.random() * 17) + 5;
            } else if(dChipAmount < 21){
                dealerBetRandom = Math.floor(Math.random() * dChipAmount) + 1;
            }
            submitBet.disabled = true;
            dealerBet.innerHTML = dealerBetRandom;
            playerBet.innerHTML = placeBet.value;
            pChipAmount -= placeBet.value;
            playerChips.innerHTML = pChipAmount;
            dChipAmount -= dealerBetRandom;
            dealerChips.innerHTML = dChipAmount;

            let d1 = parseFloat(allCards[pickDealerCard1]);
            let d2 = parseFloat(allCards[pickDealerCard2]);
            let d3 = parseFloat(allCards[pickDealerCard3]);
            let d4 = parseFloat(allCards[pickDealerCard4]);
            let d5 = parseFloat(allCards[pickDealerCard5]);

            let d1And2 = d1 + d2;
            let d3Total = d1And2 + d3;
            let d4Total = d3Total + d4;
            let d5Total = d4Total + d5;

            dealOutCards.addEventListener("click", function start() {
                let pStayTotal = 0;
                let dBust = false;
                let pBust = false;
                let count = 0;
                let pickCard1 = Math.floor(Math.random() * 13);
                let pickCard2 = Math.floor(Math.random() * 13);
                let pickCard3 = Math.floor(Math.random() * 13);
                let pickCard4 = Math.floor(Math.random() * 13);
                let pickCard5 = Math.floor(Math.random() * 13);

                let total1And2 = parseFloat(allCards[pickCard1]) + parseFloat(allCards[pickCard2]);
                let first = parseFloat(allCards[pickCard1]);
                let second = parseFloat(allCards[pickCard2]);
                let third = parseFloat(allCards[pickCard3]);
                let fourth = parseFloat(allCards[pickCard4]);
                let fifth = parseFloat(allCards[pickCard5]);
                let threeTotal = total1And2 + third;
                let fourTotal = threeTotal + fourth;
                let fiveTotal = fourTotal + fifth;

                pStayTotal = total1And2;

                pCard1.innerHTML = first;
                pCard2.innerHTML = second;
                dCard1.innerHTML = d1;
                dCard2.innerHTML = "X";
                dCard3.innerHTML = "x-";
                dCard4.innerHTML = "-x-";
                dCard5.innerHTML = "-x";
                pCard3.innerHTML = "x-";
                pCard4.innerHTML = "-x-";
                pCard5.innerHTML = "-x";
                dealerExtraCards.innerHTML = "-";
                playerExtraCards.innerHTML = "-";

                console.log(pStayTotal);

                hitMe.addEventListener("click", function hit() {
                    if(!pBust) {
                        addCard(count);
                        count++;
                    }
                });

                function addCard(count) {
                    if(count === 0) {
                        pCard3.innerHTML = third + "--";
                        pStayTotal = threeTotal;
                        if (threeTotal > 21) {
                            playerExtraCards.innerHTML = "BUST!";
                            dealerExtraCards.innerHTML = "Dealer Wins!--";
                            dChipAmount += parseFloat(placeBet.value);
                            pBust = true;
                            submitBet.disabled = false;
                        }
                    } else if (count === 1) {
                        pStayTotal = fourTotal;
                        pCard4.innerHTML = fourth + "--";
                        if(fourTotal > 21){
                            playerExtraCards.innerHTML = "BUST!";
                            dealerExtraCards.innerHTML = "Dealer Wins!--";
                            dChipAmount += parseFloat(placeBet.value);
                            pBust = true;
                            submitBet.disabled = false;
                        }
                    } else if (count === 2){
                        pStayTotal = fiveTotal;
                        pCard5.innerHTML = fifth;
                        if(fiveTotal > 21){
                            playerExtraCards.innerHTML = "BUST!";
                            dealerExtraCards.innerHTML = "Dealer Wins!--";
                            dChipAmount += parseFloat(placeBet.value);
                            pBust = true;
                            submitBet.disabled = false;
                        }
                    }
                }

                stay.addEventListener("click", function stay() {
                    dCard2.innerHTML = d2;
                    if(d1And2 >  pStayTotal){
                        dealerExtraCards.innerHTML = "Dealer Wins--";
                        playerExtraCards.innerHTML = "Dealer Wins--";
                        submitBet.disabled = false;
                    } else {
                        dCard3.innerHTML = d3;
                    }
                    if(d3Total < 21 && d3Total < pStayTotal){
                        dCard4.innerHTML = d4;
                    } else if(d3Total > 21){
                        dealerExtraCards.innerHTML = "BUST!";
                        playerExtraCards.innerHTML = "Player Wins--";
                        pChipAmount += parseFloat(dealerBetRandom);
                        submitBet.disabled = false;
                    } else if(d3Total > pStayTotal){
                        playerExtraCards.innerHTML = "Dealer Wins--";
                        dealerExtraCards.innerHTML = "Dealer Wins!--";
                        dChipAmount += parseFloat(placeBet.value);
                        pBust = true;
                        submitBet.disabled = false;
                    }
                    if(d4Total < 21 && d4Total < pStayTotal){
                        dCard5.innerHTML = d5;
                    } else if(d4Total > 21){
                        dealerExtraCards.innerHTML = "BUST!";
                        playerExtraCards.innerHTML = "Player Wins--";
                        pChipAmount += parseFloat(dealerBetRandom);
                        submitBet.disabled = false;
                    } else if(d4Total > pStayTotal){
                        playerExtraCards.innerHTML = "Dealer Wins--";
                        dealerExtraCards.innerHTML = "Dealer Wins!--";
                        dChipAmount += parseFloat(placeBet.value);
                        pBust = true;
                        submitBet.disabled = false;
                    }
                    if(d5Total > 21){
                        dealerExtraCards.innerHTML = "BUST!";
                        playerExtraCards.innerHTML = "Player Wins--";
                        pChipAmount += parseFloat(dealerBetRandom);
                        submitBet.disabled = false;
                    } else if(d5Total > pStayTotal){
                        playerExtraCards.innerHTML = "Dealer Wins--";
                        dealerExtraCards.innerHTML = "Dealer Wins!--";
                        dChipAmount += parseFloat(placeBet.value);
                        pBust = true;
                        submitBet.disabled = false;
                    }
                });

                fold.addEventListener("click", function end(){
                    dCard2.innerHTML = d2;
                    dealerExtraCards.innerHTML = "Dealer Wins--";
                    playerExtraCards.innerHTML = "Dealer Wins--";
                    submitBet.disabled = false;

                });
            });
        });
    }

})();