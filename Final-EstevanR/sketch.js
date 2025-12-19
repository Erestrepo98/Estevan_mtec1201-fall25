/*
Estevan Restrepo
My Checkers Game
Everything should be self explanatory with the clicks.
For my final project I decided to make a checkers board since I thought that making a chess
board would be too complicated not to say this wasn't hard but getting jump logic into this 
game was a pain trying to make sure that pieces either didnt move spontaneously around the
board or just sitting in other pieces spots and sometimes the capture logic would work and
sometimes the game would just break trying to get everything to work and follow the rules
constantly needing to go back to what makes a move valid so that I can allow for jumps but
then it kept leading to my pieces breaking around.
*/

let r = 200;
let g = 125;
let b = 75;
let tileSize = 80;
let start = false;
let leave = false;
let Funny;

let selectedPiece = null;
let currentTurn = "red";
let pieces = [];

function preload() {
  Funny = loadImage('/images/LaughingCat.jpg');
}

function setup() {
  createCanvas(900, 900);
  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  if (!start && !leave) {
    OpeningScreen();
    return;
  }

  if (leave) {
    Joke();
    return;
  }

  Game();
}

function OpeningScreen() {
  strokeWeight(0);

  fill(237, 41, 57);
  rect(225, 225, width / 2, height / 2);
  fill(205, 92, 92);
  rect(675, 225, width / 2, height / 2);
  fill(210, 31, 60);
  rect(225, 675, width / 2, height / 2);
  fill(202, 52, 51);
  rect(675, 675, width / 2, height / 2);

  textSize(100);
  fill(r, g, b);
  r = (r + 1) % 255;
  g = (g + 1) % 255;
  b = (b + 1) % 255;
  text("Checkers", 450, 450);

  fill(255);
  textSize(65);
  if (mouseX > 383 && mouseX < 520 && mouseY > 313 && mouseY < 363) fill(0);
  text("Start", 450, 350);

  fill(255);
  if (mouseX > 300 && mouseX < 500 && mouseY > 500 && mouseY < 600) fill(0);
  text("Leave Game", 450, 550);
}

function Game() {
  background(255);
  CheckerBoard();
  drawPieces();

  fill(0);
  textSize(40);
  text(currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1) + " Turn", width / 2, 50);

  if (mouseX > width - 220 && mouseX < width - 40 && mouseY > 25 && mouseY < 75) {
    fill(180);
  } else {
    fill(220);
}

rect(width - 130, 50, 180, 50, 10);

fill(0);
textSize(24);
text("Restart", width - 130, 58);

}

function Joke() {
  background(255);
  image(Funny, width / 2, height / 2, width, height);
  fill(255);
  textSize(60);
  text("HAAAAAAAAAAAAAAAAAAAA", 450, 500);
}

function CheckerBoard() {
  rectMode(CORNER);
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      fill((r + c) % 2 === 0 ? 240 : 100);
      rect(c * tileSize + 175, r * tileSize + 175, tileSize, tileSize);
    }
  }
  rectMode(CENTER);
}

function mousePressed() {
  if (!start && !leave && mouseX > 383 && mouseX < 520 && mouseY > 313 && mouseY < 363) {
    start = true;
    initPieces();
    currentTurn = "red";
    selectedPiece = null;
    return;
  }

  if (!start && !leave && mouseX > 300 && mouseX < 500 && mouseY > 500 && mouseY < 600) {
    leave = true;
    return;
  }

  if (leave) {
    leave = false;
    start = false;
    return;
  }


  if (start && !leave && mouseX > width - 220 && mouseX < width - 40 && mouseY > 25 && mouseY < 75) {
    start = false;
    leave = false;
    selectedPiece = null;
    pieces = [];
    currentTurn = "red";
    return;
}


  let sq = getSquareFromMouse();
  if (!sq) return;

  let clickedPiece = getPieceAt(sq.r, sq.c);

  if (clickedPiece && clickedPiece.color === currentTurn) {
    selectedPiece = clickedPiece;
    return;
  }

  if (selectedPiece && !clickedPiece) {
    if (isValidMove(selectedPiece, sq.r, sq.c)) {
      let dr = sq.r - selectedPiece.r;
      let dc = sq.c - selectedPiece.c;

      if (Math.abs(dr) === 2) {
        let midR = (selectedPiece.r + sq.r) / 2;
        let midC = (selectedPiece.c + sq.c) / 2;
        let middlePiece = getPieceAt(midR, midC);
        if (middlePiece) {
          pieces = pieces.filter(p => p !== middlePiece);
        }
      }

      selectedPiece.r = sq.r;
      selectedPiece.c = sq.c;

      if (selectedPiece.color === "red" && selectedPiece.r === 7) 
        selectedPiece.king = true;
      if (selectedPiece.color === "white" && selectedPiece.r === 0) 
        selectedPiece.king = true;

      currentTurn = currentTurn === "red" ? "white" : "red";
      selectedPiece = null;
    }
  }
}

class Piece {
  constructor(color, r, c, king = false) {
    this.color = color;
    this.r = r;
    this.c = c;
    this.king = king;
  }

  draw() {
    if (this === selectedPiece) {
      stroke(255, 215, 0);
      strokeWeight(4);
    } else {
      noStroke();
    }

    fill(this.color);
    ellipse(this.c * tileSize + tileSize / 2 + 175, this.r * tileSize + tileSize / 2 + 175, tileSize * 0.7);

    if (this.king) {
      fill("gold");
      textSize(24);
      text("K", this.c * tileSize + tileSize / 2 + 175, this.r * tileSize + tileSize / 2 + 175);
    }
  }
}

function initPieces() {
  pieces = [];

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 1) pieces.push(new Piece("red", r, c));
    }
  }

  for (let r = 5; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 1) pieces.push(new Piece("white", r, c));
    }
  }
}

function drawPieces() {
  for (let p of pieces) 
    p.draw();
}

function getSquareFromMouse() {
  let c = floor((mouseX - 175) / tileSize);
  let r = floor((mouseY - 175) / tileSize);
  if (r < 0 || r > 7 || c < 0 || c > 7) 
    return null;
  return { r, c };
}

function getPieceAt(r, c) {
  return pieces.find(p => p.r === r && p.c === c) || null;
}


function isValidMove(piece, newR, newC) {
  let dr = newR - piece.r;
  let dc = newC - piece.c;

  if (newR < 0 || newR > 7 || newC < 0 || newC > 7) 
    return false;

  if (Math.abs(dr) !== Math.abs(dc)) 
    return false;
  if (Math.abs(dr) !== 1 && Math.abs(dr) !== 2) 
    return false;

  if (getPieceAt(newR, newC)) return false;

  if (!piece.king) {
    if (piece.color === "red" && dr <= 0) 
      return false;
    if (piece.color === "white" && dr >= 0) 
      return false;
  }

  if (Math.abs(dr) === 2) {
    let midR = (piece.r + newR) / 2;
    let midC = (piece.c + newC) / 2;
    let middlePiece = getPieceAt(midR, midC);
    if (!middlePiece || middlePiece.color === piece.color) 
      return false;
  }

  return true;
}
