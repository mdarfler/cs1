---
title: Functions
---
# {{page.title}}

Functions are a super handy way of adding new functionality to your code without overloading your draw loop with tons of code. We are already very familiar with functions. We use them all the time, e.g. `ellipse()`, `rect()`, etc. All of these p5.js functions are defined in the library and are built on other functions in JavaScript. What's nice about functions is that they make your code easier to read and to write. Instead of having to write out the JavaScript to draw an ellipse every time you want to draw a circle, you just call the function `ellipse()` and the computer looks up the code in the library and runs it.

In some ways it's like a foot note to your code. If you were writing a research paper, you may want to cite your source but, unless it's strictly necessary, putting the full citation in line with your text would be very cumbersome to read. Instead, if you use a footnote you can quickly tell the reader that there is a citation below and that if they'd like to know more they can go read it, but if they'd rather just keep going they are not interrupted.

## [Defining your own function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

Let's think back to our first drawing assignment when we had to use p5.js to recreate an old master painting. If you'll recall, you had lines and lines of code that were hard to keep track of.
```
fill(66,223,244);
rect(0,0,275,225);
fill(27,68,132);
stroke(1,18,45);
strokeWeight(2);
rect(0,115,115,80);
rect(0,225,115,50);
fill(139,69,19);
rect(0,275,425,160);
fill(0);
stroke(0);
rect(115,225,160,50);
.
.
.
 ```
 This is a pain to read and write. The programmer's intent is no where to be found! What is that rectangle supposed to be? Why is that fill the way it is? What if instead of all of that mumbo-jumbo, we could write something that looked more like This
 ```
 function draw(){
   head();
   body();
   arms();
   hands();
   legs();
   feet();
 }
 ```
Ooo. I like that. Using your own functions has three advantages
1. your code is easier to read
2. your code is easier to write
2. you intent is easier to communicate

Let's start simply by looking at a bouncing ball ball sketch from earlier in the course.

<script type="text/p5" data-autoplay data-width="260" data-preview-width="300" data-height="450">

var circle;

function setup() {
	createCanvas(260, 400);
	circle = {
		x: width / 2,
		y: height / 2,
		d: 20,
		xVel: 6,
		yVel: 4
	}
}

function draw() {
	background(255,0,200);

  //display ball
  fill(0,255,55);
  strokeWeight(5);
  ellipse(circle.x, circle.y, circle.d);

  //move ball
	circle.x = circle.x + circle.xVel
	circle.y = circle.y + circle.yVel

  //bounce ball
	if (circle.x >= width) {
		circle.xVel = circle.xVel * -1
	}

	if (circle.y >= height) {
		circle.yVel = circle.yVel * -1
  }
  if (circle.y <= 0) {
    circle.yVel = circle.yVel * -1
  }
  if (circle.x <= 0) {
    circle.xVel = circle.xVel * -1
  }    
}
</script>

While this is good, I think that we can make it better. Something more like this:
```
function draw(){
  display();
  move();
  bounce();
}
```
In order to create and use new functions in your code you'll need to do two things:
1. define your new function.
2. call your new function.

If we want to define a new function called "display" we write it like this:

```
function display(){
  fill(0,255,55);
  strokeWeight(5);
  ellipse(circle.x, circle.y, circle.d);
}
```
Easy peasey. calling the function is even easier. Simply write `display();` in the draw loop. If we take this all the way to the end we get something that looks like this:

<script type="text/p5" data-autoplay data-width="260" data-preview-width="300" data-height="450">
var circle;

function setup() {
	createCanvas(300, 400);
	circle = {
		x: width / 2,
		y: height / 2,
		d: 20,
		xVel: 6,
		yVel: 4
	}
}

function draw() {
	background(255,0,200);
  display();
  move();
  bounce();
}

function display(){
  fill(0,255,55);
  strokeWeight(5);
  ellipse(circle.x, circle.y, circle.d);
}

function move(){
	circle.x = circle.x + circle.xVel
	circle.y = circle.y + circle.yVel
}

function bounce(){
	if (circle.x >= width) {
		circle.xVel = circle.xVel * -1
	}

	if (circle.y >= height) {
		circle.yVel = circle.yVel * -1
  }
  if (circle.y <= 0) {
    circle.yVel = circle.yVel * -1
  }
  if (circle.x <= 0) {
    circle.xVel = circle.xVel * -1
  }    
}
</script>

## Arguments
However, functions need not be one trick ponies. Like many of the drawing functions in p5.js we can modify how the function runs by providing inputs. e.g. when we are drawing and ellipse we get to tell the computer where and how big to draw the ellipse.

When defining a function, we have the opportunity to specify that we want to supply some inputs for the function to use. say we want to make a function that adds two numbers together. While this is a pretty trivial example it might help illustrate the point.

```
function sum(a, b){
  return a + b;
}
```
What's more, the inputs need not be simple numerical values. Functions can even take entire objects as inputs

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="400">
let circ = {
  x:100,
  y:50,
  d:75,
  fill:0,
  stroke:255
}

function setup(){
	createCanvas(200,200);
	background(200);
  drawCircle(circ);
}

function drawCircle(circ){
  fill(circ.fill);
  stroke(circ.stroke);
  ellipse(circ.x, circ.y, circ.d)
}
</script>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSeVSVSSaEC8t8uOAZd1DXclKagnZuxa2OOx4P6tcStO7e3hLg/viewform?usp=sf_link)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVSVSSaEC8t8uOAZd1DXclKagnZuxa2OOx4P6tcStO7e3hLg/viewform?embedded=true" width="640" height="2571" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Refactor your clock code from 04-04 using function.
