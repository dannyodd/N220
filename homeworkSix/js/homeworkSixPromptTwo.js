/*2 - Animated Object

Create an object with properties for the x, y, and size of a circle. In the draw function, add 1 to 
one or more of these properties, and then draw the circle described by the object to the screen.*/

//Step 1: Create and define the circle object with x, y, and size properties
let myCircle = {
    x:0,
    y:0,
    size:10
  };
  
  //Setup & create the canvas
  function setup() { 
    createCanvas(500,500)
  };
  
  //Create draw function
  function draw() {
    //Add 1 to the x, y, and size properties of the myCircle object at the start of each iteration
    myCircle.x++
    myCircle.y++
    myCircle.size++
    //Draw the background (overwrites the circle drawn on the previous iteration)
    background("white")
    //Draw the circle according to object values
    circle(myCircle.x, myCircle.y, myCircle.size)
    //Reset the x, y, and size values when the center of the circle object hits the end of the canvas (stops circle from expanding infinitely)
    if (myCircle.x >= 500) {
      myCircle.x = 0
      myCircle.y = 0
      myCircle.size = 10
    };
  };
  