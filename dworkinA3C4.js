let x = 50;
//let leftW = 45;
//let rightW = 455;

function setup() {
  //random variable
  seedX = random(400);
  seedY = 10;
  seedSpeed = 5;
  //adding in the movement functionality- trying to get it to move on the Y axis downwards
  seedStopped = false;
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background("palegoldenrod");

  push();
  noStroke();
  fill("pink");
  rect(0, 470, 500, 30);
  fill("green");
  rect(0, 480, 500, 30);
  pop();

  push();
  //let x2 = constrain(mouseX, leftW, rightW);
  //Trying to define boundaries haven't finished it yet.
  yeetBall(mouseX, 420, 1);
  pop();

  //coin called back with random X position
  coin(seedX, seedY, 1);
  if (seedStopped === true) {
    seedY = seedY + seedSpeed;
  }
}

//I wanna make my lil sprite into my game character. I plan on adding in secondary animations that change the face text/font/size so that I can do a few different animations without actually having to do a ton of visual aid and coding. In one of my smaller functions for an exit ticket I added in a lil face changing aspect in the font functions.

//I did change the colors and face from the original but I kept the semi-gradient color scheme and the kawaii face text. I also made him egg shaped for added fluffiness. I think it's cute but I can add more work into the composition if it's not good enough.

//I made a function and called it back- I might add a slider for gradience in HSLA if I can to be called back in the function in 'draw'

//I've added both functions for yeetBall together and added the conditional to the function so it can be applied easily by simply calling the function back which includes the mouseIsPressed conditional in it.

function yeetBall(x, y, size) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    scale(size);
    noStroke();
    translate(0, 0);
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
    translate(0, 0);
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

function coin(x, y, size) {
  push();
  translate(x, y);
  scale(size);
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
  pop();
}

//attempting to have the seed fall when the mouse is pressed by flipping it to true, making the seed Y position change to include added speed through variables in the draw function when calling back the coin (seed) function

function mousePressed() {
  seedStopped = true; }
  
