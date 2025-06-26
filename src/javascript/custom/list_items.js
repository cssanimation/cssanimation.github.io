var randomColours = ['3c6dd1','d13c9e','3cd19e'];
var currentColour = 0;
var currentDemoColour = 0;


$(function() {
  $('.add-to-list button').click(function(e) {
    addLI($(e.target).parent(), false);
  });

  $('.add-to-list li').each(function(index, item) {
    bindNewLI($(item));
  });

  // Have the header automatically add and remove items
  setInterval(function() {
    addDemoURL();
  }, 2000);
});

function bindNewLI(t) {
  t.click(function(e) {
    var target = $(e.target);
    if (target.hasClass('no-hide')) return;
    target.removeClass('show');
    setTimeout(function() {
      target.remove();
    }, 500);
  });
}

function addLI(container, isDemo) {
  var newLI = $('<li>List item</li>');
  if (!isDemo) {
    var colour = randomColours[currentColour];
    if (currentColour == randomColours.length - 1) {
      currentColour = 0;
    } else {
      currentColour++;
    }
  } else {
    var colour = randomColours[currentDemoColour];
    if (currentDemoColour == randomColours.length - 1) {
      currentDemoColour = 0;
    } else {
      currentDemoColour++;
    }
  }

  newLI.css('background-color', '#'+colour);
  bindNewLI(newLI);
  container.find('ul').append(newLI);
  setTimeout(function() {
    if (!isDemo) {
      newLI.addClass('show');
    } else {
      newLI.addClass('show no-hide');
    }
  }, 10);
}

function addDemoURL() {
  var newLI = $('<li></li>');
  addLI($('#demo'), true);
  setTimeout(function() {
    removeDemoItem();
  }, 10);
}

function removeDemoItem() {
  $('#demo').find('ul li:first-child').addClass('hide');
  setTimeout(function() {
    $('#demo').find('ul li:first-child').remove();
  }, 1000);
}
