//Authored by: Daniel Todd on 2/11/2021
//For Homework 3, Part 1

function setup() {
    createCanvas(3000,125);
    background(255,255,255);
    
    for (let i=0; i<25; i++){
      //If iterand divisible by 3 and 5, draw a blue square (0,0,255)
      if (((i+1)%3 == 0) && ((i+1)%5 == 0)) {
        fill(0,0,255);
        square((((i+1)*100)-35), 10, 75);
      }
       //Else if iterand divisible by 5, draw a green square
      else if ((i+1)%5 == 0) {
        fill(0,255,0);
        square((((i+1)*100)-35), 10, 75);
      }
      //Else if iterand divisible by 3, draw a purple circle (128,0,128)
      else if((i+1)%3 == 0) {
        fill(128,0,128);
        circle(((i+1)*100),50,40)
      }
      //Else draw a black circle
      else {
        fill(0,0,0);
        circle((i+1)*100, 50, 40)
      }  
    }
}
