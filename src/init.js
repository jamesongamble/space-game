$(document).ready(function(){
  $('.last_score').append(localStorage["score"]);
  window.velocity;
  window.move = function() {
    if (player.posX + 70 > width + gamespaceOffset && window.velocity === 1) {
      player.$node.animate({left: gamespaceOffset}, 0, "linear");
      player.posX = gamespaceOffset;
    } else if (window.velocity === 1) {
      player.$node.animate({left: player.posX + 5}, 1, "linear");
      player.posX += 5;
    } else if (player.posX - 5 <= gamespaceOffset && window.velocity === -1) {
      player.$node.animate({left: gamespaceOffset + width - 50}, 1, "linear");
      player.posX = gamespaceOffset + width - 51;
    } else if (window.velocity === -1) {
      player.$node.animate({left: player.posX - 5}, 1, "linear");
      player.posX -= 5;
    }
  };

  window.move = _.throttle(window.move, 20);

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
        if (score > window.localStorage["score"]) {
          localStorage["score"] = window.score; 
        }
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

  $("body").keydown(function(event) {
    if (event.keyCode == '39') { //right arrow
      window.velocity = 1;
      window.mover = setInterval(window.move, 20);
    } else if (event.keyCode == '37') { //left arrow
      window.velocity = -1;
      window.mover = setInterval(window.move, 20);
    } else if (event.keyCode == '32') { //spacebar
      player.fire(window.side);
      if (window.side === 'left') {
        window.side = 'right';
      } else {
        window.side = 'left';
      }
    }
  });

  $('body').keyup(function(event) {
    if (event.keyCode == '39') { //right arrow
      window.velocity = 0;
      clearInterval(window.mover);
    } else if (event.keyCode == '37') { //left arrow
      window.velocity = 0;
      clearInterval(window.mover);
    }
  });

  setInterval(function(){
    var alien = new SpaceInvader(90, Math.abs(Math.random() *  width - 25) + gamespaceOffset);
    $('body').append(alien.$node);
  }, 250);


});

