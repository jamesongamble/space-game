var Lazer = function(top, left){
  this.$node = $('<img class="lazer" src="src/lazer.png"></img>');
  Sprite.call(this, top, left);
  this.launch();
}; 
Lazer.prototype = Object.create(Sprite.prototype);
Lazer.prototype.constructor = Lazer;

Lazer.prototype.launch = function(){
  this.$node.animate({top: $('.gamespace').height() * .95}, 800, "linear", function() {
    $(this).remove();
  });
};