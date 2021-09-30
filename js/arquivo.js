$(document).ready(function(){
   $(".carousel-item").each(function() {
      var src = $(this).find("img").attr("src");
      $(this)
      .css("background-image","url("+src+")")
      .find("img")
      .remove();
   });
});