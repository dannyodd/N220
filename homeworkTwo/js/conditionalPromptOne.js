/*1- Counter

Create an application that outputs a number to the console every draw call of P5. This number should start at zero, and increase by one every frame. */
var i = 0;
function setup() {
  createCanvas(100,100);
  draw();
}
function draw() {
  i += 1
  console.log(i)
}


