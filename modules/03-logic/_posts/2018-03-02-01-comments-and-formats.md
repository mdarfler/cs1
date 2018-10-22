---
title: Comments and Formatting
---
# {{page.title}}

## Comments
>The best comments are the ones that don’t need to be written.

Comments are words and phrases written into our code that is not read by the computer. There are two types of comments that you can make: single and multiline comments

Single line comments can be placed anywhere on line of code by typing `//` Anything that comes after that is not read by the computer e.g.

```
//This is a comment
function draw(){
  ellipse(x,y,d,d); //this is also a comment
  //this is also a comment rect(x,y,w,h);
  //a quick note about the last line. No rectangle will be
  //drawn because everything after the "//" is not read by
  //the computer.
}
```
Multiline comments can be especially useful at the top of your code for all of the header information that you might want to discuss. multiline comments start with `/*` and end with `*/`. Anything inside of these tags will be considered a comment and not read by the computer.
```
/* This is a multiline comment.
They're truly a pleasure to use,
and good looking to boot. */
```

So what does the look like for you? Well at the very least from now on, all of your code which you submit should begin with the following:
```JavaScript
//Your Name
//Homework Title
//Date

/*A brief explanation of
what your code does.*/
```
E.g.
```
//Michael Darfler
//How to Comment your code
//October 2nd, 2017

/*This is a brief overview
of the why, when, and how
of commenting code*/
```
### Why should I comment my code?

1. Comments should make your code easier to understand, not harder.
1. Comments demonstrate understanding.

Bad Comments
```
function setup(){ //begin setup function
  createCanvas(640,480); //create a 640 x 480 canvas
  noFill(); //Don't fill shapes
} //end setup function
```
Good Comments
```
//Initialize sketch
function setup(){
  createCanavs(640,480);
  noFill();
}
```
There's just no need to reiterate what the function does if the function name is well considered.

### When should I comment my code?
Comment your code when you need to clarify a particular decision, not to simply reiterate what the code is already saying. The best comments are the ones you don’t need

>The practitioner of literate programming can be regarded as an essayist, whose main concern is with exposition and excellence of style. Such an author, with thesaurus in hand, chooses the names of variables carefully and explains what each variable means. He or she strives for a program that is comprehensible because its concepts have been introduced in an order that is best for human understanding, using a mixture of formal and informal methods that reinforce each other. -Donald E. Knuth

Bad code
```JavaScript
var stuff = 0; //x position of the ball
var thing = 7; //y position of the ball
var whatever = 50; //ball diameter

function draw(){
  ellipse(stuff, thing, whatever); //draw ball
  stuff += 4; //move ball down by 4
  Thing += 4; //move ball over by 4
}  

//– Or –

function draw(){
  ellipse((stuff + 4*frameCount)%width,(thing + 4*framecount) % height, whatever)
}
```
Good Code
```JavaScript
var ball = {
  xPos: 0,
  yPos: 7,
  diam: 50
};

var velocity = 4;

//move ball diagonally from top Left to bottom Right.

Function draw(){
  ellipse(ball.xPos,ball.yPos,ball.diam,ball.diam);
  ball.xPos += velocity;
  ball.yPos += velocity;
}
```
## Formatting
In JavaScript, whitespace (tabs, and space) are ignored. So why, then, do we care about them? Because we are artisans practicing a craft and skill. Here’s what you should know

Arguments and assignments should be separated by whitespace

```
rect(40, 20, 75, 100) /*not*/ rect(40,20,75,100)
var xPos = 75 /*not*/ var xpos=75
var circ = {
  xPos: 45,
  yPos: 15,
  Diam: 10
};
```

All lines of code must end with a semicolon.

```
rect(40, 20, 75, 100);
```
Always open your curly braces on the same line as the function call. Curly braces should close left aligned with the function call. Everything inside the curly braces should be tabbed over.

```
function draw() {
  rect(40, 20, 75, 100);
}
```

Stanzas (sections of related code) should be separated with a carriage return.
```
var xPos = 40;
var yPos = 20;

function setup(){
  createCanvas(640, 480);
}

function draw(){
  rect(xPos, yPos, 75, 100);
}
```
Comments should be directly above a stanza or directly to the right for a single line comment
```
//initialize variables
var xPos = 40;
var yPos = 20;

function setup(){
  createCanvas(640, 480);
}

function draw(){
  rect(xPos, yPos, 75, 100); //draw rectangle
}
```
Variables and functions should start with a lowercase letter. All subsequent words should be capitalized with no whitespace.
```
var mySuperAwesomeVaraible = 45;
```
For more information go to [google's javascript guide](https://google.github.io/styleguide/javascriptguide.xml)

### That's a lot of work. Isn't there an easier way?
Why yes there is. For the most part, a lot of formatting can be done automatically in the p5.js editor by going to edit->tidy code or by hitting shift-tab. Be careful, though. Tidy code will not remove extraneous carriage returns, or missing semicolons.
