var imageFilenames = [
  "a-brief-history-of-representing-of-the-body-in-Western-sculpture.png",
  "absolute value and number lines.png",
  "abstractness.png",
  "beautyofalgebra-galileo.png",
  "black-holes.png",
  "coordinate plane examples.png",
  "exercise1.png",
  "exercise3.png",
  "finding intercepts from an equation.png",
  "fives.png",
  "golden-ratio-of-moon.png",
  "intercepts.png",
  "introduction to place value.png",
  "linear equation word problem.png",
  "making five.png",
  "moon-jar.jpg",
  "negative numbers introduction.png",
  "origin-of-algebra.png",
  "phases-of-moon.png",
  "renting-versus-buying-a-home.png",
  "simultaneous-contrasts.png",
  "size-of-moon.jpg",
  "supermassive-black-holes.png",
  "what is a variable.png",
  "why-of-algebra.png",
  "would-a-brick.png",
  "writing-arguement.png",
];
var contentTypes = [
  "article",
  "exercise",
  "video",
];
var styles = [
  {
    icon: {
      opacity: "0",
    },
    colorOverlay: {
      opacity: "0",
    },
    image: {
    }
  },
  {
    icon: {
      opacity: "1",
      mixBlendMode: "screen",
    },
    colorOverlay: {
      opacity: "1",
      backgroundColor: "#E38A9E",
      mixBlendMode: "hard-light"
    },
    image: {
      webkitFilter: "grayscale(100%)",
    }
  }
];

var randomNumber = function(min, max) {
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }
  var a = min;
  var b = max - min;
  return a + (Math.random() * b);
};

var randomInteger = function(min, max) {
  return Math.round(randomNumber(min, max));
};

var getRandomImageURL = function() {
  var i = randomInteger(0, imageFilenames.length - 1);
  return "images/thumbnails/" + imageFilenames[i];
};

var getRandomIconURL = function(size) {
  if (size == null) {
    size = 24;
  }
  var i = randomInteger(0, contentTypes.length - 1);
  var filename = "content-icon-" + contentTypes[i] + "-" + size + ".png";
  return "images/icons/" + filename;
};

var applyBaseStyle = function() {
  var thumbnails = $(".thumbnail");
  thumbnails.each(function(i, t) {
    var thumbnail = $(t);
    
    var w = thumbnail.width();
    var h = thumbnail.height();
    var iconSize = (h > 60) ? 48 : 24;
    var iconX = w / 2 - iconSize / 2;
    var iconY = h / 2 - iconSize / 2;
    
    var imageURL = getRandomImageURL();
    var iconURL = getRandomIconURL(iconSize);
    
    var icon = thumbnail.find(".icon");
    icon.css({
    });
    
    var colorOverlay = thumbnail.find(".color-overlay");
    colorOverlay.css({
    });
    
    var image = thumbnail.find(".image");
    image.css({
      opacity: "1",
      webkitFilter: "none",
    });
    
    thumbnail.css({
      overflow: "hidden",
      borderRadius: "4px",
    });
    thumbnail.append(image);
    thumbnail.append(colorOverlay);
    thumbnail.append(icon);
  });
};

var applyStyle = function(styleID) {
  applyBaseStyle();
  
  if (styleID < 1 || styleID > styles.length) {
    return;
  }
  
  var css = styles[styleID - 1];
  
  var icons = $(".icon");
  icons.each(function(i, e) {
    $(e).css(css.icon);
  });
  
  var colorOverlays = $(".color-overlay");
  colorOverlays.each(function(i, e) {
    $(e).css(css.colorOverlay);
  });
  
  var images = $(".image");
  images.each(function(i, e) {
    $(e).css(css.image);
  });
};

$(document).ready(function() {
  var thumbnails = $(".thumbnail");
  thumbnails.each(function(i, t) {
    var thumbnail = $(t);
    
    var w = thumbnail.width();
    var h = thumbnail.height();
    var iconSize = (h > 60) ? 48 : 24;
    var iconX = w / 2 - iconSize / 2;
    var iconY = h / 2 - iconSize / 2;
    
    var imageURL = getRandomImageURL();
    var iconURL = getRandomIconURL(iconSize);
    
    var icon = $("<div class=\"icon\"></div>");
    icon.css({
      left: iconX + "px",
      top: iconY + "px",
      width: iconSize + "px",
      height: iconSize + "px",
      background: "url(" + iconURL + ") no-repeat center"
    });
    
    var colorOverlay = $("<div class=\"color-overlay\"></div>");
    
    var image = $("<div class=\"image\"></div>");
    image.css({
      background: "url(" + imageURL + ") no-repeat center",
      backgroundSize: "cover",
    });
    
    thumbnail.css({
      overflow: "hidden",
      borderRadius: "4px",
    });
    thumbnail.append(image);
    thumbnail.append(colorOverlay);
    thumbnail.append(icon);
  });
  
  applyStyle(1);
  
  $(document).keypress(function(e) {
    var styleID = e.which - 48;
    applyStyle(styleID);
  });
});