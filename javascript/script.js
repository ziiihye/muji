// 메인슬라이드 slick
$('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    dots: true,
    dotsClass:'slide_dot_list',
    pauseOnDotsHover:false,
    fade:true,
    responsive:[
      {
        breakpoint:767,
        settings:{
          dots:false,
        }
      }
    ]
  });

  // 기획전 슬라이드
  $('.gh_slick_box').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:$('.next1'),
    prevArrow:$('.prev1'),
    variableWidth:true,
    responsive:[
      {
        breakpoint:767,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
        }
      }
    ]
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if(filtered === false) {
      $('.filtering').slickFilter(':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slickUnfilter();
      $(this).text('Filter Slides');
      filtered = false;
    }
  });
  
  // hidden_ment 나오는 스크립트
  if($(".menu").is(":visible")){
  $(".hbg_btn").click(function(){
      $(".modal").css("display","block");
      $(".hidden_menu").show(200)
  })
}

 // hidden_ment 닫는 스크립트

 $(".modal").click(function(){
  $(".modal").css("display","none");
  $(".hidden_menu").hide(200)
})

// 미디어 쿼리 슬라이드

if(!$(".menu").is(":visible")){
  $(".sales_list").addClass("sales_slide");

  $(".sales_slide").slick({
    responsive:[
      {
        breakpoint:767,
        settings:{
          slide:"li",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          arrows:false,
          dots: false,
        }
      }
    ]
  }); 

  // 미디어 쿼리 사이드 메뉴
  $(".hbg_btn").click(function(){
    $(".m_menu").fadeIn(500);
})

  $(".close").click(function(){
    $(".m_menu").fadeOut(500)
  })


}



$(document).ready(function(){
  $(".sub_menu").click(function(){
    let idx = $(".sub_menu").index(this)
    if($(".inner_menu").eq(idx).is(":visible")){
      $(".inner_menu").eq(idx).slideUp();
      $(".plus").eq(idx).css("display","block");
      $(".minus").eq(idx).css("display","none");
    }else{
      $(".inner_menu").eq(idx).slideDown();
      $(".plus").eq(idx).css("display","none");
      $(".minus").eq(idx).css("display","block");
    }
  })
});

