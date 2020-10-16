(function () {
    //Have an input to be checked against an array assigned random colors
    // have a placeholder text spot to log your input and the response
    // have it return correct color wrong spot by indexOf(your input) !== -1 and if the index matches then it is
    // correct color correct spot

    // do a loop and increment i through to 10, do if statements to then have it apply to the next block

    const colorKey = [
        "blue",
        "red",
        "yellow",
        "orange",
        "green",
        "purple",
        "white",
        "black",
        "pink"
    ];
    let oneRight = false;
    let twoRight = false;
    let threeRight = false;
    let fourRight = false;
    let key1 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key2 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key3 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let key4 = Math.floor(Math.random() * colorKey.length-1) + 1;
    let sequence = [];

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
    let r12 = document.getElementById("one2");
    let r13 = document.getElementById("one3");
    let r14 = document.getElementById("one4");
    let r21 = document.getElementById("two1");
    let r22 = document.getElementById("two2");
    let r23 = document.getElementById("two3");
    let r24 = document.getElementById("two4");
    let r31 = document.getElementById("three1");
    let r32 = document.getElementById("three2");
    let r33 = document.getElementById("three3");
    let r34 = document.getElementById("three4");
    let r41 = document.getElementById("four1");
    let r42 = document.getElementById("four2");
    let r43 = document.getElementById("four3");
    let r44 = document.getElementById("four4");
    let r51 = document.getElementById("five1");
    let r52 = document.getElementById("five2");
    let r53 = document.getElementById("five3");
    let r54 = document.getElementById("five4");
    let r61 = document.getElementById("six1");
    let r62 = document.getElementById("six2");
    let r63 = document.getElementById("six3");
    let r64 = document.getElementById("six4");
    let r71 = document.getElementById("seven1");
    let r72 = document.getElementById("seven2");
    let r73 = document.getElementById("seven3");
    let r74 = document.getElementById("seven4");
    let r81 = document.getElementById("eight1");
    let r82 = document.getElementById("eight2");
    let r83 = document.getElementById("eight3");
    let r84 = document.getElementById("eight4");
    let r91 = document.getElementById("nine1");
    let r92 = document.getElementById("nine2");
    let r93 = document.getElementById("nine3");
    let r94 = document.getElementById("nine4");
    let r101 = document.getElementById("ten1");
    let r102 = document.getElementById("ten2");
    let r103 = document.getElementById("ten3");
    let r104 = document.getElementById("ten4");
    newGame.addEventListener("click", function (){
       hidden1.innerHTML = colorKey[key1];
       hidden2.innerHTML = colorKey[key2];
       hidden3.innerHTML = colorKey[key3];
       hidden4.innerHTML = colorKey[key4];
       sequence.push(colorKey[key1]);
       sequence.push(colorKey[key2]);
       sequence.push(colorKey[key3]);
       sequence.push(colorKey[key4]);
       console.log(sequence);
       done.addEventListener("click", function (){
            answer1.innerHTML = hidden1.innerHTML;
            answer2.innerHTML = hidden2.innerHTML;
            answer3.innerHTML = hidden3.innerHTML;
            answer4.innerHTML = hidden4.innerHTML;
       })
    });
    assert.addEventListener("click", function (){
        let first = guess1.value;
        let second = guess2.value;
        let third = guess3.value;
        let fourth = guess4.value;
        your11.innerHTML = first;
        your12.innerHTML = second;
        your13.innerHTML = third;
        your14.innerHTML = fourth;
        if(first === sequence[0]){
            r11.innerHTML = "RC/RS";
            oneRight = true;
        }else if(sequence.indexOf(first) !== -1){
            r11.innerHTML = "RC/WS";
        } else{
            r11.innerHTML = "";
        }
        if(second === sequence[1]){
            r12.innerHTML = "RC/RS";
            twoRight = true;
        }else if(sequence.indexOf(second) !== -1){
            r12.innerHTML = "RC/WS";
        } else{
            r12.innerHTML = "";
        }
        if(third === sequence[2]){
            r13.innerHTML = "RC/RS";
            threeRight = true;
        }else if(sequence.indexOf(third) !== -1){
            r13.innerHTML = "RC/WS";
        } else{
            r13.innerHTML = "";
        }
        if(fourth === sequence[3]){
            r14.innerHTML = "RC/RS";
            fourRight = true;
        }else if(sequence.indexOf(fourth) !== -1){
            r14.innerHTML = "RC/WS";
        } else{
            r14.innerHTML = "";
        }
        if(oneRight && twoRight && threeRight && fourRight){
            console.log("WINNER");
        }
        assert.addEventListener("click", function (){
            let first = guess1.value;
            let second = guess2.value;
            let third = guess3.value;
            let fourth = guess4.value;
            your21.innerHTML = first;
            your22.innerHTML = second;
            your23.innerHTML = third;
            your24.innerHTML = fourth;
            if(first === sequence[0]){
                r21.innerHTML = "RC/RS";
                oneRight = true;
            }else if(sequence.indexOf(first) !== -1){
                r21.innerHTML = "RC/WS";
            } else{
                r21.innerHTML = "";
            }
            if(second === sequence[1]){
                r22.innerHTML = "RC/RS";
                twoRight = true;
            }else if(sequence.indexOf(second) !== -1){
                r22.innerHTML = "RC/WS";
            } else{
                r22.innerHTML = "";
            }
            if(third === sequence[2]){
                r23.innerHTML = "RC/RS";
                threeRight = true;
            }else if(sequence.indexOf(third) !== -1){
                r23.innerHTML = "RC/WS";
            } else{
                r23.innerHTML = "";
            }
            if(fourth === sequence[3]){
                r24.innerHTML = "RC/RS";
                fourRight = true;
            }else if(sequence.indexOf(fourth) !== -1){
                r24.innerHTML = "RC/WS";
            } else{
                r24.innerHTML = "";
            }
            if(oneRight && twoRight && threeRight && fourRight){
                console.log("WINNER");
            }
            assert.addEventListener("click", function (){
                let first = guess1.value;
                let second = guess2.value;
                let third = guess3.value;
                let fourth = guess4.value;
                your31.innerHTML = first;
                your32.innerHTML = second;
                your33.innerHTML = third;
                your34.innerHTML = fourth;
                if(first === sequence[0]){
                    r31.innerHTML = "RC/RS";
                    oneRight = true;
                }else if(sequence.indexOf(first) !== -1){
                    r31.innerHTML = "RC/WS";
                } else{
                    r31.innerHTML = "";
                }
                if(second === sequence[1]){
                    r32.innerHTML = "RC/RS";
                    twoRight = true;
                }else if(sequence.indexOf(second) !== -1){
                    r32.innerHTML = "RC/WS";
                } else{
                    r32.innerHTML = "";
                }
                if(third === sequence[2]){
                    r33.innerHTML = "RC/RS";
                    threeRight = true;
                }else if(sequence.indexOf(third) !== -1){
                    r33.innerHTML = "RC/WS";
                } else{
                    r33.innerHTML = "";
                }
                if(fourth === sequence[3]){
                    r34.innerHTML = "RC/RS";
                    fourRight = true;
                }else if(sequence.indexOf(fourth) !== -1){
                    r34.innerHTML = "RC/WS";
                } else{
                    r34.innerHTML = "";
                }
                if(oneRight && twoRight && threeRight && fourRight){
                    console.log("WINNER");
                }
                assert.addEventListener("click", function (){
                    let first = guess1.value;
                    let second = guess2.value;
                    let third = guess3.value;
                    let fourth = guess4.value;
                    your41.innerHTML = first;
                    your42.innerHTML = second;
                    your43.innerHTML = third;
                    your44.innerHTML = fourth;
                    if(first === sequence[0]){
                        r41.innerHTML = "RC/RS";
                        oneRight = true;
                    }else if(sequence.indexOf(first) !== -1){
                        r41.innerHTML = "RC/WS";
                    } else{
                        r41.innerHTML = "";
                    }
                    if(second === sequence[1]){
                        r42.innerHTML = "RC/RS";
                        twoRight = true;
                    }else if(sequence.indexOf(second) !== -1){
                        r42.innerHTML = "RC/WS";
                    } else{
                        r42.innerHTML = "";
                    }
                    if(third === sequence[2]){
                        r43.innerHTML = "RC/RS";
                        threeRight = true;
                    }else if(sequence.indexOf(third) !== -1){
                        r43.innerHTML = "RC/WS";
                    } else{
                        r43.innerHTML = "";
                    }
                    if(fourth === sequence[3]){
                        r44.innerHTML = "RC/RS";
                        fourRight = true;
                    }else if(sequence.indexOf(fourth) !== -1){
                        r44.innerHTML = "RC/WS";
                    } else{
                        r44.innerHTML = "";
                    }
                    if(oneRight && twoRight && threeRight && fourRight){
                        console.log("WINNER");
                    }
                    assert.addEventListener("click", function (){
                        let first = guess1.value;
                        let second = guess2.value;
                        let third = guess3.value;
                        let fourth = guess4.value;
                        your51.innerHTML = first;
                        your52.innerHTML = second;
                        your53.innerHTML = third;
                        your54.innerHTML = fourth;
                        if(first === sequence[0]){
                            r51.innerHTML = "RC/RS";
                            oneRight = true;
                        }else if(sequence.indexOf(first) !== -1){
                            r51.innerHTML = "RC/WS";
                        } else{
                            r51.innerHTML = "";
                        }
                        if(second === sequence[1]){
                            r52.innerHTML = "RC/RS";
                            twoRight = true;
                        }else if(sequence.indexOf(second) !== -1){
                            r52.innerHTML = "RC/WS";
                        } else{
                            r52.innerHTML = "";
                        }
                        if(third === sequence[2]){
                            r53.innerHTML = "RC/RS";
                            threeRight = true;
                        }else if(sequence.indexOf(third) !== -1){
                            r53.innerHTML = "RC/WS";
                        } else{
                            r53.innerHTML = "";
                        }
                        if(fourth === sequence[3]){
                            r54.innerHTML = "RC/RS";
                            fourRight = true;
                        }else if(sequence.indexOf(fourth) !== -1){
                            r54.innerHTML = "RC/WS";
                        } else{
                            r54.innerHTML = "";
                        }
                        if(oneRight && twoRight && threeRight && fourRight){
                            console.log("WINNER");
                        }
                        assert.addEventListener("click", function (){
                            let first = guess1.value;
                            let second = guess2.value;
                            let third = guess3.value;
                            let fourth = guess4.value;
                            your61.innerHTML = first;
                            your62.innerHTML = second;
                            your63.innerHTML = third;
                            your64.innerHTML = fourth;
                            if(first === sequence[0]){
                                r61.innerHTML = "RC/RS";
                                oneRight = true;
                            }else if(sequence.indexOf(first) !== -1){
                                r61.innerHTML = "RC/WS";
                            } else{
                                r61.innerHTML = "";
                            }
                            if(second === sequence[1]){
                                r62.innerHTML = "RC/RS";
                                twoRight = true;
                            }else if(sequence.indexOf(second) !== -1){
                                r62.innerHTML = "RC/WS";
                            } else{
                                r62.innerHTML = "";
                            }
                            if(third === sequence[2]){
                                r63.innerHTML = "RC/RS";
                                threeRight = true;
                            }else if(sequence.indexOf(third) !== -1){
                                r63.innerHTML = "RC/WS";
                            } else{
                                r63.innerHTML = "";
                            }
                            if(fourth === sequence[3]){
                                r64.innerHTML = "RC/RS";
                                fourRight = true;
                            }else if(sequence.indexOf(fourth) !== -1){
                                r64.innerHTML = "RC/WS";
                            } else{
                                r64.innerHTML = "";
                            }
                            if(oneRight && twoRight && threeRight && fourRight){
                                console.log("WINNER");
                            }
                            assert.addEventListener("click", function (){
                                let first = guess1.value;
                                let second = guess2.value;
                                let third = guess3.value;
                                let fourth = guess4.value;
                                your71.innerHTML = first;
                                your72.innerHTML = second;
                                your73.innerHTML = third;
                                your74.innerHTML = fourth;
                                if(first === sequence[0]){
                                    r71.innerHTML = "RC/RS";
                                    oneRight = true;
                                }else if(sequence.indexOf(first) !== -1){
                                    r71.innerHTML = "RC/WS";
                                } else{
                                    r71.innerHTML = "";
                                }
                                if(second === sequence[1]){
                                    r72.innerHTML = "RC/RS";
                                    twoRight = true;
                                }else if(sequence.indexOf(second) !== -1){
                                    r72.innerHTML = "RC/WS";
                                } else{
                                    r72.innerHTML = "";
                                }
                                if(third === sequence[2]){
                                    r73.innerHTML = "RC/RS";
                                    threeRight = true;
                                }else if(sequence.indexOf(third) !== -1){
                                    r73.innerHTML = "RC/WS";
                                } else{
                                    r73.innerHTML = "";
                                }
                                if(fourth === sequence[3]){
                                    r74.innerHTML = "RC/RS";
                                    fourRight = true;
                                }else if(sequence.indexOf(fourth) !== -1){
                                    r74.innerHTML = "RC/WS";
                                } else{
                                    r74.innerHTML = "";
                                }
                                if(oneRight && twoRight && threeRight && fourRight){
                                    console.log("WINNER");
                                }
                                assert.addEventListener("click", function (){
                                    let first = guess1.value;
                                    let second = guess2.value;
                                    let third = guess3.value;
                                    let fourth = guess4.value;
                                    your81.innerHTML = first;
                                    your82.innerHTML = second;
                                    your83.innerHTML = third;
                                    your84.innerHTML = fourth;
                                    if(first === sequence[0]){
                                        r81.innerHTML = "RC/RS";
                                        oneRight = true;
                                    }else if(sequence.indexOf(first) !== -1){
                                        r81.innerHTML = "RC/WS";
                                    } else{
                                        r81.innerHTML = "";
                                    }
                                    if(second === sequence[1]){
                                        r82.innerHTML = "RC/RS";
                                        twoRight = true;
                                    }else if(sequence.indexOf(second) !== -1){
                                        r82.innerHTML = "RC/WS";
                                    } else{
                                        r82.innerHTML = "";
                                    }
                                    if(third === sequence[2]){
                                        r83.innerHTML = "RC/RS";
                                        threeRight = true;
                                    }else if(sequence.indexOf(third) !== -1){
                                        r83.innerHTML = "RC/WS";
                                    } else{
                                        r83.innerHTML = "";
                                    }
                                    if(fourth === sequence[3]){
                                        r84.innerHTML = "RC/RS";
                                        fourRight = true;
                                    }else if(sequence.indexOf(fourth) !== -1){
                                        r84.innerHTML = "RC/WS";
                                    } else{
                                        r84.innerHTML = "";
                                    }
                                    if(oneRight && twoRight && threeRight && fourRight){
                                        console.log("WINNER");
                                    }
                                    assert.addEventListener("click", function (){
                                        let first = guess1.value;
                                        let second = guess2.value;
                                        let third = guess3.value;
                                        let fourth = guess4.value;
                                        your91.innerHTML = first;
                                        your92.innerHTML = second;
                                        your93.innerHTML = third;
                                        your94.innerHTML = fourth;
                                        if(first === sequence[0]){
                                            r91.innerHTML = "RC/RS";
                                            oneRight = true;
                                        }else if(sequence.indexOf(first) !== -1){
                                            r91.innerHTML = "RC/WS";
                                        } else{
                                            r91.innerHTML = "";
                                        }
                                        if(second === sequence[1]){
                                            r92.innerHTML = "RC/RS";
                                            twoRight = true;
                                        }else if(sequence.indexOf(second) !== -1){
                                            r92.innerHTML = "RC/WS";
                                        } else{
                                            r92.innerHTML = "";
                                        }
                                        if(third === sequence[2]){
                                            r93.innerHTML = "RC/RS";
                                            threeRight = true;
                                        }else if(sequence.indexOf(third) !== -1){
                                            r93.innerHTML = "RC/WS";
                                        } else{
                                            r93.innerHTML = "";
                                        }
                                        if(fourth === sequence[3]){
                                            r94.innerHTML = "RC/RS";
                                            fourRight = true;
                                        }else if(sequence.indexOf(fourth) !== -1){
                                            r94.innerHTML = "RC/WS";
                                        } else{
                                            r94.innerHTML = "";
                                        }
                                        if(oneRight && twoRight && threeRight && fourRight){
                                            console.log("WINNER");
                                        }
                                        assert.addEventListener("click", function (){
                                            let first = guess1.value;
                                            let second = guess2.value;
                                            let third = guess3.value;
                                            let fourth = guess4.value;
                                            your101.innerHTML = first;
                                            your102.innerHTML = second;
                                            your103.innerHTML = third;
                                            your104.innerHTML = fourth;
                                            if(first === sequence[0]){
                                                r101.innerHTML = "RC/RS";
                                                oneRight = true;
                                            }else if(sequence.indexOf(first) !== -1){
                                                r101.innerHTML = "RC/WS";
                                            } else{
                                                r101.innerHTML = "";
                                            }
                                            if(second === sequence[1]){
                                                r102.innerHTML = "RC/RS";
                                                twoRight = true;
                                            }else if(sequence.indexOf(second) !== -1){
                                                r102.innerHTML = "RC/WS";
                                            } else{
                                                r102.innerHTML = "";
                                            }
                                            if(third === sequence[2]){
                                                r103.innerHTML = "RC/RS";
                                                threeRight = true;
                                            }else if(sequence.indexOf(third) !== -1){
                                                r103.innerHTML = "RC/WS";
                                            } else{
                                                r103.innerHTML = "";
                                            }
                                            if(fourth === sequence[3]){
                                                r104.innerHTML = "RC/RS";
                                                fourRight = true;
                                            }else if(sequence.indexOf(fourth) !== -1){
                                                r104.innerHTML = "RC/WS";
                                            } else{
                                                r104.innerHTML = "";
                                            }
                                            if(oneRight && twoRight && threeRight && fourRight){
                                                console.log("WINNER");
                                            }
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