---
title: Nested Loops
---
# {{page.title}}
In the previous lesson we looked at using a for loop to increment one variable. Now we'll look at how to increment multiple variables using nested loops.

## We live in a 2D world
Say we want to make something that looks like this:
<iframe width="600" height="300" frameborder="0" src="https://editor.p5js.org/embed/BkaVOWeYQ"></iframe>
We know how one row of circles are made, but how do we make multiple rows?
```
for(var x = 0; x <= width; x += 50){
  ellipse(x,0,40,40);
}

for(var x = 0; x <= width; x += 50){
  ellipse(x,60,40,40);
}

for(var x = 0; x <= width; x += 50){
  ellipse(x,120,40,40);
}
.
.
.
```
There's got to be a better way. Notice how the y position of each `for` loop is incremented by 60 each time. What if we used another `for` loop to make more `for` loops. It's `for loop inception`!
```
for(var x = 0; x <= width; x += 50){
  for(var y = 0; y <= height; y += 60){
    ellipse(x,y,40,40);
  }
}
```
If we break this down we start by
1. initializing `x = 0`
1. testing `x < width`
1. initializing  `y = 0`
1. testing `y < height`
1. draw ellipse at `x = 0, y = 0`
1. incrementing `y += 60`
1. testing `y < height`
1. drawing ellipse at `x = 0, y = 60`
1. and so on until `y > height`
1. THEN we increment `x += 50` and start again at 2
1. Continue until `x > width`

<iframe width="600" height="300" frameborder="0" src="https://editor.p5js.org/embed/r15WRbetX"></iframe>

How would you change the code so that it drew the rows first and then the columns?

## Video Explanation
<iframe width="600" height="315" src="https://www.youtube.com/embed/1c1_TMdf8b8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
