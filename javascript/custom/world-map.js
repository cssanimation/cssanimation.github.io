$(function() {
  // Show and customise the world map shown using RaphaelJS
  // Will need some work to work properly on mobile

  var h = 400,
      w = 960;

  Raphael("world-map", w, h, function () {
    var r = this;
    r.rect(0, 0, w, h, 0).attr({
      stroke: "none",
      fill: "#9bb7cb"
    });

    var over = function (event) {
      // Country highlight colour
      this.c = this.c || this.attr("fill");
      this.stop().animate({fill: "#bacabd"}, 150);
      // Tooltip
      posX = event.pageX - $(document).scrollLeft() - $('#world-map').offset().left;
      posY = event.pageY - $(document).scrollTop() - $('#world-map').offset().top;
      $("#tooltip").show();
    },
      out = function () {
        this.stop().animate({fill: this.c}, 180);
        $("#tooltip").hide();
      };
    r.setStart();
    var hue = Math.random();
    for (var country in worldmap.shapes) {
      // var c = Raphael.hsb(Math.random(), .5, .75);
      //var c = Raphael.hsb(.11, .5, Math.random() * .25 - .25 + .75);
      r.path(worldmap.shapes[country]).attr({stroke: "#ccc6ae", fill: "#f0efeb", "stroke-opacity": 0.25});
    }
    var world = r.setFinish();
    world.hover(over, out);
    var worldContainerOffset = $('#world-container').offset();
    world.mousemove (function(event) {
      posX = event.pageX - $(document).scrollLeft() - worldContainerOffset.left;
      posY = event.pageY - $(document).scrollTop() - worldContainerOffset.top;
      $("#tooltip").css( {
        top: posY - 130,
        left: posX - 100
      });
    });
    world.getXY = function (lat, lon) {
      return {
        cx: lon * 2.6938 + 465.4,
        cy: lat * -2.6938 + 227.066
      };
    };
    world.getLatLon = function (x, y) {
      return {
        lat: (y - 227.066) / -2.6938,
        lon: (x - 465.4) / 2.6938
      };
    };
    var latlonrg = /(\d+(?:\.\d+)?)[\xb0\s]?\s*(?:(\d+(?:\.\d+)?)['\u2019\u2032\s])?\s*(?:(\d+(?:\.\d+)?)["\u201d\u2033\s])?\s*([SNEW])?/i;
    world.parseLatLon = function (latlon) {
      var m = String(latlon).split(latlonrg),
        lat = m && +m[1] + (m[2] || 0) / 60 + (m[3] || 0) / 3600;
      if (m[4].toUpperCase() == "S") {
        lat = -lat;
      }
      var lon = m && +m[6] + (m[7] || 0) / 60 + (m[8] || 0) / 3600;
      if (m[9].toUpperCase() == "W") {
        lon = -lon;
      }
      return this.getXY(lat, lon);
    };
  });
});
