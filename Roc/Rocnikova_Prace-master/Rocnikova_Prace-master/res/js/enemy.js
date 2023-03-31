class Enemy {
    constructor(x, y, r, canvas, fillColor){
    this.x = x
    this.y = y
    this.r = r
    this.canvas = canvas
    this.fillColor = fillColor

    
}
draw(){
    this.canvas.getContext("2d").beginPath()
    this.canvas.getContext("2d").fillStyle = this.fillColor
    this.canvas.getContext("2d").arc(this.x, this.y, this.r, 0, 7)
    this.canvas.getContext("2d").fill()
    this.canvas.getContext("2d").stroke()
    }
}
export{ Enemy }