var Sprite = function(top, left){
  this.setPosition(top, left);
  this.posY = top;
};

Sprite.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};