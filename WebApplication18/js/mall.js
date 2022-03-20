$(function(){
    
    $(".x .part1").hover(function(){
        $(this).css("position","relative");
        $(this).css("z-index","999");
    
        $(".part1 img").css("filter","blur(5px)");
        $(this).children("img").css("filter","none");
        
        
    })
    $(".x .part1").mouseleave(function(){
    $(".part1 img").css("filter","none");
    $("h1").text("The Most Popular Malls")
    })
    })