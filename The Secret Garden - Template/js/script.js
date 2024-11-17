$(document).ready(function(){
  $("#watercan").click(function() {
      $(".waterdrop").show();
      startDropping();
  });

  function startDropping() {
      $(".waterdrop").each(function(index, drop) {
          setTimeout(function() {
              animateDrop($(drop));
          }, index * 300);
      });
  }

  function animateDrop($drop) {
      let startX = 45 + Math.random() * 10; 
      let startY = 80; 
      $drop.css({ left: startX + "px", top: startY + "px" });

    
      $drop.animate({ top: "200px" }, 1000, function() {
         
          animateDrop($drop);
      });
  }
});






