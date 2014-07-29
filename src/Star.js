var Star = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
Star.prototype = Object.create(Dancer.prototype);
Star.prototype.constructor = Star;

Star.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};