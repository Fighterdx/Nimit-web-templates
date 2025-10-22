$(document).ready(function(){
    $(".count").each(function () {
$(this)
.prop("Counter", 0)
.animate(
{
Counter: $(this).text(),
},
{
duration: 4000,
easing: "swing",
step: function (now) {
  now = Number(Math.ceil(now)).toLocaleString('en');
    $(this).text(now);
},
}
);
});

})






$(function(){
    $('.bxslider').bxSlider({
        auto: true,
        slideWidth: 400,
        minSlides: 5,
        maxSlides: 5,
        slideMargin: 20,
        moveSlides: 1,
        controls: false
    });
  });

  
$(function(){
  $('.bxslider1').bxSlider({
      auto: true,
      slideWidth: 400,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 20,
      moveSlides: 1,
      controls: false
  });
});


