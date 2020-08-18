new WOW().init();

// header&footer載入
$(function(){
  // $("header").append('<div class="container"><h1><a href="01_index.html"><img src="img/logo.png" alt="逸偉建設"></a></h1><a class="toggle"><img src="img/icon_menu.svg"></a><nav class="menu"><ul><li class="active"><a href="02_index.html">關於逸偉</a></li><li><a href="03_index.html">個案作品</a></li><li><a href="05_index.html">最新消息</a></li><li><a href="07_index.html">聯絡我們</a></li><li><a href="08_index.html">土地合建</a></li></ul><div class="icon-close"><img src="img/icon_delete.svg"></div></nav></div>');

  $("footer").append('<div class="copyright">©2020 逸偉建設 All Right Reserved.</div>');
});


// 手機選單
$(function(){
  var $mobile = $('#header') ,
      $toggle = $mobile.find('.toggle') ,
      $menu = $mobile.find('.menu');
      $h1 = $mobile.find('h1');

  $('.toggle').click(function() {
      $menu.addClass('openmenu');
      $h1.addClass('openmenu');
  });

  $('.icon-close').click(function() {
      $menu.removeClass('openmenu');
  });
  
  $(window).scroll(function() {
      if ($(this).scrollTop() > 70)  { 
          $('.toggle').css("background-color","rgba(255,255,255, 1)"); 
      }else{
          $('.toggle').css("background-color","rgba(158, 125, 62, 0)");
      }
  });
});


$(document).ready(function(){

    $('.slider_kv').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    });
    
    $('.slider_jumbotron').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
    $('.slider_popup').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.slider_case').slick({
      infinite: true,
      // draggable: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });

    $('.slider_news').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false
    });

    $(".imgLiquidFill").imgLiquid();

    // if($(window).width() > 990)
    // {
    //   $('.caseDetail').addClass("js_height");
    //   $('.caseImg').addClass("js_height");
    //   console.log("addClass")
    // } else {
    //   $('.caseDetail').removeClass("js_height");
    //   $('.caseImg').removeClass("js_height");
    //   console.log("removeClass")
    // }
    
    var max = 0;
    $('.caseboxTxt_Desc').each(function (T) {
      T = $(this).outerHeight(), T > max && (max = T);
    }).outerHeight(max);
    
    $('.js_height').each(function (T) {
      T = $(this).outerHeight(), T > max && (max = T);
    }).outerHeight(max);



    $('.caseJumbotron .productboxcase_Img').click(function() {
      $('.popupImg').addClass('is-acted');
    });
    $('.close').click(function() {
        $('.popupImg').removeClass('is-acted');
    });

});



// $(document).ready(function(){

//   if($(window).width() > 990)
//   {
//     $('.caseDetail').addClass(".js_height");
//     $('.caseImg').addClass(".js_height");
//   } else {
//     $('.caseDetail').removeClass(".js_height");
//     $('.caseImg').removeClass(".js_height");
//   }


// })


 // scrollTop
 $(function () {
    $('.gototop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

});

// $(window).scroll(function (event) {
//   var lastScrollTop = $(window).scrollTop();

//   if (lastScrollTop > 60%) {
//     $(".navfix").addClass("is-acted");
//   } else {
//     $(".navfix").removeClass("is-acted");
//   }
// });


  