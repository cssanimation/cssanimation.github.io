$(function() {
  
  /* Functions for the hero image part */
  addNewItem();
  removeFirstItem();
  setInterval(addNewItem, 2500);
  setInterval(removeFirstItem, 2500);

  // If it's at the top of the page, add "delayed" to the first text block

  // Show the video overlay

  // Generate the bubbling screenshots in the structure section
  startBubbles();

  // Countdown the special offer and have it explode

  // Carousel logic
  $('#quotes-carousel').on('click', '.next', showNextQuote);
  $('#quotes-carousel').on('click', '.previous', showPreviousQuote);
});

/* Functions for the hero image part */
function removeFirstItem() {
  $('.animation-parts-page.removing').remove();
  $('.animation-parts-page').first().addClass('removing');
}

function addNewItem() {
  // Build a "page" to add to the container
  var newPage = $('<div class="animation-parts-page"><div class="box box1"></div><div class="box box2"></div><div class="box box3"></div><div class="box box4"></div></div>');
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

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var videoImages = [
  'http://placekitten.com/126/216',
  'http://placezombie.com/216x126',
  'http://placebeard.it/216/126',
  'http://www.placecage.com/216/126',
  'http://fillmurray.com/216/126',
  'http://stevensegallery.com/126/216'
];

function startBubbles() {
  setInterval(appendNewBubble, 2000);
  setInterval(ageBubbles, 2000);
}

function appendNewBubble() {
  var newBubble = $('<div class="video-bubble" data-age="0"></div>'),
      offset = rand(0,50),
      containerHeight = $('#video-bubbles').height() - 50,
      duration = rand(10,14);
  $(newBubble).css({
    animationDuration: duration + 's',
    left: offset + '%',
    transform: 'translateY('+ containerHeight +'px) scale(.5)',
    backgroundImage: 'url('+ getImageSrc() +')'
  });
  $('#video-bubbles').append(newBubble);
}

function getImageSrc() {
  var currentImageUrl = videoImages.shift();
  videoImages.push(currentImageUrl);
  return currentImageUrl;
}

function ageBubbles() {
  $('#video-bubbles').find('.video-bubble').each(function(index, item) {
    var currentAge = $(item).data('age');
    if (currentAge === 7) {
      $(item).remove();
    } else {
      $(item).data('age', currentAge + 1);
    }
  });
}

/* Carousel stuff */

function showNextQuote() {
  var allQuotes = $('#quotes-carousel').find('.quote'),
      current = $('#quotes-carousel').find('.current'),
      previous = $('#quotes-carousel').find('.previous'),
      next = $('#quotes-carousel').find('.next');
  $(current).removeClass('current').addClass('previous');
  $(next).removeClass('next').addClass('current');
  $(previous).removeClass('previous').addClass('removeLeft');
  // Work out what should now be the "next" item
  $(allQuotes).each(function(index, item) {
    if ($(item).hasClass('current')) {
      if (allQuotes[index + 1]) {
        $(allQuotes[index + 1]).addClass('next');
      } else {
        $(allQuotes[0]).addClass('next');
      }
    }
  });
}

function showPreviousQuote() {
  
}

