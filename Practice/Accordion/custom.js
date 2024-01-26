$(function () {
  // $('.accordion-item .content').eq(0).show();
  $('.accordion-item .title').click(function () {
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass('active');
    $(this).siblings('.accordion .title').removeClass('active');
  });
  $('.accordion-item .content').click(function () {
    $(this).stop().slideUp(300);
  });
});
