// 메인슬라이드 slick
$('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    dots: true,
    dotsClass:'slide_dot_list',
    pauseOnDotsHover:false,
  });

  // 기획전 슬라이드
  $('.gh_slick_box').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:$('.next1'),
    prevArrow:$('.prev1'),
    variableWidth:true,
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

  $(".hbg_btn").click(function(){
      $(".modal").css("display","block");
      $(".hidden_menu").show(200)
  })

 // hidden_ment 닫는 스크립트

 $(".modal").click(function(){
  $(".modal").css("display","none");
  $(".hidden_menu").hide(200)
})