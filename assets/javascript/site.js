$( document ).ready(function() {
  if ($('.tap-to-activate').length > 0) {
    $('.tap-to-activate').on({
      'touchstart':
      function() {
        $(this).toggleClass('active');
      },
      'blur':
      function() {
        $(this).toggleClass('active');
      }
    });
  }
});
