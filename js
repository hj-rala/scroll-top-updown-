var goBtn = $(".goto-top");
  goBtn.on("click", function () {
    $(this).blur(function () {
      $("#skipnavi a").focus();
    });
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

  var lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      goBtn.addClass("show");
    } else {
      goBtn.removeClass("show");
    }
    lastScrollTop = st;
  });
