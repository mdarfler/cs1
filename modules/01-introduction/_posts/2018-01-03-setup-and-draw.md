---
title: Setup and Draw
---
# Setup and Draw
There are two special functions definitions that we need to look at before we can keep going. They are `function setup(){}` and `function draw(){}`. In general every sketch that you write in p5.js will have these two functions definitions.

## [setup()](https://p5js.org/reference/#/p5/setup)
The p5.js reference states
>The setup() function is defined once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution.

You can think of this as establishing the initial conditions for your sketch. in order to define setup you need to type
```
function setup(){

}
```
Once you define the function `setup()` in your sketch you do not need to explicitly call the function. It is a special type of function definition that is automatically run by the p5.js library. All of the code that you want to run when you start the sketch must go inside the two curly braces `{}`. Typically you'll want to include `createCanvas()` and maybe `background()` inside setup.
```
function setup(){
  createCanvas(600,400);
  background(0);
}
```

## [draw()](https://p5js.org/reference/#/p5/draw)
>Defined directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.

For now, while we are making static sketches, the `draw()` function is not strictly necessary. Later on we'll create sketches that change over time, such as a bouncing ball, in which as we'll need to have a draw loop. In practice the definition of this function looks very similar to the `setup()` function.
```
function draw(){
  //code goes here;
}
```
As with setup, you only need to define the function once and it is automatically run by p5.js. i.e. you do not have to explicitly call the draw function, though there may be some instances where you might.

## Putting it Together
From now on, all of your sketches should have a `setup()` function and should probably have `draw()` function. A typical sketch will look something like this:
```
function setup(){
  createCanvas(width, height);
  background(color);
}

function draw(){
  //your code here.
}
```
In general no functions calls will exist in your code that are not either in `setup()` or `draw()`. Again, note that  `setup()` or `draw()` are only defined in you sketch and not explicity called.

## [Comprehension Check](https://goo.gl/forms/WqO9DYOwHqIdkNyo2)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddRGWR-4b0J1woW3ZsWoNVCfuOGZUArMaCG11EhY-uXKi7cw/viewform?embedded=true" width="560" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

##Assignment

- Start by creating a canvas that is 640 x 480 px
- Next, draw a rectangle on that canvas that starts at (50, 100) and is 425 x 200 px
Draw a horizontal line that extend from one end of the rectangle that you just drew to the other, starting 225 px down from the top of the canvas.
- Now draw another rectangle that starts at (475, 200) and is 75 x 100 px wide
- Draw a circle of diameter 75 (that's an ellipse that is 75px tall and 75px wide) that's centered at (150, 300).
- Draw another circle of diameter 75 whose center is 325 px to the right of the first circle
- Draw three 75px x 50px rectangles whose centers are spaced 100 px apart in the x-direction starting at (75, 125)


