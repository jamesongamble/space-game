var SpaceInvader = function(top, left, speed){
  this.$node = $('<img class="invader" src="src/alien.png"></img>');
  Sprite.call(this, top, left);
  this.attack();
  this.shoot();
  this.shooter;
};
SpaceInvader.prototype = Object.create(Sprite.prototype);
SpaceInvader.prototype.constructor = SpaceInvader;

SpaceInvader.prototype.attack = function(){
  var that = this;
  this.$node.animate({top: $('.gamespace').height() * .95}, 5000, "linear", function() {
    window.score -= 50;
    this.remove();
    delete that.$node;
    clearTimeout(this.shooter);
  });
};

SpaceInvader.prototype.shoot = function() {
  if (!this.$node || this.$node.position().left === 0) {
    this.shooter = setTimeout(this.shoot.bind(this), Math.random() * 8000);
    return;
  }
  var lazer = new Lazer (this.$node.position().top + 20, this.$node.position().left + 13);
  $('body').append(lazer.$node);
  this.shooter = setTimeout(this.shoot.bind(this), Math.random() * 8000);
};
