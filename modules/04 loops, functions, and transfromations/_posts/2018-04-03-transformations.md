---
title: Transformations
---
# {{page.title}}

<iframe frameborder="0" width='600' height="220" src="https://editor.p5js.org/mdarfler/embed/SkBqohHCQ"></iframe>

## [Rotate](https://p5js.org/reference/#/p5/rotate)
Rotates a shape the amount specified by the angle parameter. This function accounts for `angleMode`, so angles can be entered in either `RADIANS` or `DEGREES`.

Objects are always rotated around their _relative position to the origin_ and positive numbers rotate objects in a **clockwise** direction. Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling `rotate(HALF_PI)` and then `rotate(HALF_PI)` is the same as `rotate(PI)`. All transformations are reset when draw() begins again.

### Degrees and Radians
A quick aside: when talking about rotation we  are talking about moving around a circle. There are two systems of measurement that we can use - Degrees and Radians. In the image below, you can see how these two are related. For degrees, the measurements go from 0 - 360. In radians, the measurements go from 0 - 2π.
[![](https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/fc023d7d-db75-4a93-9a91-03f900de1e16.png)](http://www.wyzant.com/resources/lessons/math/trigonometry/converting-radians-to-degrees)
<p class="caption"><a href="http://www.wyzant.com/resources/lessons/math/trigonometry/converting-radians-to-degrees">www.wyzant.com/resources/lessons/math/trigonometry/converting-radians-to-degrees</a></p>

**TAKE NOTE** In the image above, the radians/degrees increase as you rotate **counterclockwise.** As with all drawing in p5.js, the _y-axis_ is mirrored across the _x-axis_. This means that when we are drawing, increasing the radians/degrees rotates you in the **clockwise** direction. e.g. a rotation of π/90º will put you at the bottom of the circle.

By default, p5.js uses radians. You can change this with the command `angleMode(MODE)` where MODE can be either `DEGREES` or `RADIANS`. You can also use negative angles to go counterclockwise around the circle. e.g. -π/4 == 7π/4. -90º == 270º

### Relative position to the origin
In p5.js, by default the origin is at _(0,0)._ We'll see how to change that in just a bit, but for now let's see what we can do. Let's say we want to make a arch of circles. How might we do that? We'll need to:
1. set an angle or rotation
2. draw our ellipse
3. increase our angle of rotation
4. repeat

<script type="text/p5" data-autoplay data-width="260" data-preview-width="300" data-height="400">
var rot = 0; //rotation variable
function setup(){
  createCanvas(260,260);
  background(220);
  frameRate(5);
}

function draw(){
  rotate(rot); // set rotation
	line(0,0,200,0); //for illustration
  ellipse(200,0,20,20); //draw circle
  rot += PI/16; //increase rotation
}
</script>

This is good, but what if we want to change the origin?

## [Translate](https://p5js.org/reference/#/p5/translate)
Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.

Transformations are cumulative and apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling translate _(50, 0)_ and then translate _(20, 0)_ is the same as translate _(70, 0)_. If `translate()` is called within 1, the transformation is reset when the loop begins again. This function can be further controlled by using `push()` and `pop()`.

### Translate in use
If we want to change the origin of drawing, then we need to tell p5.js where to go. Using the `translate(x,y)` function we can specify an _(x,y)_ location on the canvas. Note: that when doing so, you'll have to adjust how you draw shapes. In the example below, we start by drawing an ellipse at _(0,0)_ and then translating to the center of the canvas. These coordinates are now the _(0,0)_ for drawing. when we draw another ellipse at _(0,0)_ the ellipse is now at the center of the screen. If we wanted to draw another cirlce back at the old _(0,0)_ we would need to write <br> `ellipse(-width/2,-height/2,40,40)`

<script type="text/p5" data-autoplay data-width="260" data-preview-width="300" data-height="300">
function setup(){
  createCanvas(260,260);
  background(220);
  line(0,0,width/2,height/2);
  ellipse(0,0,40,40);
  translate(width/2,height/2);
  ellipse(0,0,40,40);
}
</script>

### Translate and Rotate

Let's go back to the sketch at the top of the page with the rotating square. If we want to write a sketch that does the same thing we'll need to set up both a new origin and an angle of rotation.

<script type="text/p5" data-autoplay data-width="360" data-preview-width="300" data-height="350">
function setup() {
  createCanvas(260, 260);
	rectMode(CENTER); //Draws rectangles more like ellipses
	angleMode(DEGREES); //Use angles instead of radians
}

function draw() {
  background(200);
	translate(width/2, height/2);
	rotate(frameCount*2);
	rect(0,0,100,100);
}

</script>

## [push()](https://p5js.org/reference/#/p5/push) [pop()](https://p5js.org/reference/#/p5/pop)

The `push()` function saves the current drawing style settings and transformations, while `pop()` restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with `push()`, it builds on the current style and transform information. The `push()` and `pop()` functions can be embedded to provide more control.

### Putting it all together
What if we wanted to have two object rotating on the screen at different rates? Since the  `translate()` and `rotate()` functions are cumulative, we could try to make a transformation for one object and then make another transformation relative the first, but that seems like an awful lot of math. It might just be easier to make them operate independently.

<script type="text/p5" data-autoplay data-width="360" data-preview-width="300" data-height="600">
function setup() {
	createCanvas(260, 260);
	rectMode(CENTER);
	angleMode(DEGREES);

}

function draw() {
	background(200);
	fill(255,200);
	noStroke();

	push();
	translate(width / 2, height / 2);
	rotate(frameCount * 2);
	rect(0, 0, 100, 100);
	pop();

	push();
	translate(width / 4, height / 2);
	rotate(-frameCount * 3);
	rect(width / 8, height / 8, 40, 40);
	pop();
}

</script>

## Video Explanation
<iframe width="600" height="400" src="https://www.youtube.com/embed/o9sgjuh-CBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSfmuni30Edd6lh_THso86nQuFR0h-yKru-RNrBQi8zClHnlOA/viewform?usp=sf_link)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmuni30Edd6lh_THso86nQuFR0h-yKru-RNrBQi8zClHnlOA/viewform?embedded=true" width="640" height="2249" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## [Assignment](https://classroom.google.com/u/1/c/MTU5OTI3MjEzNTZa/a/MjY0ODA4ODI5MzBa/details)
Create a sketch that mimics that repeating pattern of the camellia flower.

[![](https://cdn.webvanta.com/000000/51/74/slider_detail/uploads/plant_family/1480439658-3c3b97dd76fcdaef7/57142905_m.jpg)](https://www.gardenia.net/plant-variety/Camellias-Japonica)
<p class="caption"><a href="https://www.gardenia.net/plant-variety/Camellias-Japonica">www.gardenia.net/plant-variety/Camellias-Japonica</a></p>

In order to do so you will need to consider:
- how to approximate the shape of the petal
- how the petal rotates around the center
- how the petal changes as it rotates
- the order in which the petals are drawn
- when to stop drawing

Here is an example of what your sketch might look like
<iframe width="600" height="410" frameborder="0" src="https://editor.p5js.org/mdarfler/embed/HJ0b7ArR7"></iframe>
