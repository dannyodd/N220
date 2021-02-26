//Store stoplight colors in an array
stopLightColors = ["red", "yellow", "green"]

//Set up the canvas & call the drawStoplight function
function setup() {
  createCanvas(600,600)
  drawStoplight()
}

//Define the drawstoplight function to draw a 
//black rectangle to house the lights, and draw the
//lights by iterating through the array
function drawStoplight() {
  fill("black")
  rect(100,100, 100,300)
  for(var i = 0; i < 3; i++) {
    fill(stopLightColors[i])
    circle(150, 50+(100*(i+1)), 75)
  }
}