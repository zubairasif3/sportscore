// preloader
$(".preloader").fadeTo(2000,1).fadeOut(1000);

// fade on scroll
$(document).on("scroll", function () {
  fadeupOnload();
})

function fadeupOnload(){
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height() + 130;
  var tags = $(".fadein");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
}

setTimeout(() => {
  fadeupOnload();
}, 3000);

setInterval(() => {
  $(".section-div .data-item1").removeClass("visible");
  setTimeout(() => {
    $(".section-div .data-item1").toggleClass("inactive");
  }, 1500);
  setTimeout(() => {
    $(".section-div .data-item1").addClass("visible");
  }, 2000);
}, 15000);

setInterval(() => {
  $(".section-div .data-item2").removeClass("visible");
  setTimeout(() => {
    $(".section-div .data-item2").toggleClass("inactive");
  }, 1500);
  setTimeout(() => {
    $(".section-div .data-item2").addClass("visible");
  }, 2000);
}, 20000);

setInterval(() => {
  $(".section-div .data-item3").removeClass("visible");
  setTimeout(() => {
    $(".section-div .data-item3").toggleClass("inactive");
  }, 1500);
  setTimeout(() => {
    $(".section-div .data-item3").addClass("visible");
  }, 2000);
}, 25000);
