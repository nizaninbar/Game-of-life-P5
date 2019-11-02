class Cell{
    constructor(x ,y , cellSize){
        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
        this.isAlive = false;
    }

    show(){
        noStroke();
        if(this.isAlive) {
            fill('#ffffff');
            rect(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
    }

    changeState() {
        this.isAlive = !this.isAlive;
    }
}