$(function() {
  $('#add-to-list button').click(function() {
    var newLI = $('<li>A new item appears!</li>');
    $('#add-to-list ul').append(newLI);
    setTimeout(function() {
      newLI.addClass('show');
    }, 10);
    setTimeout(function() {
      newLI.addClass('hide').text('See ya later :)');
      setTimeout(function() {
        newLI.remove();
      }, 2000);
    }, 3000);
  });
});
