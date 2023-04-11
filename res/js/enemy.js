class Enemy {
    constructor(x, y, r, canvas, fillColor, speedX, speedY, direction){
    this.x = x
    this.y = y
    this.direction = this.direction
    this.r = r
    this.canvas = canvas
    this.fillColor = fillColor
    this.speedY = speedY;
    this.speedX = speedX;
}
draw(){
    this.canvas.getContext("2d").beginPath()
    this.canvas.getContext("2d").fillStyle = this.fillColor
    this.canvas.getContext("2d").arc(this.x, this.y, this.r, 0, 7)
    this.canvas.getContext("2d").fill()
    this.canvas.getContext("2d").stroke()
    }
moveDown(){
    this.y = this.y + this.speedY;
}
moveUp(){
    this.y = this.y - this.speedY;
}
checkBarriers(){
    if(this.y >= this.canvas.height - 5){
        this.direction = "up" 
        
    }if(this.y <= 5){
        this.direction = "down"
    }
}

}
export{ Enemy }