//Create a personal piece of interactive art that uses at least one function in the interaction code. This function should take at last one argument, and optionally may return one value. Ensure that your code is commented to describe why pieces of code exist in your composition.

//This program is meant to work as a kind of "ant farm." The user clicks on any space within the canvas to create a new ant. The storeAnt function then stores the current mouse coordinates as the location of the ant. The omnomnom function takes those coordinate values from the ants array, then modifies them by adding a random number between -1 and 1 to create movement. As the ants move about the canvas, their black stroke leaves a trail on the canvas as if they are tunneling or eating through the canvas.


//Create a function to store new ant coordinates into an array
function storeAnt(mouseX, mouseY, array) {
    array.push(mouseX);
    array.push(mouseY);
  }

//declare global variables
var x;
var y;
var ants = [];

//Use mouseClicked() function to call the storeAnt() function when the user clicks a location on the canvas
function mouseClicked() {
  storeAnt(mouseX, mouseY, ants)
}

//This function iterates through the ants array and modifies the coordinates for each ant to create random motion
function omnomnom(x, y, ants) {
  for (var i = 0; i < ants.length; i+=2) {
    ants[i] = ants[i] + random(-1,1);
    ants[i+1] = ants[i+1] + random(-1,1);
  }
}

//Setup function + call draw function
function setup() {
  createCanvas(600,600)
  draw()
}

//This draw function iterates through the ants array, drawing the ants as they are created, and as they are modified by the omnomnom function
function draw() {
  for (var i = 0; i < ants.length; i+=2) {
    var x = ants[i];
    var y = ants[i+1];
    strokeWeight(2);
    stroke("black");
    fill("red");
    circle(x, y, 15);
    circle(x+5, y, 5);
    circle(x-5, y, 5);
  }
  omnomnom(x, y, ants)
}