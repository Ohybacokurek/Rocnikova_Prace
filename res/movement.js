addEventListener("keydown", function(e){
    if (e.code == "KeyD") xr = 5;
    if (e.code == "KeyA") xl = -5;
    if (e.code == "KeyW") yu = -5;
    if (e.code == "KeyS") yd = 5;
})

addEventListener("keyup", function(e){
    if (e.code == "KeyD") xr = 0;
    if (e.code == "KeyA") xl = 0;
    if (e.code == "KeyW") yu = 0;
    if (e.code == "KeyS") yd = 0;
})