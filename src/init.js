$(document).ready(function(){
  window.score = 0;
  setInterval( function() {
    window.score += 1;
    $('.score').text(window.score);
  }, 1);
  var width = $('body').width()
  var player = new SpaceShip($('body').height() * .9, $('body').width() * .5);
  $("body").append(player.$node);

  setInterval(function() {
    var breakable = $(".spaceship").collision( ".invader" );
    if (breakable.attr('class') === 'invader') {
      $('.spaceship').attr('src', 'src/boom.svg').fadeOut(200, function() {
        $(this).remove();
        location.reload();
      });

    }
    var missile = $(".invader").collision(".missile");
    var alien = $(".missile").collision(".invader");
    if (missile.attr('class') === 'missile') {
      window.score += 500;
      alien.remove();
      missile.remove();
    }
  }, 10);
  $("span").on("click", function() {
    location.reload();
  });
  $("body").keydown(function(e) {
    if (e.keyCode == '39') { //right arrow
      if (player.posX + 30 > $('body').width) {
        var offset = $('body').width() - 50 - player.posX;
        player.$node.animate({left: player.posX + offset}, 1, "linear");
        player.posX += offset;
      } else {
        player.$node.animate({left: player.posX + 30}, 1, "linear");
        player.posX += 30;
      }
    } else if (e.keyCode == '37') { //left arrow
      if (player.posX - 30 <= 25) {
        var offset = player.posX - 25;
        player.$node.animate({left: player.posX - offset}, 1, "linear");
        player.posX -= offset;
      } else {
        player.$node.animate({left: player.posX - 30}, 1, "linear");
        player.posX -= 30;
      }
    }
    else if (e.keyCode == '32') { //spacebar
      player.fire();
    }
  });

  setInterval(function(){
    var alien = new SpaceInvader(32, Math.random() *  width - 50);
    $('body').append(alien.$node);
  }, 250);


});

