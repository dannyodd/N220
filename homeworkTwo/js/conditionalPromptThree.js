/* 3 - World Wrap
Create a canvas 800px x 600 px.

Make an application that starts drawing a ball on the left hand of the screen - make it move to the right 5 pixels per frame.

Write the code so that when the circle reaches 800 pixels to the right, move the circle to the far left of the screen. */
var x = 0;

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  circle(x, 300, 25);
  if (x < 800) {
    x = x + 5;
  } else {
    x = 0
  }
}