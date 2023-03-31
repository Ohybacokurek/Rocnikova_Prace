class Player {
    constructor(x, y, canvas, fillColor, height, width) {
    this.x = x
    this.y = y
    this.canvas = canvas
    this.height = 20
    this.fillColor = fillColor
    this.height = height
    this.width = width 
    }
    draw(){
    this.canvas.getContext("2d").fillStyle = this.fillColor
    this.canvas.getContext("2d").fillRect(this.x, this.y, this.width, this.height)
    this.canvas.getContext("2d").strokeStyle = "black"
    this.canvas.getContext("2d").lineWidth = 6
    this.canvas.getContext("2d").strokeRect(this.x, this.y, this.width, this.height)
    }
}
    export { Player }
    
    