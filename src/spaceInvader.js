var SpaceInvader = function(top, left, speed){
  this.$node = $('<img class="invader" src="src/alien.png"></img>');
  Sprite.call(this, top, left);
  this.attack();
};
SpaceInvader.prototype = Object.create(Sprite.prototype);
SpaceInvader.prototype.constructor = SpaceInvader;

SpaceInvader.prototype.attack = function(){
  this.$node.animate({top: $('.gamespace').height() * .95}, Math.random() * 4000 + 1000, "linear", function() {
    window.score -= 50;
    $(this).remove();
  });
};

SpaceInvader.prototype.shoot = function() {
  var lazer = new Missile (this.posY, this.posX + 21);
  lazer.$node('<img class="lazer" src="src/lazer.png"></img>');
  $('body').append(missile.$node);
}
