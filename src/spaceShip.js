var SpaceShip = function(top, left){
  this.$node = $('<img class="spaceship" src="src/ship.png"></img>');
  this.posX = left;
  Sprite.call(this, top, left, 0);
};  

SpaceShip.prototype = Object.create(Sprite.prototype);
SpaceShip.prototype.constructor = SpaceShip;

SpaceShip.prototype.fire = function(side) {
  console.log(side);
  var offset;
  if (side === 'left') { 
    offset = 0;
  }  
  else {
    offset = 43;
  }
  var missile = new Missile (this.posY, this.posX + offset);
  $('body').append(missile.$node);
}