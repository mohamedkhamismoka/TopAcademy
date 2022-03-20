$(document).ready(function() {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= 700) {
            $("#top").css("display", "block")
        } else {
            $("#top").css("display", "none")
        }
    })
    $("#top").on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, function() {
            $("#top").css("display", "none")
        })

    })

    new WOW().init();
})