/*1 - Data-driven display

Make an object with all the properties for a graphic on the screen - width, height, color, position. 
In your create or draw function draw that object using the data in your object.*/

//Define the object key:value pairs
let object = {
    width: 400,
    height: 600,
    color: "blue",
    xposition:100,
    yposition:100
  };
  
  //Check that the properties of the object read correctly
  console.log(object)
  
  function setup(){
    createCanvas(800,800)
  }
  
  //Draw a rectangle using the object properties as variables
  function draw(){
    fill(object.color)
    rect(object.xposition,object.yposition,object.width,object.height)
  }