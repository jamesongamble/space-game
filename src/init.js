$(document).ready(function(){
  window.score = 0;
  setInterval( function() {
    window.score += 1;
    window.side;
    $('.score').text(window.score);
  }, 1);

  var gamespaceOffset = $('.gamespace').position().left;
  var width = $('.gamespace').width();
  var height = $('.gamespace').height();
  var player = new SpaceShip(height * .9, gamespaceOffset + width * .5 - 25);
  $("body").append(player.$node);

  setInterval(function() {
    var breakable = $(".spaceship").collision( ".invader" );
    if (breakable.attr('class') === 'invader') {
      $('.spaceship').attr('src', 'src/boom.svg').fadeOut(200, function() {
        $(this).remove();
        location.reload();
      });
    }

    var lazer = $(".spaceship").collision( ".lazer" );
    if (lazer.attr('class') === 'lazer') {
      $('.spaceship').attr('src', 'src/boom.svg').fadeOut(200, function() {
        $(this).remove();
        location.reload();
      });
    }

    var boom = $(".lazer").collision(".missile");
    var bigBoom = $(".missile").collision(".lazer");
    if (boom.attr('class') === 'missile') {
      bigBoom.remove();
      boom.remove();
    }
      

    var missile = $(".invader").collision(".missile");
    var alien = $(".missile").collision(".invader");
    if (missile.attr('class') === 'missile') {
      window.score += 200;
      alien.remove();
      missile.remove();
    }
  }, 10);

  $("body").keydown(function(e) {
    if (e.keyCode == '39') { //right arrow
      if (player.posX + 80 > width + gamespaceOffset) {
        player.$node.animate({left: gamespaceOffset}, 0, "linear");
        player.posX = gamespaceOffset;
      } else {
        player.$node.animate({left: player.posX + 30}, 1, "linear");
        player.posX += 30;
      }
    } else if (e.keyCode == '37') { //left arrow
      if (player.posX - 30 <= gamespaceOffset) {
        player.$node.animate({left: gamespaceOffset + width - 50}, 1, "linear");
        player.posX = gamespaceOffset + width - 51;
      } else {
        player.$node.animate({left: player.posX - 30}, 1, "linear");
        player.posX -= 30;
      }
    }
    else if (e.keyCode == '32') { //spacebar
      console.log(window.side);
      player.fire(window.side);
      if (window.side === 'left') {
        window.side = 'right';
      } else {
        window.side = 'left';
      }
      console.log(window.side);
    }
  });

  setInterval(function(){
    var alien = new SpaceInvader(90, Math.abs(Math.random() *  width - 25) + gamespaceOffset);
    $('body').append(alien.$node);
  }, 250);


});

