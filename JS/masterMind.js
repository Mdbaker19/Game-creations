(function () {
    //Have an input to be checked against an array assigned random colors
    // have a placeholder text spot to log your input and the response
    // have it return correct color wrong spot by indexOf(your input) !== -1 and if the index matches then it is
    // correct color correct spot

    // do a loop and increment i through to 10, do if statements to then have it apply to the next block




    // bug one: key was pink, red, green, red
    // guess was all red and output was 2 white, should have been 2 red

    // bug two: key was pink, blue, pink, red
    // guess was blue, red, pink, pink and response was 1 red 1 white (not sure how that happened)

    const colorKey = [
        "blue",
        "red",
        "yellow",
        "orange",
        "green",
        "pink",
        "white"
    ];
    const hardColorKey = [
        "blue",
        "red",
        "yellow",
        "orange",
        "green",
        "pink",
        "white",
        "lav",
        "purple",
        "grey",
        "brown",
        "mint"
    ]
    let hardMode = document.getElementById("increaseDiff");
    let hard = false;
    let isHard = document.getElementById("isHardMode");
    let hardKey1 = Math.floor(Math.random() * hardColorKey.length-1)+1;
    let hardKey2 = Math.floor(Math.random() * hardColorKey.length-1)+1;
    let hardKey3 = Math.floor(Math.random() * hardColorKey.length-1)+1;
    let hardKey4 = Math.floor(Math.random() * hardColorKey.length-1)+1;
    hardMode.addEventListener("click", function(){
       hard = true;
       hardMode.style.color = "aliceblue";
       hardMode.style.background =  "black";
       isHard.innerText = "Enabled";
    });

    let key1 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key2 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key3 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key4 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let sequence = [];

    let newGame = document.getElementById("newGame");
    let done = document.getElementById("done");
    let gameWon = document.getElementById("winner");
    //answer key
    let answer1 = document.getElementById("key1");
    let answer2 = document.getElementById("key2");
    let answer3 = document.getElementById("key3");
    let answer4 = document.getElementById("key4");
    //assert buttons
    let assert = document.getElementById("submit");
    let guess1 = document.getElementById("colorInput1");
    let guess2 = document.getElementById("colorInput2");
    let guess3 = document.getElementById("colorInput3");
    let guess4 = document.getElementById("colorInput4");

    //your inputs
    let your11 = document.getElementById("you11");
    let your12 = document.getElementById("you12");
    let your13 = document.getElementById("you13");
    let your14 = document.getElementById("you14");

    let your21 = document.getElementById("you21");
    let your22 = document.getElementById("you22");
    let your23 = document.getElementById("you23");
    let your24 = document.getElementById("you24");

    let your31 = document.getElementById("you31");
    let your32 = document.getElementById("you32");
    let your33 = document.getElementById("you33");
    let your34 = document.getElementById("you34");

    let your41 = document.getElementById("you41");
    let your42 = document.getElementById("you42");
    let your43 = document.getElementById("you43");
    let your44 = document.getElementById("you44");

    let your51 = document.getElementById("you51");
    let your52 = document.getElementById("you52");
    let your53 = document.getElementById("you53");
    let your54 = document.getElementById("you54");

    let your61 = document.getElementById("you61");
    let your62 = document.getElementById("you62");
    let your63 = document.getElementById("you63");
    let your64 = document.getElementById("you64");

    let your71 = document.getElementById("you71");
    let your72 = document.getElementById("you72");
    let your73 = document.getElementById("you73");
    let your74 = document.getElementById("you74");

    let your81 = document.getElementById("you81");
    let your82 = document.getElementById("you82");
    let your83 = document.getElementById("you83");
    let your84 = document.getElementById("you84");

    let your91 = document.getElementById("you91");
    let your92 = document.getElementById("you92");
    let your93 = document.getElementById("you93");
    let your94 = document.getElementById("you94");

    let your101 = document.getElementById("you101");
    let your102 = document.getElementById("you102");
    let your103 = document.getElementById("you103");
    let your104 = document.getElementById("you104");

    //responses
    let r11 = document.getElementById("one1");
    let r21 = document.getElementById("two1");
    let r31 = document.getElementById("three1");
    let r41 = document.getElementById("four1");
    let r51 = document.getElementById("five1");
    let r61 = document.getElementById("six1");
    let r71 = document.getElementById("seven1");
    let r81 = document.getElementById("eight1");
    let r91 = document.getElementById("nine1");
    let r101 = document.getElementById("ten1");

    newGame.addEventListener("click", function (){
        if(hard){
            sequence.push(hardColorKey[hardKey1]);
            sequence.push(hardColorKey[hardKey2]);
            sequence.push(hardColorKey[hardKey3]);
            sequence.push(hardColorKey[hardKey4]);
        }
        else
        {
            sequence.push(colorKey[key1]);
            sequence.push(colorKey[key2]);
            sequence.push(colorKey[key3]);
            sequence.push(colorKey[key4]);
        }
        console.log("Answer Key: ");
        console.log(sequence);
        done.addEventListener("click", function (){
            answer1.innerHTML = sequence[0];
            answer2.innerHTML = sequence[1];
            answer3.innerHTML = sequence[2];
            answer4.innerHTML = sequence[3];
       })
    });

    assert.addEventListener("click", function (){
        let newKey = sequence;
        let rCRS = 0;
        let rCWS = 0;
        let first = guess1.value;
        let second = guess2.value;
        let third = guess3.value;
        let fourth = guess4.value;
        your11.innerHTML = first;
        your12.innerHTML = second;
        your13.innerHTML = third;
        your14.innerHTML = fourth;

      if (first === newKey[0]) {
          rCRS++;
          newKey = newKey.join(" ").replace(first, "").split(" ");
      }
      if (second === newKey[1]) {
          rCRS++;
          newKey = newKey.join(" ").replace(second, "").split(" ");
      }
      if (third === newKey[2]) {
          rCRS++;
          newKey = newKey.join(" ").replace(third, "").split(" ");
      }
      if (fourth === newKey[3]) {
          rCRS++;
          newKey = newKey.join(" ").replace(fourth, "").split(" ");
      }else if (newKey.indexOf(first) !== -1) {
          rCWS++;
          newKey = newKey.join(" ").replace(first, "").split(" ");
      } else if (newKey.indexOf(second) !== -1) {
          rCWS++;
          newKey = newKey.join(" ").replace(second, "").split(" ");
      } else if (newKey.indexOf(third) !== -1) {
          rCWS++;
          newKey = newKey.join(" ").replace(third, "").split(" ");
      } else if (newKey.indexOf(fourth) !== -1) {
          rCWS++;
          newKey = newKey.join(" ").replace(fourth, "").split(" ");
      }

        if(rCRS === 4){
            gameWon.innerText = "Winner!";
        }
        r11.innerText = rCRS + " Red " + rCWS + " White";

        assert.addEventListener("click", function (){
            let newKey = sequence;
            let rCRS = 0;
            let rCWS = 0;
            let first = guess1.value;
            let second = guess2.value;
            let third = guess3.value;
            let fourth = guess4.value;
            your21.innerHTML = first;
            your22.innerHTML = second;
            your23.innerHTML = third;
            your24.innerHTML = fourth;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }else if (newKey.indexOf(first) !== -1) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            } else if (newKey.indexOf(second) !== -1) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            } else if (newKey.indexOf(third) !== -1) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            } else if (newKey.indexOf(fourth) !== -1) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if(rCRS === 4){
                gameWon.innerText = "Winner!";
            }
            r21.innerText = rCRS + " Red " + rCWS + " White";

            assert.addEventListener("click", function (){
                let newKey = sequence;
                let rCRS = 0;
                let rCWS = 0;
                let first = guess1.value;
                let second = guess2.value;
                let third = guess3.value;
                let fourth = guess4.value;
                your31.innerHTML = first;
                your32.innerHTML = second;
                your33.innerHTML = third;
                your34.innerHTML = fourth;

                if (first === newKey[0]) {
                    rCRS++;
                    newKey = newKey.join(" ").replace(first, "").split(" ");
                }
                if (second === newKey[1]) {
                    rCRS++;
                    newKey = newKey.join(" ").replace(second, "").split(" ");
                }
                if (third === newKey[2]) {
                    rCRS++;
                    newKey = newKey.join(" ").replace(third, "").split(" ");
                }
                if (fourth === newKey[3]) {
                    rCRS++;
                    newKey = newKey.join(" ").replace(fourth, "").split(" ");
                }else if (newKey.indexOf(first) !== -1) {
                    rCWS++;
                    newKey = newKey.join(" ").replace(first, "").split(" ");
                } else if (newKey.indexOf(second) !== -1) {
                    rCWS++;
                    newKey = newKey.join(" ").replace(second, "").split(" ");
                } else if (newKey.indexOf(third) !== -1) {
                    rCWS++;
                    newKey = newKey.join(" ").replace(third, "").split(" ");
                } else if (newKey.indexOf(fourth) !== -1) {
                    rCWS++;
                    newKey = newKey.join(" ").replace(fourth, "").split(" ");
                }

                r31.innerText = rCRS + " Red " + rCWS + " White";

                assert.addEventListener("click", function (){
                    let newKey = sequence;
                    let rCRS = 0;
                    let rCWS = 0;
                    let first = guess1.value;
                    let second = guess2.value;
                    let third = guess3.value;
                    let fourth = guess4.value;
                    your41.innerHTML = first;
                    your42.innerHTML = second;
                    your43.innerHTML = third;
                    your44.innerHTML = fourth;

                    if (first === newKey[0]) {
                        rCRS++;
                        newKey = newKey.join(" ").replace(first, "").split(" ");
                    }
                    if (second === newKey[1]) {
                        rCRS++;
                        newKey = newKey.join(" ").replace(second, "").split(" ");
                    }
                    if (third === newKey[2]) {
                        rCRS++;
                        newKey = newKey.join(" ").replace(third, "").split(" ");
                    }
                    if (fourth === newKey[3]) {
                        rCRS++;
                        newKey = newKey.join(" ").replace(fourth, "").split(" ");
                    }else if (newKey.indexOf(first) !== -1) {
                        rCWS++;
                        newKey = newKey.join(" ").replace(first, "").split(" ");
                    } else if (newKey.indexOf(second) !== -1) {
                        rCWS++;
                        newKey = newKey.join(" ").replace(second, "").split(" ");
                    } else if (newKey.indexOf(third) !== -1) {
                        rCWS++;
                        newKey = newKey.join(" ").replace(third, "").split(" ");
                    } else if (newKey.indexOf(fourth) !== -1) {
                        rCWS++;
                        newKey = newKey.join(" ").replace(fourth, "").split(" ");
                    }

                    if(rCRS === 4){
                        gameWon.innerText = "Winner!";
                    }
                    r41.innerText = rCRS + " Red " + rCWS + " White";

                    assert.addEventListener("click", function (){
                        let newKey = sequence;
                        let rCRS = 0;
                        let rCWS = 0;
                        let first = guess1.value;
                        let second = guess2.value;
                        let third = guess3.value;
                        let fourth = guess4.value;
                        your51.innerHTML = first;
                        your52.innerHTML = second;
                        your53.innerHTML = third;
                        your54.innerHTML = fourth;

                        if (first === newKey[0]) {
                            rCRS++;
                            newKey = newKey.join(" ").replace(first, "").split(" ");
                        }
                        if (second === newKey[1]) {
                            rCRS++;
                            newKey = newKey.join(" ").replace(second, "").split(" ");
                        }
                        if (third === newKey[2]) {
                            rCRS++;
                            newKey = newKey.join(" ").replace(third, "").split(" ");
                        }
                        if (fourth === newKey[3]) {
                            rCRS++;
                            newKey = newKey.join(" ").replace(fourth, "").split(" ");
                        }else if (newKey.indexOf(first) !== -1) {
                            rCWS++;
                            newKey = newKey.join(" ").replace(first, "").split(" ");
                        } else if (newKey.indexOf(second) !== -1) {
                            rCWS++;
                            newKey = newKey.join(" ").replace(second, "").split(" ");
                        } else if (newKey.indexOf(third) !== -1) {
                            rCWS++;
                            newKey = newKey.join(" ").replace(third, "").split(" ");
                        } else if (newKey.indexOf(fourth) !== -1) {
                            rCWS++;
                            newKey = newKey.join(" ").replace(fourth, "").split(" ");
                        }

                        r51.innerText = rCRS + " Red " + rCWS + " White";

                        assert.addEventListener("click", function (){
                            let newKey = sequence;
                            let rCRS = 0;
                            let rCWS = 0;
                            let first = guess1.value;
                            let second = guess2.value;
                            let third = guess3.value;
                            let fourth = guess4.value;
                            your61.innerHTML = first;
                            your62.innerHTML = second;
                            your63.innerHTML = third;
                            your64.innerHTML = fourth;

                            if (first === newKey[0]) {
                                rCRS++;
                                newKey = newKey.join(" ").replace(first, "").split(" ");
                            }
                            if (second === newKey[1]) {
                                rCRS++;
                                newKey = newKey.join(" ").replace(second, "").split(" ");
                            }
                            if (third === newKey[2]) {
                                rCRS++;
                                newKey = newKey.join(" ").replace(third, "").split(" ");
                            }
                            if (fourth === newKey[3]) {
                                rCRS++;
                                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                            }else if (newKey.indexOf(first) !== -1) {
                                rCWS++;
                                newKey = newKey.join(" ").replace(first, "").split(" ");
                            } else if (newKey.indexOf(second) !== -1) {
                                rCWS++;
                                newKey = newKey.join(" ").replace(second, "").split(" ");
                            } else if (newKey.indexOf(third) !== -1) {
                                rCWS++;
                                newKey = newKey.join(" ").replace(third, "").split(" ");
                            } else if (newKey.indexOf(fourth) !== -1) {
                                rCWS++;
                                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                            }

                            if(rCRS === 4){
                                gameWon.innerText = "Winner!";
                            }
                            r61.innerText = rCRS + " Red " + rCWS + " White";

                            assert.addEventListener("click", function (){
                                let newKey = sequence;
                                let rCRS = 0;
                                let rCWS = 0;
                                let first = guess1.value;
                                let second = guess2.value;
                                let third = guess3.value;
                                let fourth = guess4.value;
                                your71.innerHTML = first;
                                your72.innerHTML = second;
                                your73.innerHTML = third;
                                your74.innerHTML = fourth;

                                if (first === newKey[0]) {
                                    rCRS++;
                                    newKey = newKey.join(" ").replace(first, "").split(" ");
                                }
                                if (second === newKey[1]) {
                                    rCRS++;
                                    newKey = newKey.join(" ").replace(second, "").split(" ");
                                }
                                if (third === newKey[2]) {
                                    rCRS++;
                                    newKey = newKey.join(" ").replace(third, "").split(" ");
                                }
                                if (fourth === newKey[3]) {
                                    rCRS++;
                                    newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                }else if (newKey.indexOf(first) !== -1) {
                                    rCWS++;
                                    newKey = newKey.join(" ").replace(first, "").split(" ");
                                } else if (newKey.indexOf(second) !== -1) {
                                    rCWS++;
                                    newKey = newKey.join(" ").replace(second, "").split(" ");
                                } else if (newKey.indexOf(third) !== -1) {
                                    rCWS++;
                                    newKey = newKey.join(" ").replace(third, "").split(" ");
                                } else if (newKey.indexOf(fourth) !== -1) {
                                    rCWS++;
                                    newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                }

                                if(rCRS === 4){
                                    gameWon.innerText = "Winner!";
                                }
                                r71.innerText = rCRS + " Red " + rCWS + " White";

                                assert.addEventListener("click", function (){
                                    let newKey = sequence;
                                    let rCRS = 0;
                                    let rCWS = 0;
                                    let first = guess1.value;
                                    let second = guess2.value;
                                    let third = guess3.value;
                                    let fourth = guess4.value;
                                    your81.innerHTML = first;
                                    your82.innerHTML = second;
                                    your83.innerHTML = third;
                                    your84.innerHTML = fourth;

                                    if (first === newKey[0]) {
                                        rCRS++;
                                        newKey = newKey.join(" ").replace(first, "").split(" ");
                                    }
                                    if (second === newKey[1]) {
                                        rCRS++;
                                        newKey = newKey.join(" ").replace(second, "").split(" ");
                                    }
                                    if (third === newKey[2]) {
                                        rCRS++;
                                        newKey = newKey.join(" ").replace(third, "").split(" ");
                                    }
                                    if (fourth === newKey[3]) {
                                        rCRS++;
                                        newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                    }else if (newKey.indexOf(first) !== -1) {
                                        rCWS++;
                                        newKey = newKey.join(" ").replace(first, "").split(" ");
                                    } else if (newKey.indexOf(second) !== -1) {
                                        rCWS++;
                                        newKey = newKey.join(" ").replace(second, "").split(" ");
                                    } else if (newKey.indexOf(third) !== -1) {
                                        rCWS++;
                                        newKey = newKey.join(" ").replace(third, "").split(" ");
                                    } else if (newKey.indexOf(fourth) !== -1) {
                                        rCWS++;
                                        newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                    }

                                    r81.innerText = rCRS + " Red " + rCWS + " White";

                                    assert.addEventListener("click", function (){
                                        let newKey = sequence;
                                        let rCRS = 0;
                                        let rCWS = 0;
                                        let first = guess1.value;
                                        let second = guess2.value;
                                        let third = guess3.value;
                                        let fourth = guess4.value;
                                        your91.innerHTML = first;
                                        your92.innerHTML = second;
                                        your93.innerHTML = third;
                                        your94.innerHTML = fourth;

                                        if (first === newKey[0]) {
                                            rCRS++;
                                            newKey = newKey.join(" ").replace(first, "").split(" ");
                                        }
                                        if (second === newKey[1]) {
                                            rCRS++;
                                            newKey = newKey.join(" ").replace(second, "").split(" ");
                                        }
                                        if (third === newKey[2]) {
                                            rCRS++;
                                            newKey = newKey.join(" ").replace(third, "").split(" ");
                                        }
                                        if (fourth === newKey[3]) {
                                            rCRS++;
                                            newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                        }else if (newKey.indexOf(first) !== -1) {
                                            rCWS++;
                                            newKey = newKey.join(" ").replace(first, "").split(" ");
                                        } else if (newKey.indexOf(second) !== -1) {
                                            rCWS++;
                                            newKey = newKey.join(" ").replace(second, "").split(" ");
                                        } else if (newKey.indexOf(third) !== -1) {
                                            rCWS++;
                                            newKey = newKey.join(" ").replace(third, "").split(" ");
                                        } else if (newKey.indexOf(fourth) !== -1) {
                                            rCWS++;
                                            newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                        }

                                        if(rCRS === 4){
                                            gameWon.innerText = "Winner!";
                                        }
                                        r91.innerText = rCRS + " Red " + rCWS + " White";

                                        assert.addEventListener("click", function (){
                                            let newKey = sequence;
                                            let rCRS = 0;
                                            let rCWS = 0;
                                            let first = guess1.value;
                                            let second = guess2.value;
                                            let third = guess3.value;
                                            let fourth = guess4.value;
                                            your101.innerHTML = first;
                                            your102.innerHTML = second;
                                            your103.innerHTML = third;
                                            your104.innerHTML = fourth;

                                            if (first === newKey[0]) {
                                                rCRS++;
                                                newKey = newKey.join(" ").replace(first, "").split(" ");
                                            }
                                            if (second === newKey[1]) {
                                                rCRS++;
                                                newKey = newKey.join(" ").replace(second, "").split(" ");
                                            }
                                            if (third === newKey[2]) {
                                                rCRS++;
                                                newKey = newKey.join(" ").replace(third, "").split(" ");
                                            }
                                            if (fourth === newKey[3]) {
                                                rCRS++;
                                                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                            }else if (newKey.indexOf(first) !== -1) {
                                                rCWS++;
                                                newKey = newKey.join(" ").replace(first, "").split(" ");
                                            } else if (newKey.indexOf(second) !== -1) {
                                                rCWS++;
                                                newKey = newKey.join(" ").replace(second, "").split(" ");
                                            } else if (newKey.indexOf(third) !== -1) {
                                                rCWS++;
                                                newKey = newKey.join(" ").replace(third, "").split(" ");
                                            } else if (newKey.indexOf(fourth) !== -1) {
                                                rCWS++;
                                                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                                            }
                                            if(rCRS === 4){
                                                gameWon.innerText = "Winner!";
                                            }
                                            r101.innerText = rCRS + " Red " + rCWS + " White";
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})();