//Liam Dworkin
//NMD 105
//March 2023

function setup() {
  //ellipseMode(CENTER);
  createCanvas(500, 500);
  
  /*This is code I took from William's repository on assignment 3. I can't get it to function for me properly though trying to get my assignment to work*/
  
  /*I wanted to see if I could get a better working copy in order and turns out I can't so it's just as busted as the first attempt of mine at A3C4 and understand it is not my original code- at least a large portion of it isn't*/
  
  go = 0;
  move = 5;
  x1 = 10;
  y1 = 25;
  siz = 10;
  coll = siz * 10;
  projX = random(width);
  projY = 0;
  projSpd = 5;
  score = 0;
 
}

function draw() {
  //Background, and set design
  
  /*It's minimal but that's because I can't get the game to work so it doesn't really matter*/
  
  background("blue");
  push();
  noStroke();
  fill("pink");
  rect(0, 470, 500, 30);
  fill("green");
  rect(0, 480, 500, 30);
  pop();

  projCaught = false;
  coin(projX, projY);
  projY += projSpd;
  if (projY >= 460 || projCaught) {
    projY = 0;
    projX = random(width);
  }
  
  noStroke();
  /*Calling in my function for the sprite, it needed to be translated over in order to function properly*/
  
  push();
  translate(0, 420);
  yeetBall(x1, y1, siz / 10);  
  pop();
  
  //movement for left to right
  
  if (keyIsDown(LEFT_ARROW)) {
    x1 -= move;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x1 += move;
  }
  // 
  if (x1 >= width - coll / 2) {
    x1 = width - coll / 2;
  }
  if (x1 <= coll / 2) {
    x1 = coll / 2;
  }
  if (projCaught) {
    projSpd += random(0, 0.25);
    console.log(projSpd);
  }
  if (projSpd >= 25) {
    projSpd = 24;
  }
  go += 1;
}

/*The image keeps staying even after the sprite moves and I can't the interaction to prox*/

function yeetBall(x, y, size) {
  /*The goal was to have the game feed the sprite's face animation to the sprite when the coin is caught. Again, hitbox not working so this isn't functioning for some reason*/
  if (projCaught == true) {
    push();
    noStroke();
    //translate(0, 0);
    fill("hsla(50, 45%, 75%, .7)");
    ellipse(0, 0, 101, 75);
    fill("hsla(100, 45%, 75%, .7)");
    ellipse(0, 0, 95, 67);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 75, 47);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 57, 39);
    fill("purple");
    textSize(25);
    noStroke();
    text("_ >o< _", -41, 2);
    fill("salmon");
    textSize(20);
    text("◍    ◍", -27, 6);
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);
    noStroke();
    //translate(0, 0);
    fill("hsla(50, 45%, 75%, .7)");
    ellipse(0, 0, 91, 96);
    fill("hsla(100, 45%, 75%, .7)");
    ellipse(0, 0, 80, 85);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 63, 64);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 45, 47);
    fill("purple");
    textSize(25);
    noStroke();
    text("( ^-^ )", -31, -4);
    fill("salmon");
    textSize(20);
    text("◍   ◍", -25, 0);
    pop();
  }
}

//function for the coin/seed spawn

//The goal is to get it to randomly spawn
//It does but I can't get it to connect hitboxes

function coin(x, y) 
{
  push();
  translate(x, y);
  noStroke();
  translate(0, 0);
  fill("orange");
  ellipse(0, 0, 40);
  fill("yellow");
  ellipse(0, 0, 35);
  fill("palegoldenrod");
  ellipse(0, 0, 25);
  fill("gold");
  ellipse(0, 0, 20);
  
  if (
    projX < x1 + coll / 2 &&
    projX > x1 - coll / 2 &&
    projY > y1 - coll / 2 &&
    projY < y1 - coll / 4
  ) {
    //Wanted to do a 'coin collected' conditional w/ this
    //TBD if it works as it's reliant on hitbox detection
    
    projCaught = true;
    score += 1;
    fill("purple");
    textSize(45);
    noStroke();
    text("Coin Collected!", 250, 65);
    
  }
  pop();
}

