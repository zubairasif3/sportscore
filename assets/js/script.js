// preloader
$(".preloader").fadeTo(5000,1).fadeOut(1000);

// fade on scroll
$(document).on("scroll", function () {
  fadeupOnload();
})

function fadeupOnload(){
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".fadein")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
}

setTimeout(() => {
  fadeupOnload();
}, 6000);
