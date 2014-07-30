var SpaceInvader = function(top, left, speed){
  this.$node = $('<img class="invader" src="src/alien.png"></img>');
  Sprite.call(this, top, left);
  this.attack();
};
SpaceInvader.prototype = Object.create(Sprite.prototype);
SpaceInvader.prototype.constructor = SpaceInvader;

SpaceInvader.prototype.attack = function(){
  this.$node.animate({top: $('body').height() * .95}, Math.random() * 4000 + 1000, "linear", function() {
    window.score -= 50;
    $(this).remove();
  });
};

