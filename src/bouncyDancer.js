var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncy_dancer"></span>');
};
BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var x = Math.random() * $('body').width();
  var y = Math.random() * $('body').height()*.75;
  this.$node.animate({
    top: y,
    left: x  
  });
};