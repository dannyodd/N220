//2 - Dripping water

//Build an application that, every ten frames, draws a circle at the top center of the screen. This circle should move down the screen at 5 pixels / frame. Done properly, there will be multiple circles on the screen at once. Thus, you will need to use an array to store, at a minimum, the Y location of each circle.

//Declare variables - A list to store y-locations of droplets and a value for the current y-locations of droplets in the array
var droplets = [];
var y;


//Setup canvas
function setup() {
  createCanvas(600,600);
  }


//Draw a circle that starts at startY = 0 and drops down the screen at a rate of 5 px/frame
function draw() {
  background(255);
  if (frameCount % 10 == 0){
    droplets.push(0)}
  for (let i = 0; i < droplets.length; i++) {
    y = droplets[i];
    circle(300, y, 25);
    droplets[i] = droplets[i] + 5;
  }

}