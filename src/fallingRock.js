var FallingRock = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, left, 1);
  this.$node.attr('class', 'meteor');
  this.$node.attr('src', 'src/meteor.png');
};
FallingRock.prototype = Object.create(Dancer.prototype);
FallingRock.prototype.constructor = FallingRock;

FallingRock.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.animate({top: '100%'}, 3000, "swing", function() {
    $(this).remove();
  });
  this.$node.on("mouseenter", function(event) {
    alert('YOU DIED!');
    location.reload();
  });
};