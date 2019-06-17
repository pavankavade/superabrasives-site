
//fix height
$(document).ready(function () {
  var fixHeight = function () {
    $(".navbar-nav").css("max-height", document.documentElement.clientHeight - 150);
  }
  fixHeight();
  $(window).resize(function () {
    fixHeight();
  });
  $(".navbar .navbar-toggler").on("click", function () {
    fixHeight();
  });

  //open sidebar
  $("dropdown").on("click", function () {
    $(".dropdown, .dropdown-menu").toggleClass("show");


  });

  $(".navbar-toggler, .overlay").on("click", function () {
    $(".mobileMenu, .overlay").toggleClass("open");
  });

  $("#arrow ").on("click", function () {
    $("#arrow").toggleClass("fa-caret-up");
    $("#arrow").toggleClass("fa-caret-down");
  });

});



//hide ISO text
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("iso").style.top = "0";
  } else {
    document.getElementById("iso").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


$(function () {
  $('#ham').click(function () {
    $('#content').css('background', '-=10px');
  });
});