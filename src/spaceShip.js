var SpaceShip = function(top, left){
  this.$node = $('<img class="spaceship" src="src/image.png"></img>');
  this.posX = left;
  Sprite.call(this, top, left, 0);
};  

SpaceShip.prototype = Object.create(Sprite.prototype);
SpaceShip.prototype.constructor = SpaceShip;

SpaceShip.prototype.fire = function(side) {
  var missile = new Missile (this.posY, this.posX + 21);
  $('body').append(missile.$node);
}