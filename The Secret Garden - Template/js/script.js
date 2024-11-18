$(document).ready(function(){
    let rotation = 0;
    let toggle = true;

    $("#wateringcan").on("click", function (){
        if (toggle){
            rotation -= 45;
        }
        else{
            rotation += 45;
        }
        $(this).css("transform", `rotate(${rotation}deg)`);
        toggle = !toggle;
    })
});

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

// Sommerfulg næt flip
$(document).ready(function () {
    let lastMouseX = 0;
    let isFlipped = false;

    $("body").mousemove(function (e) {
        const currentMouseX = e.pageX;
        if (currentMouseX > lastMouseX && isFlipped) {
            $("#net").css("transform", "scaleX(-1)");
            isFlipped = false;
        } else if (currentMouseX < lastMouseX && !isFlipped) {
            $("#net").css("transform", "scaleX(1)");
            isFlipped = true;
        }
        lastMouseX = currentMouseX;
    });
});

// Sommerfulg net mus traking 
$(document).ready(function(){
    $(document).mousemove(function(event){
        let mouseX = event.pageX;
        let mouseY = event.pageY;
  
        $("#net").css({
            left: mouseX - 25 + "px",
            top: mouseY - 25 + "px"
        });
    });
  });
