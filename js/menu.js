$(document).ready(function() {

    $(document).on("scroll", function(){
            if
          ($(document).scrollTop() > 400){
              $("header").addClass("shrink");
            }
            else
            {
                $("header").removeClass("shrink");
            }
        });

// Hamburger
   $('.menu-toggle').on('click', function() {
       $('.menu-toggle').toggleClass('active');
       $('.main-nav').toggleClass('menu-active');
   });
});