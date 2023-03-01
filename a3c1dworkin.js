let x = 50;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("220");

  //scaled to 1:1

  yeetBall(mouseX, 430, 1);

  //scaled up 1:1.5 for reference at a larger size
  
  yeetBall(250, 120, 1.5);
}

//I wanna make my lil sprite into my game character. I plan on adding in secondary animations that change the face text/font/size so that I can do a few different animations without actually having to do a ton of visual aid and coding. In one of my smaller functions for an exit ticket I added in a lil face changing aspect in the font functions.

//I did change the colors and face from the original but I kept the semi-gradient color scheme and the kawaii face text. I also made him egg shaped for added fluffiness. I think it's cute but I can add more work into the composition if it's not good enough.

//I made a function and called it back- I might add a slider for gradience in HSLA if I can to be called back in the function in 'draw'

function yeetBall(x, y, size) {
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
