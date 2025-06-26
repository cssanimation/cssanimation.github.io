$(function() {
  $('.variation4').find('.layer').each(function(index, item) {
    $(item).attr('class', 'layer layer'+index+' draw');
  });
  setTimeout(function() {
    $('.variation4').find('.layer').each(function(index, item) {
      $(item).attr('class', 'layer layer'+index);
    });
  }, 2000);
  setInterval(function() {
    $('.variation4').find('.layer').each(function(index, item) {
      $(item).attr('class', 'layer layer'+index+' draw');
    });
    setTimeout(function() {
      $('.variation4').find('.layer').each(function(index, item) {
        $(item).attr('class', 'layer layer'+index);
      });
    }, 2000);
  },4000);
})
