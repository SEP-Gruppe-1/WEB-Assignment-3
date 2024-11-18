//MAKE THE MAGIC HAPPEN

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
})

function addListeners() {
    document.getElementById('wateringcan').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown() {
    window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('wateringcan');
    div.style.position = 'absolute';
    div.style.top = e.clientY + 'px';
    div.style.left = e.clientX + 'px';
}


addListeners();