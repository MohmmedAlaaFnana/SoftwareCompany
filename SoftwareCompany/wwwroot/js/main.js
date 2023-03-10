$(document).ready(function(){
    
    "use strict";

    // Animate loader off screen
    $('.se-pre-con').fadeOut('slow');

    // Smooth Scrolling
    $('html').smoothScroll(800);
    //Image Light Box Popup
    $('.image-link').magnificPopup({type: 'image'});
    $('.video-link').magnificPopup({type: 'iframe'});

    // Show Navbar background on scroll
    $(window).scroll(function(){
        
        var top = $(window).scrollTop();
         if(top>=100){
           $('.navbar').css('background','linear-gradient(135deg, rgba(6, 183, 168, 1) 0%, rgba(5, 153, 117, 1) 100%)'); 
         }
         
         else 
             if($('.navbar').css('background','linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)')){
  
                 $('.navbar').css('background','linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)'); 
             }
     });
});