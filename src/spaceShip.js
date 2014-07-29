var SpaceShip = function(top, left, timeBetweenSteps){
  Dancer.call(this, $('body').height() * .8, $('body').width() * .5, 0);
  this.$node.attr('class', 'spaceship');
  this.$node.attr('src', 'src/image.jpeg');
};

SpaceShip.prototype = Object.create(Dancer.prototype);
SpaceShip.prototype.constructor = SpaceShip;

SpaceShip.prototype.step = function(){  
  Dancer.prototype.step.call(this);
  this.$node.on("mouseover", function(event) {
    
  });
};