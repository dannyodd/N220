//Set up canvas & main function
function setup () {
    createCanvas(1500,1500);
    background(255,255,255);
    strokeWeight(1);
    noFill();
  
    //Set iterand & condition to draw concentric circles
    for (let i=1;i<100; i++) {
      circle(800,800,(i*5));
    }
  }