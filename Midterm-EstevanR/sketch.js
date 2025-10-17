/*
The Dice Game

By Estevan Restrepo

Click to Start
Press R to roll
Click to Play Again
*/




let bar;
let table;
let dice;
let end;
let starttime;
let countdown;

let roll = 0;
let opponent = 0;
let mine = 0;
let time = 10;
let currenttime = 0;

let press = false;
let showtext = true;
let timerstart = false;

function preload()
{
  bar = loadImage("image/Bar.jpg");
  table = loadImage("image/Table.jpg");
  dice = loadImage("image/Dice.jpg");
  end = loadImage("image/end.png")
}
 
function setup() {
  createCanvas(700, 600);
  background(0);
  imageMode(CENTER);
  textAlign(CENTER);


}

function draw() {
  PreGame();

}

function PreGame()
{
  image(bar,width/2,height/2,width,height);
  fill(255);
  textSize(50);
  text("Start Game",100,200,500,400);
    if (mouseX>220&&mouseX<480&&mouseY>200&&mouseY<240)
      fill(0);
      text("Start Game",100,200,500,400);
      if (press)
        Game();
}

function Game()
{
  image(table,width/2,height/2,width,height)
  fill(0);
  text("Him:",200,70,300,200);
  text("You:",200,480,300,580);
  image(dice,width/2,180,width/6,height/6);
  image(dice,width/2,420,width/6,height/6);
    if (showtext)
      text("Press R to roll!",180,270,350,500);
    else
    if (roll == 1)
      opponent = int(random(1,6))
      text(opponent,200,20,300,120);
    if (roll == 1)
      mine = int(random(1,6))
      text(mine,200,540,300,640);
    if (timerstart)
      currenttime = int((millis() - starttime)/1000)
      countdown = time - currenttime;
    if (countdown <= 0)
      countdown = 0;
      roll = 0;
    if (opponent<mine||opponent>mine&&!opponent,mine)
      EndGame();
}

function EndGame()
{
  image(end,width/2,height/2,width,height);
  text(mine,50,300,150,400);
  text(opponent,350,300,450,400);
  text("Play Again",350,550,450,650);
    if (opponent<mine)
      text('You Win!',50,150,150,250);
    if (opponent>mine)
      text('You Lose!',360,380,440,480);
    if (opponent>=mine&&opponent<=mine)
      text("TIE",250,100,300,200);
    if (mouseX>450&&mouseX<700&&mouseY>550&&mouseY<600)
      fill(0,0,255);
      text("Play Again",350,550,450,650);
}

function mousePressed()
{
  if (mouseX>220&&mouseX<480&&mouseY>200&&mouseY<240)
    press = true;
  if (mouseX>450&&mouseX<700&&mouseY>550&&mouseY<600)
    press = false;
    roll = 0;
    opponent = 0;
    mine = 0;
    timerstart = false;
    showtext = true;

    
}

function keyPressed() {
  if (key === 'r'&& !timerstart)
    roll = 1;
    timerstart = true;
    starttime = millis();
    showtext = false;
}
