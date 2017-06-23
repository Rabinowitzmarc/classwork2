$("#on").click(function() {
        $("img").fadeOut();
      });

$("#off").click(function() {
    $("img").fadeIn("slow");
});

$(".test h1").dblclick(function() {
  $(".test h1").toggleClass("styleSwitch");

});

$(".append #ultest").click(function() {
  $("#ultest").append("<li>four</li>");
});

$(".hover").hover(function() {
  $(".hover").toggleClass("hovers");
});

$(".next h2").mouseleave(function() {
  $(".next h2").slideUp();
});

$(".nexttwo #Click").click(function() {
  $(".nexttwo #Click").fadeOut();

});

$(".nexttwo h3").hover(function() {
  $(".nexttwo h3").toggleClass("red");
});
