//p0 배경, 소개
window.onload = function () {
    //p0 배경
    particlesJS("particles", {
        "particles": {
            "number": {
                "value": 355,
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    //p0 소개글
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".intro").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".intro").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    }

    function typing() {
        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $("#typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else { //한문장이끝나면
            //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
            if (liIndex >= liLength - 1) {
                liIndex = 0;
            } else {
                liIndex++;
            }

            //다음문장을 타이핑하기위한 셋팅
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".intro").eq(liIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            setTimeout(function () {
                $("#typing").html('');
                tyInt = setInterval(typing, 100);
            }, 1000);
        }
    }
}