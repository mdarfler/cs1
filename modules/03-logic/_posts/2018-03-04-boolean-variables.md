---
title: Boolean Variables
---

# {{page.title}}
This lesson will take a look at a special type of variable called a boolean variable. These can be very useful if you want to ask the computer if something is TRUE or FALSE

## Data Types
Data types are a way of categorizing different types of variables inside of a computer program. JavaScript is what is referred to as a weakly typed programming language. What this means is that when declaring a variable you don't have to declare what type of variable it is. This is great for you because you don't have to worry too much about managing all of this because it all happens in the background. That said it's still a good idea to understand what a data type is.

### Numbers in the computer
You've probably heard the term "binary" before in relation to computers. What this means is that computers store information as either 0's or 1's. For the most part we use the decimal numbers 0 - 9 to store numbers. So how does a computer store the number 9? We'll look at this more in depth later, but for now, let's just say that the computer converts this number to the binary value (1001) and then stores it in memory. Any whole number (1, 42, -1925, etc.) is called an integer or an `int`. If the number has a decimal associated with it (1.294, 3.1416, -283.1129) it is called a floating point number or a `float`. We may also want to store things other than numbers such as a character `char`, strings `str` (a collection of `char`s) or even whole objects, which we'll look at later. The data type that we're going to look more closely at is the boolean `bool` data type.

### Boolean Variables
A boolean variable is a special variable that can only have two possible values, `true` or `false`. If you think of a light switch, it can only be in two possible states, on or off. A simple math problem is either right or wrong. In our computer programs we may want to ask a question like "is the mouse inside this rectangle, if so make the rectangle blue" and the answer is either yes `true` or no `false`.

## Boolean variables in practice
Let's take the last example from above and write it out in pseudocode.
```
if(mouse is inside the rectangle){
  fill(0,0,255);
  } else {
  noFill();
}
drawRectangle();
}
```
We've already looked at how to write this conditional statement from before, but it required a whole bunch of relational and logic operators. While we can't get rid of these statements we can refactor the code so that at least our conditional statement is a little cleaner and easier to understand. To begin let's assume that the mouse starts outside of the rectangle and we'll create a new variable `var inside = false`. Yay! We've created a boolean variable.

## Evaluating a Boolean variable.
As with any assignment operation first we evaluate the righthand side and then assign that value to the left hand side. This is no different with boolean variables. Let's consider creating a variable to store information about what side of the screen the mouse is on. Let's start with a variable "left" and assume that it begins as false. `var right = false;`. That code we will place at the top of the sketch before the `setup()`. Then in the draw loop we want to find out if the mouse is on the righthand side or not. If it is we want `right` to be `true`. If not, `false`. We can write this as
```
right = mouseX > width/2;
```
The computer will get the value of `mouseX` and if it's greater than 1/2 the width of the screen then `moouseX > width/2` will evaluate to true and `right` will be true.

<script type="text/p5" data-width="300" data-autoplay data-preview-width="260" data-height="360">
var right = false;
function setup(){
  createCanvas(200, 200);
}

function draw(){
  right = mouseX > width/2
  if(right){
    background(255,0,0);
  } else {
    background(0);
  }
}
</script>


## Bang`!`
Now that we have our boolean variable we're going to want to be able to switch its value. If we had a number and we wanted to switch its sign from positive to negative or negative to positive we multiply by -1. In code this looks like `x = x *= -1`. For boolean variables we use the `!` (bang) operator to negate the value so `!true` evaluates to '`false` and `!false` evaluates to `true`. So if you want to flip the variable `inside` from true to false we could write `inside = !inside`


## [rectMode()](https://p5js.org/reference/#/p5/rectMode)
Let's keep going by introducing a new function `rectMode()`. Before, when we drew a rectangle we did so by defining the top left corner and the width and the height. `rectMode()` allows us to change the meaning of the arguments inside the `rect()` command ino rder to draw rectangles in different ways. `rectMode()` takes one argument that can be `CORNER`, `CORNERS`, `CENTER` or `RADIUS`. See the [reference](https://p5js.org/reference/#/p5/rectMode) for a full description of all of the different options, but for now we're just going to look at `CENTER`.

`rectMode(CENTER)` draws a rectangle more like the way we draw an ellipse. So now, the first two arguments define the center of the rectangle and the second two arguments remain the same, defining the width and the height.

<script type="text/p5" data-width="300" data-autoplay data-preview-width="260" data-height="360">
function setup(){
  createCanvas(200, 200);
  background(220);
  fill(255,0,0);
  rect(50,50,100,50);
  noFill();
  rectMode(CENTER);
  rect(50,50,100,50);
}
</script>

Notice how the rectangle with no fill's center is at the same point as the red rectangle's top left corner. This is going to make it easier to figure out if the
mouse is inside the rectangle.



## Video Explanation
<iframe width="560" height="315" src="https://www.youtube.com/embed/Rk-_syQluvc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_tzrXXhFeaEgjGJsaE0-ykUiZ5rkCnlqHIQ4GvdwiMson3A/viewform?embedded=true" width="640" height="2599" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Here is some [starter code](https://editor.p5js.org/mdarfler/sketches/BJRCmWoP7) based on the Shiffman's video. Your assignment is to refactor the code in a number of always
- Create a JavaScript object `myrect` that contains information about the rectangles size and position.
- Pick a `rectMode()` other than `CENTER` to put in `setup()`.
- Rewrite the code so that instead of hardcoded values in `draw()` you use variables from the `myrect()` object. You'll have to use dot notation in order to do so. e.g. `myrect.x`

Submit your code on [Google Classroom](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTc1MzczODM0OTBa/details)
