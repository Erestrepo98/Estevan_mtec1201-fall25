/*
///////////////////////////////
/////// Anothers Image ///////
//// By Estevan Restrepo ////
////////////////////////////

I enjoy table games alot so I decided to my first Short Study
to be used to make a game I enjoy well personally I am more of
a chess person but this is the best I can do with what ive got.
*/

let r,g,b;

let triXL = 0;
let triXR = 0;
let circlegrow = 0;

let stop = 0;
let title = 0;

let currentTime = 0;
let Timer = 4000;
let savedTime = 0;

function preload() 
{
  Gotham = loadImage("images/Gotham.jpg")
  Hikaru = loadImage("images/Hikaru.jpg")

}

function setup() {
  createCanvas(1000, 750);
  imageMode(CENTER)
  textAlign(CENTER)
  textSize(100)
}




function draw() {

  background(r ,g ,b );


  // To stop the shapes from moving
  if (!stop)
  {
    triXL = triXL + 2
    triXR = triXR - 2
    circlegrow = circlegrow - 4
  }

  fill(255,0,255)
  for(let lineX = mouseX; lineX<=width ; lineX=lineX+40){
    line(lineX,200)
  }

  // Colors of the board and its spots
  fill(150,75,0);
  rect(250,150,520,520);

  strokeWeight(1);
  fill(196,164,132);
  
  for(let rectY = 0; rectY<=3; rectY = rectY+1){
    for(let rectX = 0; rectX<=3; rectX = rectX+1)
    rect(rectX*120+270,rectY*120+170,60,60)
  }

   for(let rectY = 0; rectY<=3; rectY = rectY+1){
    for(let rectX = 0; rectX<=3; rectX = rectX+1)
    rect(rectX*120+330,rectY*120+230,60,60)
  }


  /// SPLIT for the other colors


  fill(191,111,20);


  for(let rectY = 0; rectY<=3; rectY = rectY+1){
    for(let rectX = 0; rectX<=3; rectX = rectX+1)
    rect(rectX*120+270,rectY*120+230,60,60)
  }  


  for(let rectY = 0; rectY<=3; rectY = rectY+1){
    for(let rectX = 0; rectX<=3; rectX = rectX+1)
    rect(rectX*120+330,rectY*120+170,60,60)
  }  


  /* This is to be able to change the color of the circles
  by switching the mouses position across the canvas.
  */

  fill(mouseX/4,mouseY/4,100);
  strokeWeight(5);
  stroke(140,144,140);

  for(let circleX = 0; circleX<=3; circleX=circleX+1){
    for(let circleY = 0; circleY<=1; circleY=circleY+1)
    circle(circleX*120+360,circleY*120+200,circlegrow + 40)
  }

  for(let circleX = 0; circleX<=3; circleX=circleX+1){
    circle(circleX*120+300,260,circlegrow + 40)
  }

  /* This is to be able to change the color of the circles
  by switching the mouses position across the canvas.
  */

  fill(100,mouseX/4,mouseY/4);

  for(let circleX = 0; circleX<=3; circleX=circleX+1){
    for(let circleY = 0; circleY<=1; circleY=circleY+1)
    circle(circleX*120+300,circleY*120+500,circlegrow + 40)
  }

  for(let circleX = 0; circleX<=3; circleX=circleX+1){
    circle(circleX*120+360,560,circlegrow + 40)
  }

  // Allow for circles to break boundaries
  circlegrow = circlegrow + 4;

  strokeWeight(2);
  stroke(249,0,0);
  fill(254,138,232);

  // Allow triangles to go in opposite directions

  for(let triX= 0; triX<=3; triX=triX+1){
    for(let triY=0; triY<=1; triY=triY+1)
    triangle(triXL+350+triX*120 ,triY*120+190 , triXL+370+triX*120, triY*120+190, triXL+360+triX*120, triY*120+210)
  }

  for(let triX= 0; triX<=3; triX=triX+1){
    triangle(triXR+290+triX*120,250,triXR+310+triX*120,250,triXR+300+triX*120,270)
  }

  stroke(21,31,86);
  fill(35,208,250);

  for(let triX= 0; triX<=3; triX=triX+1){
    for(let triY=0; triY<=1; triY=triY+1)
    triangle(triXL+290+triX*120 ,triY*120+510 , triXL+310+triX*120, triY*120+510, triXL+300+triX*120, triY*120+490)
  }

  for(let triX= 0; triX<=3; triX=triX+1){
    triangle(triXL+350+triX*120,570,triXL+370+triX*120,570,triXL+360+triX*120,550)
  }

  
  triXL= triXL - 2;
  triXR= triXR + 2;

  //Go in the opposite directions they are able to go
  if (keyIsDown(LEFT_ARROW)){
    triXL += 4;
    triXR -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)){
    triXL -= 2;
    triXR += 2;
  }

  if (keyIsDown(UP_ARROW)){
    circlegrow += 6;
  }

  if (keyIsDown(DOWN_ARROW)){
    circlegrow -= 8;
  }

  fill(100,30,60)

  currentTime = millis();

  if (circlegrow > height || circlegrow < -height) 
  {
    image(Hikaru, 880, 375,width/4,height/4);
    fill(200,30,50)
    text("BLUNDER",500,375)
  }
  
  if (triXR > width || triXR < -width)
  {
    image(Gotham, 125, 375,width/4, height/4);
    fill(254,138,232)
    text("BRILLIANT MOVE!!!",500,650)
  }

  currentTime = millis();

  if (currentTime - savedTime > Timer)
  {
    title = 1
    savedTime = currentTime
  }

  if (title = 1)
  {
    redraw()
    fill(random(255),random(255),random(255))
    text("CHESS",500,150,)
  }

  fill (100,100,100)
}

// Resets the Canvas to repeat

function mousePressed() {
  circlegrow = 0
  triXL = 0
  triXR = 0
  r = random(255);
  g = random(255);
  b = random(255);
}

//Make it so you are able to freeze the image at any point

function keyPressed()
{
  if (keyCode === ENTER)
    stop = !stop

}


