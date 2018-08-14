---
title: Setup and Draw
---
# Setup and Draw
There are two special functions that we need to look at before we can keep going. They are `function setup(){}` and `function draw(){}`. In general every sketch that you write in p5.js will have these two functions.

## [setup()](https://p5js.org/reference/#/p5/setup)
The p5.js reference states
>The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution.

You can think of this as establishing the initial conditions for your sketch. in order to call setup you need to types
```
function setup(){

}
```
All of the code that you want to run when you start the sketch must go inside the two curly braces `{}`. Typically you'll want to include `createCanvas()` and `background()` inside setup.
```
function setup(){
  createCanvas(600,400);
  background(0);
}
```

## [draw()](https://p5js.org/reference/#/p5/draw)
>Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.

For now, while we are making static sketches, the `draw()` function is not strictly necessary. Later on we'll create sketches that change over time, such as a bouncing ball, in which as we'll need to have a draw loop. In practice this looks very similar to the `setup()` function.
```
function draw(){
  //code goes here;
}
```
## Putting it Together
From now on, all of your sketches should have a `setup()` function and should probably have `draw()` function. A typical sketch will look something like this:
```
function setup(){
  createCanvas(width,height);
  background(color);
}

function draw(){
  background(0);
  //your code here.
}
```
<p class='clarification'>In general no functions calls will exist in your code that are not either in `setup()` or `draw()`</p>

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddRGWR-4b0J1woW3ZsWoNVCfuOGZUArMaCG11EhY-uXKi7cw/viewform?embedded=true" width="560" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
