//Chase Mouse

//Create an application with a circle on the screen. Have the circle follow the mouse at a speed of 3 pixels per frame. (To accomplish this, you will need to calculate which direction the mouse is in compared to the circle, and move in that direction. Check if the mouse is up, down, left, or right, and move the 3 pixels in the associated direction.)

//When the circle is within a distance of 7 or less towards the mouse, draw the circle in red. Otherwise, draw the circle in black. Use a function to calculate this distance.

let y = 0
let x = 0

//Calculate the direction the mouse is in compared to the circle

//Is the mouse above or below the circle?
function checkYDir() {
  
  // If y is greater than mouseY, the mouse is above the circle
  //Move the circle up by 3 pixels if the mouse is above the circle
  if (y > mouseY) {
    y = y - 3
    return y
  } 
  //If y is less than mouseY, the mouse is below the circle
  //Move the circle down by 3 pixels if the mouse is below the circle
  else if (y < mouseY) {
    y = y + 3
    return y
  }
  //If circle and mouse are on same y-level, do nothing
   else {
    return y
  }
}

//Is the mouse above or below the circle?
function checkXDir() {
  
  // If x is greater than mouseX, the mouse is to the left of the circle
  //Move the circle left by 3 pixels if the mouse is left of the circle
  if (x > mouseX) {
    x = x - 3
  return x} 
  //If x is less than mouseX, the mouse is to the right of the circle
  //Move the circle right by 3 pixels if the mouse is to the right of the circle
  else if (x < mouseX) {
    x = x + 3
    return x
  }
  //If circle and mouse are on same x-level, do nothing
   else {
    return x
  }
  }

//Function to check distance between mouse and circle
function checkDistance(x, y, mouseX, mouseY) {
  let d = dist(mouseX, mouseY, x, y);
  //If the distance is 7 or less, fill the circle with red; otherwise, fill black
  if (d <= 7) {
    fill("red")
  } else {
    fill("black")
  }
}

//Setup function
function setup() {
  createCanvas(600,600)
  let mouseX
  let mouseY
  let x
  let y
  draw()
}

//Define the draw function to call the distance and direction checks and draw the circle accordingly
function draw() {
  background("white")
  checkDistance(x, y, mouseX, mouseY)
  checkYDir(y, mouseY)
  checkXDir(x, mouseX)
  circle(x, y, 7)
}

//Side note: This one feels sloppy; How could I do this better?