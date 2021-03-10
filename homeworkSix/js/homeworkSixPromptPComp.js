/*6 - Personal Composition

Using the knowledge you've gained to date in this course, create a personal composition. This composition must include 
1 object to store a set of related variables. These object properties must be set and also used in the update function. */

/* This program is meant to draw four circle objects with their own starting y-positions, and a starting x-position of zero. The objects are stored in an array, and their x-positions are updated to be increased by a random number between 0 and 5, until one of the circles reaches the edge of the canvas. The animation should show these four circles moving across the screen from left to right, with the random number causing them to progress at unpredictable and inconsistent speed. Take bets on which of these racers will make it to the finish line first!*/

//Create the canvas
function setup() {
    createCanvas(1000,250)
  }
  
  //Define & set 4 racer objects and their attributes
  let racerA = {
    'xpos':0,
    'ypos':50
  }
  let racerB = {
    'xpos':0,
    'ypos':100
  }
  let racerC = {
    'xpos':0,
    'ypos':150
  }
  let racerD = {
    'xpos':0,
    'ypos':200
  }
  
  //Define the array to hold the objects for the draw function to loop through
  let raceArray = [racerA, racerB, racerC, racerD]
  
  //Console - Make sure the array & objects all check out
  console.log(raceArray)
  
  //Define the draw function
  function draw() {
    //Draw white background over previous frame
    background("white")
    //Create the for loop to count through the array as setup for main loop
    for (let i = 0; i < raceArray.length; i++) {
      //As long as none of the objects' xpos values in the array do not exceed the width of the canvas;
      //Increase the xpos value of each object in the array by a random number between 0 and 5, then draw the corresponding circles
      if (raceArray[i].xpos < 1000){
        raceArray[i].xpos += random(0,5)
        fill("black")
        circle(raceArray[i].xpos, raceArray[i].ypos, 25)
        //to check outputs: console.log(raceArray[i].xpos)
      } else {
        //Stop the draw function as soon as one of the xpos values exceeds the canvas edge
        noLoop()
      }
    } 
  }
  
  
  