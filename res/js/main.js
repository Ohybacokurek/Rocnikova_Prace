import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var counter = document.getElementById("number");

canvas.width  = 1000;
canvas.height = 500;
var backgroundImage = new Image(); 
backgroundImage.src = "./res/img/background.jpg";


const player = new Player(90, 240, canvas, "red", 20, 20);
const enemy = new Enemy(250, 190, 10, canvas, "blue", 0, 5, "down");

var deathsCount = 0;
let x = 0;
let y = 0;
let xr = 0;
let xl = 0;
let yu = 0;
let yd = 0;
let level1Enemy = []


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, 0, 0, 800, 500);
    safeZone();
   
    player.x += xr;
    player.x += xl;
    player.y += yu;
    player.y += yd;
    player.draw();

    level1Enemy.forEach(enemy => {
        enemy.draw();
        enemy.checkBarriers();
        //smer enemy
        if(enemy.direction == "up"){
            enemy.moveUp()
        }else{
            enemy.moveDown()
        }   
        
        //collisions
        if(player.x + player.width >= enemy.x - enemy.r 
            && player.x <= enemy.x + enemy.r 
            && player.y + player.height >= enemy.y - enemy.r 
            && player.y <= enemy.y + enemy.r){
                var temp = deathsCount
            deathsCount = deathsCount + 1
            counter.innerHTML = "Deaths: " + deathsCount.toString() 
            if(temp !== deathsCount){
                player.x = 90 
                player.y = 240
            }
    
            console.log("collision")
        }
    });    
    
    /*ctx.fillStyle = "#e32012";
    ctx.fillRect(x, y, 25, 25);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 25, 25);*/
    
    //Barriers
    if (player.x >= canvas.width - 26) {
    player.x = canvas.width -23;
  } if (player.x <= 0) {
    player.x = 3;
  } if (player.y >= canvas.height -26) {
    player.y = canvas.height -23;
  } if (player.y <= 0) {
    player.y = 3;
  }
    
     requestAnimationFrame(update);
}

update()



function level1(){
    level1Enemy.push(new Enemy( 300, 150, 10, canvas, "blue", 0, 5, "down"))
}


function safeZone(){
    ctx.fillStyle = "#8df792";
    ctx.fillRect(0, 0, 200, 1000);
    ctx.fillStyle = "#8df792";
    ctx.fillRect(1000 - 200, 0, 200, 1000);
}


function gameArea(){
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    /*context.drawImage(backgroundImage, 0, 0);
    context.fillRect(0, 0, canvas.width, canvas.height);*/
}

gameArea()


firstButton.onclick = () => {
    console.log("start button clicked")
    showGoBack()
    hideStartScreen()
    showGameScreen()
    showLevels()
    showDeaths()
    level1()
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
    hideLevels()
    hideDeaths()
    level1Enemy = [];
}

function hideStartScreen(){
    startMenu.style.display = "none";
}

function showStartScreen(){
    startMenu.style.display = "inline";
}

function showGameScreen(){
    canvas.style.display = "inline";
    ctx.fillStyle = "white";
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

function showLevels(){
    levels.style.display = "";
}

function hideLevels(){
    levels.style.display = "none";
}

function showDeaths(){
    deaths.style.display = "inline";
}

function hideDeaths(){
    deaths.style.display= "none";
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