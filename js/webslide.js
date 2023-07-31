$(function () {
    //예스24
    $("#yesbox").mouseenter(function () {
        $("#yes24 > li").stop().animate({ marginTop: "-1230px" }, 8000)
    }).mouseleave(function () {
        $("#yes24 > li").stop().animate({ marginTop: "0px" }, 3000)
    })

    //로지스틱스
    $("#logibox").mouseenter(function () {
        $("#logi > li").stop().animate({ marginTop: "-2550px" }, 8000)
    }).mouseleave(function () {
        $("#logi > li").stop().animate({ marginTop: "0px" }, 3000)
    })

    //푸드스토어
    $("#freshbox").mouseenter(function () {
        $("#fresh > li").stop().animate({ marginTop: "-1900px" }, 8000)
    }).mouseleave(function () {
        $("#fresh > li").stop().animate({ marginTop: "0px" }, 3000)
    })

    //바네스데코
    $("#vanessbox").mouseenter(function () {
        $("#vaness > li").stop().animate({ marginTop: "-1930px" }, 8000)
    }).mouseleave(function () {
        $("#vaness > li").stop().animate({ marginTop: "0px" }, 3000)
    })
})