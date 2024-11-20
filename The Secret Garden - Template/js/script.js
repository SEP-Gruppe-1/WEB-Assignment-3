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


// Putter de tre æbler i træet når siden indlæses
$(document).ready(function(){
    let tree = $('#tree');
    let treeOffset = tree.offset();
    let treeWidth = tree.width();
    let treeHeight = tree.height();

    function randomizePosition(){
        let randomX = Math.floor(Math.random() * treeWidth);
        let randomY = Math.floor(Math.random() * (treeHeight/2));

        return {
            left: randomX + treeOffset.left,
            top: randomY + (treeOffset.top / 0.75)
        };
    }

    $('#apple1, #apple2, #apple3').each(function() {
        let position = randomizePosition();
        $(this).css({
            position: 'absolute',
            left: position.left,
            top: position.top
        });
    });
});

$(document).ready(function() {
    const $image = $('#movingImage');
    let speed = 1000;
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function moveRandomly() {
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const imageWidth = $('#butterfly').width();
        const imageHeight = $('#butterfly').height();

        const newLeft = Math.random() * (windowWidth - imageWidth);
        const newTop = Math.random() * (windowHeight - imageHeight);

        $('#butterfly').animate({
            left: newLeft,
            top: newTop
        }, speed,
         moveRandomly
        ); 
    }



$(document).on('mousemove', function (event) {
    const imageOffset = $image.offset();
    const imageCenterX = imageOffset.left + $image.width() / 2;
    const imageCenterY = imageOffset.top + $image.height() / 2;

    const distance = calculateDistance(event.pageX, event.pageY, imageCenterX, imageCenterY);
    if (distance < 200) {
        speed = 300; 
    } else if (distance < 400) {
        speed = 600; 
    } else {
        speed = 1000; 
    }
});

moveRandomly();
});



