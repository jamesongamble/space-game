var Star = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'missile');
};
Star.prototype = Object.create(Dancer.prototype);
Star.prototype.constructor = Star;

Star.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css({top: this.$node.position().top - 5});
};