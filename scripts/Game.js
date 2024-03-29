class Game{
    constructor(){
        this.cellSize = 25;
        this.board = [];
        this.run = false;
        this.speed = 140;
        this.aliveStates = [2, 3];
        this.bornStates = [3];
    }
    
    setBoard(){

        for(let y = 0; y < height/this.cellSize ; y++){
            this.board.push([]);
            for (let x = 0; x < width/this.cellSize; x++) {
                this.board[y].push(new Cell(x, y, this.cellSize));
            }
        }
    }

    show(){
        this.board.forEach(line => {
            line.forEach(cell => {
                cell.show();
            });
        });
    }

    mouseEvent(isLeft) {
        let cellX = Math.floor(mouseX/this.cellSize);
        let cellY = Math.floor(mouseY/this.cellSize);
        if (this.board[cellY] && this.board[cellY][cellX])
            this.board[cellY][cellX].isAlive = !isLeft;
    }

    tick() {
        let newBoard = [];
        this.board.forEach(line => {
            newBoard.push([]);
            line.forEach(cell => {
                let newCell = new Cell(cell.x, cell.y, this.cellSize);
                
                newCell.isAlive = this.fateLogic(cell);
                newBoard[cell.y].push(newCell);
            });
        });

        this.board = newBoard;
        if(this.run)
            setTimeout(this.tick.bind(this), this.speed);
    }

    fateLogic(cell) {
        let liveNeighbors = 0;
        for (let y = cell.y-1.; y <= cell.y+1; y++) {
            for (let x = cell.x-1.; x <= cell.x+1; x++) {
                if (y == cell.y && x == cell.x)
                    continue;
                if(y<0 || y>=this.board.length || x<0 || x>=this.board[cell.y].length)
                    continue;
                if (this.board[y][x].isAlive)
                    liveNeighbors++;
            }
        }

        if(cell.isAlive) {
            let res = false;
            this.aliveStates.forEach(number => {
               res = res || liveNeighbors == number;
            });
            return res;
        }
        else {
            let res = false;
            this.bornStates.forEach(number => {
               res = res || liveNeighbors == number;
            });
            return res;
        }
    }
}