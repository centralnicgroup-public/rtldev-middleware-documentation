window.addEventListener('load', function () {
  function strikethrough(){
      document.body.innerHTML = document.body.innerHTML.replace(
        /\~\~(.+?)\~\~/gim,
        '<del>$1</del>'
      );
  }
  strikethrough();

  $('body').scrollspy({ target: '#toc-nav', offset: 100 });
});