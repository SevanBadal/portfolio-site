$("#btn-arrow").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#bottom-half").offset().top
  }, 500);
});

$('.list-inline').on('click', 'span', function () {
  $('.list-inline span.active').removeClass('active');
  $(this).addClass('active');
});
