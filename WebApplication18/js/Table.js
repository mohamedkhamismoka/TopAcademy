$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() > 0 && $(this).width() < 768) {
            $(".exp").hide();
            $("table #ex").hide();
            $("table #coll ").hide();
            $(".coex").css("display", "inline-block");
            $(".coex").css("margin-right", "0px");
           

        } else {

            $("table #ex").show();
            
            $("table #coll ").hide();
            $(".exp").hide();
            $(".coex").hide();
        }
    })
    $(".coex").click(function () {
        $(this).parents().parent().nextAll("#coll").hide();
        $(this).parents().parent().prevAll("#coll").hide();
        $(this).parents().parent().next("#coll").show();
        $(this).parents("tr").children().find(".exp").show();
        $(this).parents("tr").siblings().find(".exp").hide();
        $(this).parents("tr").siblings().find(".coex").show();
        
        $(".coex").css("margin-right", "0px");
        $(this).hide();
        if ($(window).width() < 504) {
            $(this).parents("tr").siblings().find(".coex").css("display", "inline - block");
            $(this).parents("tr").siblings().find(".coex").css("margin-left", "-10px");
            $(this).parents("tr").siblings().find(".exp").css("margin-left", "-10px");
            
        

            $("h2").css("color", "green")
        }
       
    })
    $(".exp").click(function () {
        $(this).hide();
        $(".coex").show();
        $(this).parents().parent().next("#coll").hide();
    })

  
});


