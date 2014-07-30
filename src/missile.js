var Missile = function(top, left){
  this.$node = $('<img class="missile" src="src/missile.png"></img>');
  Sprite.call(this, top, left);
  this.launch();
};
Missile.prototype = Object.create(Sprite.prototype);
Missile.prototype.constructor = Missile;

Missile.prototype.launch = function(){
  this.$node.animate({top: 0}, 1200, "linear", function() {
    $(this).remove();
  });
};

// Star.prototype.fired = function() {
//   if ($('.missile').length <= 4) {
//         var posX = $(".spaceship").position().left + 21;
//         var posY = $(".spaceship").position().top;
//         var missile = new Star(posY, posX, 1);
        
//         var gogo = setInterval(function() {
//           var breakable = $(".missile").collision( ".meteor" );
//           if (breakable.attr('class') === 'meteor') {
//             $('.missile').attr('src', 'src/boom.svg').fadeOut(200, function() {
//               $(this).remove();
//               breakable.remove();
//               clearInterval(gogo);
//             });
//           }
//         }, 100);
//         gogo();
//       }
// }