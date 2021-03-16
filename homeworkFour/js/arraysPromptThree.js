/*3 - Click to drop

Build an application where, when a user clicks on the screen, a 'brick' is created at that x and y location, and falls down to the bottom of the screen at a speed of 5 pixels / frame. There can be multiple bricks in this application, so you will need to use two arrays and a loop to draw all of the bricks. */

//Declare global variables
var bricks = [];
var x;
var y;
var mouseX;
var mouseY

//Use mouseclicked function to set the starting location of a new brick, and store its x and y values to an array
function mouseClicked() {
  bricks.push(mouseX);
  bricks.push(mouseY);
  console.log(mouseX, mouseY)
  console.log(bricks)
}

//Set up the canvas
function setup() {
  createCanvas(300,300)
  draw()
  console.log(bricks)
}

//Define the draw function to;
//A: Draw bricks based on data stored in the array, redrawing the background and the updated bricks each time the function repeats
function draw() {
  background("white")
  for (let d = 0; d < bricks.length; d+=2) {
    var x = bricks[d];
    var y = bricks[d+1];
    strokeWeight(1);
    stroke("black");
    fill(red(161), green(61), blue(45));
    rect(x, y, 10, 5)
  }
//B: Write a loop to iterate through the array, updating the y-values of each item in the array to cause it to fall at a rate of 5 pixels per frame until they reach the bottom, at which point they will remain where they stopped
  for (var i = 0; i < bricks.length; i+=2) {
    if (bricks[i+1] < height) {
      bricks[i+1] = bricks[i+1] + 5
    } else {
      bricks[i+1] = height - 5 
    }
    
  }
}
