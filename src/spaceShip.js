var SpaceShip = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'spaceship');
  this.$node.attr('src', 'src/image.jpeg');
};

SpaceShip.prototype = Object.create(Dancer.prototype);
SpaceShip.prototype.constructor = SpaceShip;

SpaceShip.prototype.step = function(){  
  Dancer.prototype.step.call(this);
  var x = Math.random() * $("body").width();
  var y = Math.random() * $("body").height();
  this.$node.animate({
    top: y,
    left: x  
  }, 1000);
  this.$node.on("mouseover", function(event) {
    $(this).attr('src', 'src/boom.svg').fadeOut(200, function() {
      $(this).remove();
    });
  });
  this.$node.on("collision", function(event) {
    $(this).attr('src', 'src/boom.svg').fadeOut(200, function() {
      $(this).remove();
    });
  });
};