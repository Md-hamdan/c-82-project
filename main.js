var mouseEvent="empty"
var last_position_of_x,last_position_of_y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="green";
width_of_line=5;

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e) {
    mouseEvent="mousedown"
} 
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e) {
    mouseEvent="mouseup"
} 
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e) {
    mouseEvent="mouseleave"
} 
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=5
       ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,20,0,Math.PI*2)
        ctx.stroke()
    }

    last_position_of_x=current_position_of_mouse_x
    last_position_of_y=current_position_of_mouse_y
} 
