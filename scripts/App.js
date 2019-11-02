
function setup(){
    createCanvas(500, 500);
    g = new Game();
    g.setBoard();
}

var g;

function draw(){
    background('#000000');
    g.show();
    
    if(mouseIsPressed) {
        g.mouseEvent(mouseButton == 'left');
    }
}


function keyPressed() {
    if(key == ' ') {
        g.run = !g.run;
        if(g.run)
            g.tick();
    }
    if(key == 'e') {
        g.tick();
    }
}
