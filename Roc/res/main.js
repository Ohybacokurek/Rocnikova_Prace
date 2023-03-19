const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/*document.getElementById("firstButton").addEventListener("click");*/

canvas.width  = 500;
canvas.height = 500;
/*var backgroundImage = new Image(); 
backgroundImage.src = '';*/



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
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    /*context.drawImage(backgroundImage, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);*/
    requestAnimationFrame(gameArea);
}

gameArea()






secondButton.onclick = () => {
    document.getElementById("mess").innerText;
}


/*function startGame() {
    document.getElementById("startMenu").innerHTML = ;
  }*/
