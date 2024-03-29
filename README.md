# assignment-3-liam-dworkin
assignment-3-liam-dworkin created by GitHub Classroom
My code is a simple function called 'yeetBall' (the name of my sprite/avatar) It uses a similar color palette and emoticon facial animation with a bit more
in depth color, form, and a new emoticon facial structure. 

The function itself: 

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

The function itself is not very complex and neither is calling it back in the draw function; however, the only 
special aspect is the use of text. I plan to use multiple lines of text for facial animations to easily demark activity in the sprite during the game. Currently it is 
a purely static image, although using conditionals would be my method for creating the required effects in a more complete game. 

Code link: (Part 1) https://editor.p5js.org/liamdworkin/sketches/tXOJVFTOz

Part 2 incorporates in a basic animation with a conditional

Code link: (Part 2) https://editor.p5js.org/liamdworkin/sketches/FkPSYkUlB

Part 3 adds in the random seed drop (coin function)

Code link: (Part 3) https://editor.p5js.org/liamdworkin/sketches/b2lxF1B7c

Part 4 adds in a function that causes the coin (seed) to drop. It works by adding a speed variable to the Y position when the mouse is pressed once. 

Code link: (Part 4) https://editor.p5js.org/liamdworkin/sketches/UASv-TnjO

Part 4.1 is another attempt to actually complete the game. I used some code from William's A3C4 game to try and add some actual functionality into my very broken game. It has worked to an extent, adding randomly appearing coins that continue to fall; however, there is no hit detection and therefore the scoring isn't working either. 

Code link: (Part 4.1) https://editor.p5js.org/liamdworkin/sketches/AyIF81JI3
