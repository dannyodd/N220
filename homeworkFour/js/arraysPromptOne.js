//1 - Neapolitan

//Create an array with strings for three different colors. //Looping through that array, draw a rectangle for each of //those colors to the screen horizontally, like neapolitan //ice cream.

//Set up the canvas
function setup() {
    createCanvas (600,600);
  }
  
  //Define the color array
  let colorArray = ["#fffcf8", "#ffc0cb", "#7e3f12"]
  
  //Establish iterable
  //Create loop which changes color and draws rectangle in sequence according to index of iterable "i"
  //Change colors;
  function draw() {
    for (let i = 0; i <= colorArray.length; i++) {
    fill(colorArray[i]);
    rect(i*200, 0, 200, 600);
  }
  }