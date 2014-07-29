var DiscoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({border: "10px solid green"});
  this.$node.ap
};
DiscoDancer.prototype = Object.create(Dancer.prototype);
DiscoDancer.prototype.constructor = DiscoDancer;

DiscoDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var size = Math.floor(Math.random() * 30);
  var random = Math.floor(Math.random() * 5);
  var colors = ['orange', 'red', 'yellow', 'green', 'purple']
  var bdr = size + "px solid " + colors[random];
  this.$node.css({border: bdr});
};