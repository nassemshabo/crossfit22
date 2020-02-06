$(document).ready(function() {
  // fadeIn rigester-box
  $(".btn-show").click(function() {
    $(".box-dis").fadeIn();
  });
  $(".close").click(function() {
    $(".box-dis").fadeOut();
  });

  // scrollTop bottem
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if (top > 50) {
      $(".scrollTop").fadeIn(500);
    } else {
      $(".scrollTop").fadeOut(500);
    }
  });
  // onclick scrollTop = 0
  $(".scrollTop").on("click", function() {
    $("html").animate({ scrollTop: 0 }, "slow");
  });

  //slider menu
  $(".menu").click(function() {
    $(".items").animate(
      {
        right: "0"
      },
      500,
      function() {
        $(".close-menu").click(function() {
          $(".items").animate(
            {
              right: "-400px"
            },
            500
          );
        });
      }
    );
  });

  // scroll animations
  //header
});
