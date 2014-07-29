var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="bouncy_dancer" src="src/image.jpeg"></img>');
};
BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var x = Math.random() * $("body").width();
  var y = Math.random() * $("body").height();
  this.$node.animate({
    top: y,
    left: x  
  });
  this.$node.on("mouseover", function(event) {
    $(this).attr('src', 'src/boom.svg').fadeOut();
  });
};