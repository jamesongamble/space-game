var LeapingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({border: "10px solid green"});
};
LeapingDancer.prototype = Object.create(Dancer.prototype);
LeapingDancer.prototype.constructor = LeapingDancer;

LeapingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};