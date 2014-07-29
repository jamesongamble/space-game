$(document).ready(function(){
  window.dancers = [];

  $(".lineUpButton").on("click", function(event) {
    $("img").each(function() {
      var y = Math.random() * $("body").height();
      $(this).css({top: y, left: 0});
    });
  });

  $("#go").on("click", function(event) {
    setTimeout(function() {
      $("#go").trigger("click");
    }, 100);
  });

  $("body").keydown(function(e) {
    var offset = 100;
    if (e.keyCode === '39') {
      var pos = $(".spaceship").position();
      if (pos.left + offset <= $('body').width()) {
        $(".spaceship").animate({left: pos.left + offset}, 50, "linear");
      }
    } else if (e.keyCode === '37') {
      var pos = $(".spaceship").position();
      if (pos.left + offset > 0) {
        $(".spaceship").animate({left: pos.left - offset}, 50, "linear");
      }
    } else if (e.keyCode === '32') {
      var posX = $(".spaceship").position().left + 25;
      var posY = $(".spaceship").position().top;
      var missile = new Star(posY, posX, 1);
      setInterval(function() {
        var breakable = $(".spaceship").collision( ".meteor" );
        if (breakable.attr('class') === 'meteor') {
          $('.missile').attr('src', 'src/boom.svg').fadeOut(200, function() {
            $(this).remove();
          });
        } 
      }, 1);
    }
  });

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    if(dancerMakerFunctionName === "SpaceShip") {
      setInterval(function() {
        var breakable = $(".spaceship").collision( ".meteor" );
        if (breakable.attr('class') === 'meteor') {
          $('.spaceship').attr('src', 'src/boom.svg').fadeOut(200, function() {
            $(this).remove();
          });
          location.reload();
        } 
      }, 1);
    }

  });

  $('#no').click();
  //$('#go').click();

});

