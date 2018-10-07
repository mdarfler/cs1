---
title: map() function
---
# map() function

In the next two lessons we will look at two useful functions `map()` and `random()` that will expand what we can do with our sketches.

## [map()](https://p5js.org/reference/#/p5/map)
<iframe width="600" frameborder="0" src="https://editor.p5js.org/embed/Hy9Bd9N87"></iframe>
In the sketch above, the color of the background changes based on the position of the mouse. The  `mouseX` controls the amount of red and the `mouseY` controls the amount of blue. However, the value of `mouseX` is anywhere between 0 and 600 and the value of `mouseY` is anywhere between 0 and 100. As we saw before, the value for red and blue is between 0 and 255. So how do we get the full range of colors using `mouseX` and `mouseY`?

The `map()` function does exactly that by mapping one range onto another. `map()` takes **five** input arguments.
```
map(value, minRange1, maxRange1, minRange2, maxRange2)
```
What's new about this function is that, unlike `ellipse()` that just draws something on our canvas, the `map()` function returns a number that we can then assign to a variable. So, if we want to map `mouseX` which ranges from 0 to 600 to the range for red, which goes from 0 to 255 we would write:
```
r = map(mouseX, 0, 600, 0, 255);
```
Mathematically speaking the map function works like this:
<br>
<br>
![map-equation]({{site.baseurl}}/img/map-equation.png)
<br>

## Video Explanation
<iframe width="560" height="315" src="https://www.youtube.com/embed/nicMAoW6u1g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## width and height
We already looked at two system variables, `mouseX` and `mouseY`. These variables are built into p5.js and return a value based on the current state of the environment. There are two more system variables that will also be useful to us. They are `width` and `height`. These two variables return the width and height of our canvas. So instead of hard coding the width and height we can just call the system variables instead.

<script type="text/p5" data-autoplay data-width="360" data-preview-width="200" data-height="320">
function setup(){
  createCanvas(200, 200);
}
function draw(){
  r = map(mouseX, 0, width, 0, 255);
  background(r,0,255);
}
</script>

Like any variable you can perform basic mathematical operations on it. How would you create an ellipse that's always in the center of screen regardless of how big the screen is?

## Assignment
Write a p5.js sketch that uses one axis of the mouse position to control the speed at which a "ball" moves across the screen and the other axis of the mouse position to control the size of the ball. Remember to make sure to use JavaScript Objects where appropriate **Bonus Points** Make it way prettier.

<iframe width="560" height="200" frameborder="0" src="https://editor.p5js.org/embed/B1Fj1o4I7"></iframe>

Submit a link to your code on [Google Classroom](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTYxMDYzMzIzNzNa/details).
