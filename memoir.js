function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 2)) + min;
}

var randomOrder = function(element) {
    // Viewport Dimensions
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;
    // Image Position
    var xPos = getRandomInt(0, vpWidth - element.offsetWidth);
    var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
    var zIndex = getRandomInt(0,10);
    
 element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
};
var imgs = document.querySelectorAll('img');

imgs.forEach((the_img) => {
  
  window.addEventListener('load', function() {
    randomOrder(the_img);
  });

});
