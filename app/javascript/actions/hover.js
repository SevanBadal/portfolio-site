const githubElm = document.getElementById('github__info');
$("#github").hover(
  function () {
    $(githubElm).fadeToggle('fast', function (params) {
    });
  },
  function () {
    $(githubElm).fadeToggle('fast');
  }
);
