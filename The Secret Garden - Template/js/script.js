//MAKE THE MAGIC HAPPEN

$(document).ready(function(){
    let rotation = 0;
    let toggle = true;

    $("#wateringcan").on("click", function (){
        if (toggle){
            rotation -= 90;
        }
        else{
            rotation += 90;
        }
        $(this).css("transform", `rotate(${rotation}deg)`);
        toggle = !toggle;
    })
})