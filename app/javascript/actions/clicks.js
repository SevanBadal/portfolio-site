const scrollScreen = (elementId = 'bottom-half') => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`#${elementId}`).offset().top
  }, 300);
};

$("#btn-arrow").click(function () {
  scrollScreen('bottom-half');
  document.querySelector(".text-input").focus();
});

$('.list-inline').on('click', 'span', function () {
  $('.list-inline span.active').removeClass('active');
  $(this).addClass('active');
});

// export { scrollScreen };
