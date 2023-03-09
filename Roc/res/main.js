console.log("Main.js");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundImage = "Black_and_white_checkered_pattern.jpg";


let x = 0;
let y = 0;
let vxr = 0;
let vxl = 0;
let vyu = 0;
let vyd = 0;


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vxr;
    x += vxl;
    y += vyu;
    y += vyd;
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = "#e32012";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 50, 50);
   requestAnimationFrame(update);
}

update()


function gameArea(){
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(gameArea);
}

gameArea()