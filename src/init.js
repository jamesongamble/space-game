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
    }, 300);
  });

  $("#no").on("click", function(event) {
    setTimeout(function() {
      $("#no").trigger("click");
    }, 3000);
  });

  $("go").on("runIt", function(event) {

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

  });



});

