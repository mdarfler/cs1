---
title: While Loops
---
# {{page.title}}
This lesson will look at how we can use  `repeat loops` to make our code easier to read and more efficient.

## What is a Loop?
In reality, we've already seen a loop. Do you remember that the `draw()` function is a loop? All of the code that's inside of the draw loop is run repeatedly forever and ever. But what if we want a little more control of the loop. Consider the following image:

<iframe width="600 height="280" frameborder="0" src="https://editor.p5js.org/embed/Bk4dOxgt7"></iframe>

What we have is a series of evenly spaced circles on the screen. I we wanted to recreate this image for ourselves, we may be tempted to write out the positions of all of the ellipses like this.
```
function setup(){
  createCanvas(260,260);
  background(220);
  ellipse(20, 130, 35, 35);
  ellipse(80, 130, 35, 35);
  ellipse(140, 130, 35, 35);
  ellipse(200, 130, 35, 35);
  ellipse(260, 130, 35, 35);
}
```
We might even get clever and use some variables
```
function setup(){
  createCanvas(260,260);
  background(220);

  var y = width/2;
  var d = 35;
  ellipse(20, y, d, d);
  ellipse(80, y, d, d);
  ellipse(140, y, d, d);
  ellipse(200, y, d, d);
  ellipse(260, y, d, d);
}
```
But what do we do with the x position of the ellipses. It appears that each circle is 60 px to the right of the last one. If we get super clever we could do create a variable `x` and increase the value of it by the `spacing` after each circle.
```
function setup(){
  createCanvas(260,260);
  background(220);

  var y = width/2;
  var d = 35;
  var x = 20;
  var spacing = 60;
  ellipse(x, y, d, d);
  x += spacing;
  ellipse(x, y, d, d);
  x += spacing;
  ellipse(x, y, d, d);
  x += spacing;
  ellipse(x, y, d, d);
  x += spacing;
  ellipse(x, y, d, d);
}
```
This is looking pretty clever isn't it!! But what if we wanted to draw 100 circles instead of 5 or 10. This method is just not scaleable. What we need is a loop that will automatically do this work for us.

## While Loops
The while loop is one of the fundamental control structures of computer programming. We've already seen another control structure when we looked at conditional statements. What's nice here is that the syntax for the while loop is almost identical to the if statement except instead of saying `if`, we say `while`
```
while(this is true) {
  //Do what's inside of here
}
```
Let's start by looking at what goes inside of the loop. In the code above we have a bunch of repeated code.
```
ellipse(x, y, d, d);
x += spacing;
```
We can now use a `while` loop to run that code as many times as we like.
```
while(){
  ellipse(x, y, d, d);
  x += spacing;
}
```
So What goes inside of the the `()`? If we're not careful, a while loop will run forever and never stop. This is a problem because our code will freeze up and we'll have to restart. This is why we need an **exit condition** so that this doesn't happpen. What we need is a **boolean expression** that must evaluate to true in order for the loop to run and that will continue to run until that expression is `false`. In our case here, we want the code to run until we get to the end of the screen. We could think of it this way:
```
if(x > width){
  //stop running
}
```
This will evaluate to `true` when we get to the end, but what we need is something that is `false` when we reach our exit condition and `true` everywhere else. Essentially we need to take the negation of that expression e.g. `!(x > width)` which is the same as `x < width`. So if we put it all together we get:
```
while(x < width){
  ellipse(x,y,d,d);
  x += spacing;
}
```
Now let's look at the whole thing with the while loop.

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="400">
function setup(){
  createCanvas(260,260);
  background(220);

  var y = width/2;
  var d = 35;
  var spacing = 60;
  var x = 20;
  while(x < width){
    ellipse(x,y,d,d);
    x += spacing;
  }
}
</script>

## Video Explaination
<iframe width="560" height="315" src="https://www.youtube.com/embed/cnRD9o6odjk?rel=0&amp;start=0&end=470" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSeQu4RaIh52BK7-0Bz_TzPmPfvT9Cn-qj_1128U9aHf8Bv7uw/viewform)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQu4RaIh52BK7-0Bz_TzPmPfvT9Cn-qj_1128U9aHf8Bv7uw/viewform?embedded=true" width="640" height="2304" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
