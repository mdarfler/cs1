---
title: Translate and Rotate
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
  ellipse(0,0.40,40);
}
</script>

## Putting it all together

Let's go back to the sketch at the top of the page with the rotating square. If we want to write a sketch that does the same thing we'll need to set up both a new origin and an angle of rotation.

<script type="text/p5" data-autoplay data-width="260" data-preview-width="300" data-height="300">
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


## Video Explanation
<iframe width="560" height="315" src="https://www.youtube.com/embed/o9sgjuh-CBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
