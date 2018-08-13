---
title: Coloring your Sketch
---
# Coloring your Sketch
Drawing shapes on white backgrounds is all well and good, but I suppose we'll want to add a little flare into your drawings In this unit we will look at ways to use color in your p5.js sketch

## Anatomy of a Shape
For the purposes of this class, let's say that any shape consists of an area defined by a set of bounding lines or curves. This means that when it comes to styling your shape, you have three different options:

- Fill - the color of the area inside the bounding lines
- Stroke - the color of the bounding lines
- Stroke Weight - the thickness (in pixels) of the bounding lines

In p5.js there are three corresponding commands `fill(); stroke(); strokeWeight();` Each one of these commands takes a color as an input, which we'll get to soon. There are also two additional commands, `noStroke()` and `noFill()`, that come in handy. These commands take no input arguments. So wIth that in mind, let's take a look at how colors are defined in the computer.

## Greyscale
The simplest way that we could color in our sketch is with shades of black. How many different shades of black do you think there are between white and black? In the real world there are infinitely many, but in the modern computer world there are exactly 256.
[![](http://1.bp.blogspot.com/_ePzz13VNUS0/SwFyBg8fzVI/AAAAAAAABAQ/9hCCISZDYm8/s1600/grayscale.jpg)](http://derekbruecknercourseinformation.blogspot.com/2009/10/rendered-shaded-drawing-objectives.html)
<p class="caption">http://derekbruecknercourseinformation.blogspot.com/2009/10/rendered-shaded-drawing-objectives.html</p>
Why 256? This is because computers work in [binary](https://en.wikipedia.org/wiki/Binary_number), a counting system consisting entirely of 0's and 1's. Each digit is called a **bit** and a bit can be either 0 or 1. If we have 1 bit (digit) we can count from 0 to 1. (Quick side note which will become very important later, in computer land, counting **always** starts at _0_) If we have 2 bits we can count from 0 to 3. (00, 01, 10, 11). Another way to put that is that if we have _n_ bits we can count from 0 to  _2<sup>n</sup> - 1_. Modern computer graphics use 8 bits to define a color so we can count from _0_ to _2<sup>8</sup> - 1_ or 0 (black) to 255 (white), or 256 different possible colors.

When it comes to drawing and using colors in p5.js you will first need to define the stroke, stroke, weight, and fill before you start to draw. However, once you've defined all of those things you can draw as many shapes as you want with that set of colors. Here's a quick example:

<script type="text/p5" data-autoplay data-width="250" data-preview-width="310" data-height="320">
createCanvas(250, 250);
fill(100);
stroke(10);
strokeWeight(5);
rect(50, 85, 60, 80);

stroke(200)
ellipse(150, 125, 60, 80);
</script>

Notice that the rectangle and the ellipse have the same fill and stroke weight, but a different stroke color. Once any of these elements are defined they won't change until they are redefined.

## RGB
And this is all well can good, but a little bit of color wouldn't hurt. In reality, computers are no longer greyscale devices. They're full color! So even if we are drawing in greyscale, it's really just a combination of different colors of light. What colors you might ask? The fundamental colors of a computer are Red, Green, and Blue.
[![](https://i2.wp.com/hisour.com/wp-content/uploads/2018/03/RGB-color-model.jpg)](https://hisour.com/rgb-color-model-24867/)
<p class="caption">https://hisour.com/rgb-color-model-24867/</p>
By combining these colors in different proportions we can create an astonishing number of colors. How many exactly? Well, for each color--red, green, blue--there a 256 possible values from 0 to 255. Which means that there are 256 * 256 * 256 different possible color combinations. That's over **16 billion colors!** Not bad. When using colors p5.js we'll need to specify exactly the amount of each color in order to define a color.

<script type="text/p5" data-autoplay data-width="250" data-preview-width="310" data-height="320">
createCanvas(250, 250);
fill(200,0,100);
stroke(100,200,10);
strokeWeight(5);
rect(50, 85, 60, 80);

stroke(200)
ellipse(150, 125, 60, 80);
</script>

Try changing the colors around in the sketch above and see what happens.

## Background
There is one final command to look at before we conclude this unit. White is a great background to draw on but sometimes we might want something else. the `background();` command will fill your canvas with whatever color you want, Like the `fill()` and `stroke()` commands `background()` can take 1 greyscale value as an input or three RGB values.

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWhuqIEXxwmgbVmk3IlD1toHx0wWC3ynqAoZlDkJTzhfjDBA/viewform?embedded=true" width="560" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Using the code you wrote from the previous assignment color in your drawing. Before starting make a copy of your code so that you don't overwrite your work from before. ![]({{site.baseurl}}/img/duplicate-p5js.gif) You will need to use the commands  `fill()`, `stroke()`, `background()` and `strokeWeight()` for full credit. If you want to pick particular colors just search for ["color picker"](https://www.google.com/search?q=color+picker) in google and it will bring up a window that will give you the RGB code for any color.

When you are finished submit a link to your sketch.

[Link to Google Classroom Assignment](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYwNDMwNjc1MzVa/details)

## Video Explaination

<iframe width="560" height="315" src="https://www.youtube.com/embed/9mucjcrhFcM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
