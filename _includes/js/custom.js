window.addEventListener('load', function () {
  function strikethrough(){
      document.body.innerHTML = document.body.innerHTML.replace(
        /\~\~(.+?)\~\~/gim,
        '<del>$1</del>'
      );
  }
  strikethrough();

  $(window).on('activate.bs.scrollspy', function () {
    $('#site-nav .nav li a.active').get(0).scrollIntoView();
  })
});