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
    //assert buttons
    let assert = document.getElementById("submit");
    let guess1 = document.getElementById("colorInput1").value;
    let guess2 = document.getElementById("colorInput2").value;
    let guess3 = document.getElementById("colorInput3").value;
    let guess4 = document.getElementById("colorInput4").value;
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
       done.addEventListener("click", function (){
            answer1.innerHTML = hidden1.innerHTML;
            answer2.innerHTML = hidden2.innerHTML;
            answer3.innerHTML = hidden3.innerHTML;
            answer4.innerHTML = hidden4.innerHTML;
       })
    });
    assert.addEventListener("click", function (){
        your11.innerHTML = guess1;
        your12.innerHTML = guess2;
        your13.innerHTML = guess3;
        your14.innerHTML = guess4;
        console.log(guess1);
        assert.addEventListener("click", function (){
           your21.innerHTML = "second";
           your22.innerHTML = "second";
           your23.innerHTML = "second";
           your24.innerHTML = "second";
            assert.addEventListener("click", function (){
                your31.innerHTML = "third";
                your32.innerHTML = "third";
                your33.innerHTML = "third";
                your34.innerHTML = "third";
                assert.addEventListener("click", function (){
                    your41.innerHTML = "four";
                    your42.innerHTML = "four";
                    your43.innerHTML = "four";
                    your44.innerHTML = "four";
                    assert.addEventListener("click", function (){
                        your51.innerHTML = "five";
                        your52.innerHTML = "five";
                        your53.innerHTML = "five";
                        your54.innerHTML = "five";
                        assert.addEventListener("click", function (){
                            your61.innerHTML = "six";
                            your62.innerHTML = "six";
                            your63.innerHTML = "six";
                            your64.innerHTML = "six";
                            assert.addEventListener("click", function (){
                                your71.innerHTML = "seven";
                                your72.innerHTML = "seven";
                                your73.innerHTML = "seven";
                                your74.innerHTML = "seven";
                                assert.addEventListener("click", function (){
                                    your81.innerHTML = "eight";
                                    your82.innerHTML = "eight";
                                    your83.innerHTML = "eight";
                                    your84.innerHTML = "eight";
                                    assert.addEventListener("click", function (){
                                        your91.innerHTML = "nine";
                                        your92.innerHTML = "nine";
                                        your93.innerHTML = "nine";
                                        your94.innerHTML = "nine";
                                        assert.addEventListener("click", function (){
                                            your101.innerHTML = "ten";
                                            your102.innerHTML = "ten";
                                            your103.innerHTML = "ten";
                                            your104.innerHTML = "ten";
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