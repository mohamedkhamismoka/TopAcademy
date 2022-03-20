$(document).ready(function(){
       
    $(".slider").owlCarousel({
      loop: true,
      nav:true,
      autoplay: true,
      autoplayTimeout: 2000, //2000ms = 2s;
      autoplayHoverPause: true,
      responsiveClass:true,
     
// breakpoint from 0 up
responsive:{
   0:{
       items:1,
       nav:true
   },
   600:{
       items:1,
       nav:false
   },
   1000:{
       items:3,
       nav:true,
       loop:false
   }
}

    });
    $('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});

   $(window).scroll(function() {
       if ($(document).scrollTop() > 50) {
           $('.nav').addClass('affix');
           console.log("OK");
       } else {
           $('.nav').removeClass('affix');
       }
   });

 });

