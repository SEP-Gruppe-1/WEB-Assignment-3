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






