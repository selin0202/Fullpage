// $(function () {
//     var typingBool = false;
//     var typingIdx = 0;
//     var liIndex = 0;
//     var liLength = $(".typing-txt>ul>li").length;

//     // 타이핑될 텍스트를 가져온다 
//     var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
//     typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
//     if (typingBool == false) { // 타이핑이 진행되지 않았다면 
//         typingBool = true;
//         var tyInt = setInterval(typing, 100); // 반복동작 
//     }

//     function typing() {
//         if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
//             $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
//             typingIdx++;
//         } else { //한 문장이끝나면 다음으로
            
//             if (liIndex >= liLength - 1) {
//                 liIndex = 0;
//             } else {
//                 liIndex++;
//             }

//             //타이핑 셋팅
//             typingIdx = 0;
//             typingBool = false;
//             typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

//             //다음문장 타이핑 전 1s 쉼
//             clearInterval(tyInt);
//             setTimeout(function () {
//                 $(".typing").html('');
//                 tyInt = setInterval(typing, 100);
//             }, 1000);
//         }
//     }
// })