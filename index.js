$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 50) {
      $('.navbar').addClass('scrolled-nav');
      $(".nav-link").addClass('scrolled-nav');
      $("#nav-logo").css("color","black");
      $(".fa-ellipsis-v").css("color","black");
    } else if (scrollTop < 50) {
      $('.navbar').removeClass('scrolled-nav');
      $(".nav-link").removeClass('scrolled-nav');
      $("#nav-logo").css("color","white");
      $(".fa-ellipsis-v").css("color","white");
    }
  $(window).scroll(function() {
    if (window.screen.width <= 460){
      if (scrollTop >= 350) {
          $(".navbar").addClass("scrolled-nav-white");
      }
      else if (scrollTop < 350) {
          $(".navbar").removeClass("scrolled-nav-white");
      }
      }
    else{
      if (scrollTop >= 650) {
          $(".navbar").addClass("scrolled-nav-white");
      }
      else if (scrollTop < 650) {
          $(".navbar").removeClass("scrolled-nav-white");
      }
    }
  });
  });
});


$(window).scroll(function(){
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 350);
  });
