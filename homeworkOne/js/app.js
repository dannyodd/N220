let x = 1
let c = 0
function setup() {
    createCanvas(800,600);
    background(0,0,0)
    strokeWeight(10);
    fill(252,175,9)
    circle(400,300,200);
    triangle(220,380,400,105,580,380);
    rect(326,230,148,148);
    fill(212,1,1);
    circle(400,304,74);
}

function draw() {
    fill(c);
    circle(400,304,x)
}

function mousePressed() {
    if (x < 60) {
        x = x + 1
        c = c + 2
    } else {
        x = 1
        c = 0
    }
}




