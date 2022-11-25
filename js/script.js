$(function(){
  //banner slider
  // $('.hero_img_wrapper').slick({
  //   slidesToShow: 1,
  //   arrows:false,
  // });

  //logos slider
  $('.logo_slider').slick({
    slidesToShow: 5,
    autoplay:true,
    arrows:false,
    autoplaySpeed:2000,
    centerPadding:'60px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });
  
    //our team slider
    $('.our_team_slider').slick({
        slidesToShow: 3,
        prevArrow: '<i class="fa-solid fa-arrow-left-long i our_team_nextprev" ></i>',
        nextArrow:' <i class="fa-solid fa-arrow-right-long i our_team_nextArrow"  ></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
      });
      //counter up
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      //blog slider
      // $(".blog_slider").niceScroll({
      //   cursorborder:"''",
      //   boxzoom: true,
      //   cursorcolor:'#18a7b9',
      // });

      // menu fixed
      var menuTop = $(".menu_Fix").offset().top;
    $(window).on("scroll", function () {
      var scrollToTop = $(window).scrollTop();
  
      //js
      if (scrollToTop > menuTop) {
        $(".menu_Fix").addClass("menuFix");
      } else {
        $(".menu_Fix").removeClass("menuFix");
      }
      // back top button js
      if (scrollToTop > 500) {
        $(".backtop").fadeIn(400);
      } else {
        $(".backtop").fadeOut(500);
      }
    });

});