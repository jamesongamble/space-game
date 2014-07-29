var FallingRock = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, left, 50);
  this.$node.attr('class', 'meteor');
  this.$node.attr('src', 'src/meteor.png');
};
FallingRock.prototype = Object.create(Dancer.prototype);
FallingRock.prototype.constructor = FallingRock;

FallingRock.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (this.$node.position().top >= $('body').height() * .8) {
    this.$node.remove();
  }
  this.$node.css({top: this.$node.position().top + 10});
};