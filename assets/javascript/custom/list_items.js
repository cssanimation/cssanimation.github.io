$(function() {
  var randomColours = ['3c6dd1','d13c9e','3cd19e'];
  var currentColour = 0;
  $('.add-to-list button').click(function(e) {
    var newLI = $('<li>List item</li>');
    var colour = randomColours[currentColour];
    if (currentColour == randomColours.length - 1) {
      currentColour = 0;
    } else {
      currentColour++;
    }
    newLI.css('background-color', '#'+colour);
    bindNewLI(newLI);
    $(e.target).parent().find('ul').append(newLI);
    setTimeout(function() {
      newLI.addClass('show');
    }, 10);
  });

  $('.add-to-list li').each(function(index, item) {
    bindNewLI($(item));
  });
});

function bindNewLI(t) {
  t.click(function(e) {
    var target = $(e.target);
    target.removeClass('show');
    setTimeout(function() {
      target.remove();
    }, 500);
  });
}
