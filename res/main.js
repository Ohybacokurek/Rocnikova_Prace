import { Player } from "./player.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



canvas.width  = 800;
canvas.height = 500;
var backgroundImage = new Image(); 
backgroundImage.src = "./res/img/background.jpg";


const player = new Player(250, 250, canvas, "red", 20, 20);

let x = 0;
let y = 0;
let xr = 0;
let xl = 0;
let yu = 0;
let yd = 0;


function update(){
   // ctx.clearRect(0, 0, canvas.width, canvas.height)
    safeZone();
   
    player.x += xr;
    player.x += xl;
    player.y += yu;
    player.y += yd;
    player.draw();
    /*ctx.fillStyle = "#e32012";
    ctx.fillRect(x, y, 25, 25);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 25, 25);*/
    
    //Barriers
    if (player.x >= canvas.width - 31) {
    player.x = canvas.width -27;
  } if (player.x <= 0) {
    player.x = 3;
  } if (player.y >= canvas.height -31) {
    player.y = canvas.height -27;
  } if (player.y <= 0) {
    player.y = 3;
  }

   requestAnimationFrame(update);
}

//update()


function safeZone(){
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 200, 800);
    ctx.fillStyle = "green";
    ctx.fillRect(800 - 200, 0, 200, 800);
}


function gameArea(){
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    /*context.drawImage(backgroundImage, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);*/
}

//gameArea()


firstButton.onclick = () => {
    console.log("start button clicked")
    showGoBack()
    hideStartScreen()
    showGameScreen()
}


secondButton.onclick = () => {
    console.log("About button clicked")
    hideStartScreen()
    showAboutText()
    showGoBack()
}


thirdButton.onclick = () => {
    console.log("Credit button clicked")
    showCredits()
    showGoBack()
    hideStartScreen()
}


goBack.onclick = () => {
    console.log("Getting back")
    showStartScreen()
    hideGameScreen()
    hideGoBack()
    hideAboutText()
    hideCredits()
}

function hideStartScreen(){
    startMenu.style.display = "none";
}

function showStartScreen(){
    startMenu.style.display = "inline";
}

function showGameScreen(){
    canvas.style.display = "inline";
    //ctx.fillStyle = "white";
    ctx.drawImage(backgroundImage, 0, 0);
}

function hideGameScreen(){
    canvas.style.display = "none";
}

function showGoBack(){
    goBack.style.display = "inline";

}

function hideGoBack(){
    goBack.style.display = "none";
}

function showAboutText(){
    aboutText.style.display = "inline";
}

function hideAboutText(){
    aboutText.style.display = "none";
}

function showCredits(){
    credits.style.display = "inline";
}

function hideCredits(){
    credits.style.display = "none";
}


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