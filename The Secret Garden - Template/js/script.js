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
    let isWatering = false;
    let animationIds = [];

    
    $("#watercan").click(function() {
        if (isWatering) {
            stopWatering();
        } else {
            startWatering();
        }
    });

    function startWatering() {
        isWatering = true; 
        $(".waterdrop").show(); 
        $(".waterdrop").each(function(index, drop) {
            animationIds[index] = animateDrop($(drop));
        });
    }

    function stopWatering() {
        isWatering = false; 
        $(".waterdrop").stop(true, false).hide(); 
        animationIds = []; 
    }

    function animateDrop($drop) {
        if (!isWatering) return; 
        let startX = 600 + Math.random() * 10; 
        let startY = 500; 
        $drop.css({ left: startX + "px", top: startY + "px" });

        return $drop.animate({ top: "600px" }, 1000, function() {
            if (isWatering) animateDrop($drop);
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




