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


function setup() {
  createCanvas(1000, 750);

}



function draw() {

  background(r ,g ,b );

  if (!stop)
  {
    triXL = triXL + 1
    triXR = triXR - 1
    circlegrow = circlegrow - 2
  }


  fill(150,75,0);
  rect(250,150,520,520);

  strokeWeight(1);
  fill(196,164,132);
  rect(270,170,60,60);
  rect(270,290,60,60);
  rect(270,410,60,60);
  rect(270,530,60,60);

  rect(330,230,60,60);
  rect(330,350,60,60);
  rect(330,470,60,60);
  rect(330,590,60,60);

  rect(390,170,60,60);
  rect(390,290,60,60);
  rect(390,410,60,60);
  rect(390,530,60,60);

  rect(450,230,60,60);
  rect(450,350,60,60);
  rect(450,470,60,60);
  rect(450,590,60,60);

  rect(510,170,60,60);
  rect(510,290,60,60);
  rect(510,410,60,60);
  rect(510,530,60,60);

  rect(570,230,60,60);
  rect(570,350,60,60);
  rect(570,470,60,60);
  rect(570,590,60,60);

  rect(630,170,60,60);
  rect(630,290,60,60);
  rect(630,410,60,60);
  rect(630,530,60,60);

  rect(690,230,60,60);
  rect(690,350,60,60);
  rect(690,470,60,60);
  rect(690,590,60,60);

  /// SPLIT


  fill(191,111,20);
  rect(270,230,60,60);
  rect(270,350,60,60);
  rect(270,470,60,60);
  rect(270,590,60,60);

  rect(330,170,60,60);
  rect(330,290,60,60);
  rect(330,410,60,60);
  rect(330,530,60,60);

  rect(390,230,60,60);
  rect(390,350,60,60);
  rect(390,470,60,60);
  rect(390,590,60,60);

  rect(450,170,60,60);
  rect(450,290,60,60);
  rect(450,410,60,60);
  rect(450,530,60,60);

  rect(510,230,60,60);
  rect(510,350,60,60);
  rect(510,470,60,60);
  rect(510,590,60,60);

  rect(570,170,60,60);
  rect(570,290,60,60);
  rect(570,410,60,60);
  rect(570,530,60,60);
  
  rect(630,230,60,60);
  rect(630,350,60,60);
  rect(630,470,60,60);
  rect(630,590,60,60);

  rect(690,170,60,60);
  rect(690,290,60,60);
  rect(690,410,60,60);
  rect(690,530,60,60);

  /* This is to be able to change the color of the circles
  by switching the mouses position across the canvas.
  */
  //fill(21,12,3);
  fill(mouseX/4,mouseY/4,100);
  strokeWeight(5);
  stroke(140,144,140);
  circle(360,200,circlegrow + 40);
  circle(480,200,circlegrow + 40);
  circle(600,200,circlegrow + 40);
  circle(720,200,circlegrow + 40);

  circle(300,260,circlegrow + 40);
  circle(420,260,circlegrow + 40);
  circle(540,260,circlegrow + 40);
  circle(660,260,circlegrow + 40);

  circle(360,320,circlegrow + 40);
  circle(480,320,circlegrow + 40);
  circle(600,320,circlegrow + 40);
  circle(720,320,circlegrow + 40);

  /* This is to be able to change the color of the circles
  by switching the mouses position across the canvas.
  */
  //fill(249,233,216);
  fill(100,mouseX/4,mouseY/4);
  circle(300,500,circlegrow + 40);
  circle(420,500,circlegrow + 40);
  circle(540,500,circlegrow + 40);
  circle(660,500,circlegrow + 40);
  
  circle(360,560,circlegrow + 40);
  circle(480,560,circlegrow + 40);
  circle(600,560,circlegrow + 40);
  circle(720,560,circlegrow + 40);

  circle(300,620,circlegrow + 40);
  circle(420,620,circlegrow + 40);
  circle(540,620,circlegrow + 40);
  circle(660,620,circlegrow + 40);

  // Allow for circles to break boundaries
  circlegrow = circlegrow + 2;

  strokeWeight(2);
  stroke(249,0,0);
  fill(254,138,232);

  // Allow triangles to go in opposite directions

  triangle(triXL+350,190,triXL+370,190,triXL+360,210);
  triangle(triXL+470,190,triXL+490,190,triXL+480,210);
  triangle(triXL+590,190,triXL+610,190,triXL+600,210);
  triangle(triXL+710,190,triXL+730,190,triXL+720,210);
  
  triangle(triXR+290,250,triXR+310,250,triXR+300,270);
  triangle(triXR+410,250,triXR+430,250,triXR+420,270);
  triangle(triXR+530,250,triXR+550,250,triXR+540,270);
  triangle(triXR+650,250,triXR+670,250,triXR+660,270);
  
  triangle(triXL+350,310,triXL+370,310,triXL+360,330);
  triangle(triXL+470,310,triXL+490,310,triXL+480,330);
  triangle(triXL+590,310,triXL+610,310,triXL+600,330);
  triangle(triXL+710,310,triXL+730,310,triXL+720,330);

  stroke(21,31,86);
  fill(35,208,250);

  triangle(triXR+290,510,triXR+310,510,triXR+300,490);
  triangle(triXR+410,510,triXR+430,510,triXR+420,490);
  triangle(triXR+530,510,triXR+550,510,triXR+540,490);
  triangle(triXR+650,510,triXR+670,510,triXR+660,490);

  triangle(triXL+350,570,triXL+370,570,triXL+360,550);
  triangle(triXL+470,570,triXL+490,570,triXL+480,550);
  triangle(triXL+590,570,triXL+610,570,triXL+600,550);
  triangle(triXL+710,570,triXL+730,570,triXL+720,550);

  triangle(triXR+290,630,triXR+310,630,triXR+300,610);
  triangle(triXR+410,630,triXR+430,630,triXR+420,610);
  triangle(triXR+530,630,triXR+550,630,triXR+540,610);
  triangle(triXR+650,630,triXR+670,630,triXR+660,610);
  
  triXL--;
  triXR++;

  if (keyIsDown(LEFT_ARROW)){
    triXL += 2;
    triXR -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)){
    triXL -= 1;
    triXR += 1;
  }

  if (keyIsDown(UP_ARROW)){
    circlegrow ++;
  }

  if (keyIsDown(DOWN_ARROW))
    circlegrow -= 4;
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

function keyPressed()
{
  if (keyCode === ENTER)
    stop = !stop

}

