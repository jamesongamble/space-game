var FallingRock = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, left, 1);
};
FallingRock.prototype = Object.create(Dancer.prototype);
FallingRock.prototype.constructor = FallingRock;

FallingRock.prototype.step = function(){
  this.$node = $('<img class="dancer" src="src/meteor.png"></img>');
  Dancer.prototype.step.call(this);
  this.$node.animate({top: '100%'}, 400, "swing", function() {
    $(this).remove();
  });
};