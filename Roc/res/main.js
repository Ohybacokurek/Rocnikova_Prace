const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width  = 800;
canvas.height = 500;
/*var backgroundImage = new Image(); 
backgroundImage.src = '';*/



let x = 0;
let y = 0;
let xr = 0;
let xl = 0;
let yu = 0;
let yd = 0;


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += xr;
    x += xl;
    y += yu;
    y += yd;
    ctx.fillRect(x, y, 25, 25);
    ctx.fillStyle = "#e32012";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 25, 25);
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


//Barriers
function barriers(){
if (x >= canvas.width) {
    x = canvas.width;
  } else if (x < 0) {
    x = 0;
  } else if (y >= canvas.height) {
    y = canvas.height;
  } else if (y < 0) {
    y = 0;
  }
}


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