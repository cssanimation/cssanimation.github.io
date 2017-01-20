$(function() {
  
  /* Functions for the hero image part */
  addNewItem();
  removeFirstItem();
  setInterval(addNewItem, 2500);
  setInterval(removeFirstItem, 2500);

});

/* Functions for the hero image part */
function removeFirstItem() {
  $('.animation-parts-page.removing').remove();
  $('.animation-parts-page').first().addClass('removing');
}

function addNewItem() {
  // Build a "page" to add to the container
  var newPage = $('<div class="animation-parts-page"><div class="box box1"></div><div class="box box2"></div><div class="box box3"></div><div class="box box4"></div></div>');
  console.log('Random: ', randomHeights());
  var arrayHeights = randomHeights(),
      arrayWidths = randomWidths();
  $(newPage).find('.box').each(function(index, item) {
    $(item).css({
      height: arrayHeights[index]+'%',
      width: arrayWidths[index]+'%'
    })
  });
  $('.animation-pages-container').append(newPage);
}

function randomHeights() {
  // Produce 4 numbers that add up to 90
  var heights = [],
      total = 0;
  for (var i = 0; i < 4; i++) {
    var randomHeight = rand_10(10, 50);
    if ((total + randomHeight) > (90 - i * 10)) {
      randomHeight = 10;
    }
    if (i === 0) {
      randomHeight = rand_10(10, 20);
    }
    if (i === 3) {
      randomHeight = 90 - total;
    }
    total += randomHeight;
    heights.push(randomHeight);
  }
  return heights;
}

function randomWidths() {
  var widths = [];
  for (var i = 0; i < 4; i++) {
    widths.push(rand_10(50, 90));
  }
  return widths;
}

function rand_10(min, max) {
  return Math.round((Math.random()*(max-min)+min)/10)*10;
}