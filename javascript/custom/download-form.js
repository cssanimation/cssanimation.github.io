$(function() {
  $('.download-signup-form-button').find('p, a').click(function(e) {
    e.preventDefault();
    $(this).parents('.download-signup-form-button').addClass('hide');
    $('.download-signup-form').addClass('show');
    $('.download-signup-form').find('input[type=email]').focus();
  });
});