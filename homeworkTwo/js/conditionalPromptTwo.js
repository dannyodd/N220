/*2 - Puck Side

Canvas size: 400x300

Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). When the mouse is on the right half of the canvas, draw the circle in red. When the mouse is on the left side of the canvas, draw the circle in blue. */

function setup() {
    createCanvas(400,300);
  }
  
  function draw() {
    background(255);
    circle(mouseX, mouseY, 25);
    if (mouseX > 200) {
      fill("red");
    } else {
      fill("blue")
    }
  }