$(function() {
  $('#add-to-list button').click(function() {
    var newLI = $('<li>A new item appears!</li>');
    $('#add-to-list ul').append(newLI);
  });
});
