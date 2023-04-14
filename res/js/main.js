import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var counter = document.getElementById("number");
var levelText = document.getElementById("levelPLus")

canvas.width = 1000;
canvas.height = 500;
var backgroundImage = new Image();
backgroundImage.src = "./res/img/background.jpg";


const player = new Player(90, 240, canvas, "red", 20, 20);

var deathsCount = 0;
let x = 0;
let y = 0;
let xr = 0;
let xl = 0;
let yu = 0;
let yd = 0;
let levelEnemy = []
let currentLevel = 1;



function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, 200, 0, 600, 500);
    safeZone();

    player.x += xr;
    player.x += xl;
    player.y += yu;
    player.y += yd;
    player.draw();

    levelEnemy.forEach(enemy => {
        enemy.draw();
        enemy.checkBarriers();



        //direction enemy level1
        if (enemy.direction == "down") {
            enemy.moveDown()
        } else {
            enemy.moveUp()
        } if (enemy.direction == "right") {
            enemy.moveRight()
        } else {
            enemy.moveLeft()
        }

        //collisions
        if (player.x + player.width >= enemy.x - enemy.r
            && player.x <= enemy.x + enemy.r
            && player.y + player.height >= enemy.y - enemy.r
            && player.y <= enemy.y + enemy.r) {
            var temp = deathsCount
            deathsCount = deathsCount + 1
            counter.innerHTML = "Deaths: " + deathsCount.toString()
            if (temp !== deathsCount) {
                player.x = 90
                player.y = 240
            }

            console.log("collision")
        }
    });

    /*level2Enemy.forEach(enemy => {
        enemy.draw();
        enemy.checkBarriers(); 
    
        //direction enemy level2
        if(enemy.direction == "right"){
            enemy.moveRight()
        }else{
            enemy.moveLeft()
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
    })*/


    //Barriers
    if (player.x >= canvas.width - 26) {
        player.x = canvas.width - 23;
    } if (player.x <= 0) {
        player.x = 3;
    } if (player.y >= canvas.height - 26) {
        player.y = canvas.height - 23;
    } if (player.y <= 0) {
        player.y = 3;
    }


    //další level, konec hry
    if (player.x + 20 >= canvas.width - 200) {
        if (currentLevel == 1) {
            levelEnemy = level2()
            player.x = 90
            player.y = 240
            currentLevel++;
            levelText.innerHTML = "Level: " + currentLevel.toString()
        }
        else if (currentLevel == 2) {
            hideLevels();
            hideLevelText();
            hideDeaths();
            showGameOver();
            currentLevel = 1;
            player.x = 90
            player.y = 240
        }
    }



    requestAnimationFrame(update);
}

update()



function level1() {
    var level1Enemy = [];
    level1Enemy.push(new Enemy(220, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(260, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(300, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(340, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(380, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(420, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(460, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(500, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(540, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(580, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(620, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(660, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(700, 10, 10, canvas, "blue", 0, 10, "down"))
    level1Enemy.push(new Enemy(740, 490, 10, canvas, "blue", 0, 10, "up"))
    level1Enemy.push(new Enemy(780, 10, 10, canvas, "blue", 0, 10, "down"))
    return level1Enemy;
}

function level2() {
    var level2Enemy = [];
    level2Enemy.push(new Enemy(215, 10, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 50, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 90, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 130, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 170, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 210, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 250, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 290, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 330, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 370, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 410, 10, canvas, "blue", 10, 0, "right"))
    level2Enemy.push(new Enemy(785, 450, 10, canvas, "blue", 10, 0, "left"))
    level2Enemy.push(new Enemy(215, 490, 10, canvas, "blue", 10, 0, "right"))
    return level2Enemy;
}


function safeZone() {
    ctx.fillStyle = "#8df792";
    ctx.fillRect(0, 0, 200, 1000);
    ctx.fillStyle = "#8df792";
    ctx.fillRect(1000 - 200, 0, 200, 1000);
}


function gameArea() {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

gameArea()


firstButton.onclick = () => {
    console.log("start button clicked")
    showGoBack()
    hideStartScreen()
    showGameScreen()
    showLevels()
    showDeaths()
    levelEnemy = level1()
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
    hideGameScreen()
    hideGoBack()
    hideAboutText()
    hideCredits()
    hideLevelText()
    hideDeaths()
    hideGameOver()
    showStartScreen()
    currentLevel = 1;
    levelText.innerHTML = "Level: " + currentLevel.toString()
    levelEnemy = [];
    console.log("Getting back")
}

function hideStartScreen() {
    startMenu.style.display = "none";
}

function showStartScreen() {
    startMenu.style.display = "inline";
}

function showGameScreen() {
    canvas.style.display = "inline";
    ctx.fillStyle = "white";
}

function hideGameScreen() {
    canvas.style.display = "none";
}

function showGoBack() {
    goBack.style.display = "inline";

}

function hideGoBack() {
    goBack.style.display = "none";
}

function showAboutText() {
    aboutText.style.display = "inline";
}

function hideAboutText() {
    aboutText.style.display = "none";
}

function showCredits() {
    credits.style.display = "inline";
}

function hideCredits() {
    credits.style.display = "none";
}

function showLevels() {
    levels.style.display = "";
}

function hideLevelText(){
    levels.style.display = "none"
}

function hideLevels() {
    canvas.style.display = "none";
}

function showDeaths() {
    deaths.style.display = "inline";
}

function hideDeaths() {
    deaths.style.display = "none";
}

function showGameOver() {
    gameOver.style.display = "inline";
}

function hideGameOver() {
    gameOver.style.display = "none";
}

addEventListener("keydown", function (e) {
    if (e.code == "KeyD") xr = 3;
    if (e.code == "KeyA") xl = -3;
    if (e.code == "KeyW") yu = -3;
    if (e.code == "KeyS") yd = 3;
})

addEventListener("keyup", function (e) {
    if (e.code == "KeyD") xr = 0;
    if (e.code == "KeyA") xl = 0;
    if (e.code == "KeyW") yu = 0;
    if (e.code == "KeyS") yd = 0;
})