$(function() {
  // Show and customise the world map shown using RaphaelJS
  // Will need some work to work properly on mobile

  var h = 400,
      w = 960;

  Raphael($('#world-map').get(0), w, h, function () {
    var r = this;
    r.rect(0, 0, w, h, 0).attr({
      stroke: "none",
      fill: "#9bb7cb"
    });
    var over = function () {
      this.c = this.c || this.attr("fill");
      this.stop().animate({fill: "#bacabd"}, 150);
    },
      out = function () {
          this.stop().animate({fill: this.c}, 180);
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
