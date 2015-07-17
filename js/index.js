var imageFilenames = [
  "a-brief-history-of-representing-of-the-body-in-Western-sculpture.png",
  "abstractness.png",
  "beautyofalgebra-galileo.png",
  "black-holes.png",
  "exercise1.png",
  "exercise3.png",
  "fives.png",
  "golden-ratio-of-moon.png",
  "intercepts.png",
  "moon-jar.jpg",
  "origin-of-algebra.png",
  "phases-of-moon.png",
  "renting-versus-buying-a-home.png",
  "simultaneous-contrasts.png",
  "size-of-moon.jpg",
  "supermassive-black-holes.png",
  "why-of-algebra.png",
  "would-a-brick.png",
  "writing-arguement.png",
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

$(document).ready(function() {
  var thumbnails = $(".thumbnail");
  thumbnails.each(function(i, t) {
    var thumbnail = $(t);
    var imageURL = getRandomImageURL();
    
    var image = $("<div class=\"image\"></div>");
    image.css({
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      background: "rgba(255, 0, 128, 1.0) url(" + imageURL + ") no-repeat center",
      backgroundSize: "cover",
      filter: "grayscale(100%)",
    });
    
    var colorOverlay = $("<div></div>");
    colorOverlay.css({
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "#E38A9E",
      opacity: "1.0",
      mixBlendMode: "hard-light"
    });
    
    thumbnail.css({
      overflow: "hidden",
      borderRadius: "4px",
    });
    thumbnail.append(image);
    thumbnail.append(colorOverlay);
  });
});