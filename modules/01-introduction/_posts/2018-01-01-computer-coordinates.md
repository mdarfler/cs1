---
title: Coordinate Systems
---

# Coordinate Systems in Computers
In this unit we will look at different coordinate systems and explain their similarities and differences.

## The Cartesian Coordinate System
Hopefully you are familiar with the standard cartesian coordinate system from geometry class. Two major axes cross at right angles. Each axis is essentially a number line going from _-∞_ to _∞_ and crossing at their respective zeros. In this way we can define any point on this infinite plane as the combination of two values, one in the _x_ direction (horizontal) and one in the _y_ direction (vertical) [![](https://learn365project.files.wordpress.com/2015/08/cartesian_coordinates.png)](https://learn365project.com/2015/08/01/why-do-computer-coordinates-start-from-the-upper-left-corner/)
<p class="caption">mathinsight.org/cartesian_coordinates</p>
In the example above the point which is -3 steps in the _x_ direction and _2_ steps in the _y_ direction can be written as _(-3,2)_. Additionally, the infinite cartesian plane is broke up into 4 quadrants. The first quadrant is the top left quarter where both _x_ and _y_ are positive. Moving counter-clockwise to the second quadrant all _x_ values are negative and _y_ values are positive, and so on.
[![](http://muchobene.com/wp-content/uploads/2018/02/math-quadrants-quadrants-2.gif)](http://muchobene.com/7-math-quadrants/)
<p class="caption">http://muchobene.com/7-math-quadrants/</p>
Furthermore, the units in the cartesian coordinate system are unit-less by convention. That is, the numbers on the number lines don't necessarily correspond to a particular measurement. Many times when we are plotting data as a graph we will associate each axis with a unit so that the visual representation has more meaning. e.g. time in seconds could be represented on the _x-axis_ and speed in miles/hr could be represented on the _y-axis_. But, again, this is necessarily true.

## Computer Graphics Coordinate System
Computers also use a coordinate system when displaying graphics. This system shares many things in common with the cartesian system but is different in certain, very important ways.

### The pixel
To begin it is hopefully easy to imagine that the computer screen can be divided into a number of smaller squares like a piece of graph paper. But how small are each grid? The fundamental unit of a computer screen is the **pixel**, a tiny square on the screen that can't be subdivided<sup>[1](#fn1)</sup>. This means, that for the purpose of computer graphics, all coordinate are of the unit pixel. e.g. a shape that is 50 x 25 is 50 _px_ wide _x_ 25 _px_ tall.
<p class="footnote" id="fn1">[1] Technically each pixel is made up of 3 sub pixels, one red, one green and one blue. We will discuss this further elsewhere in the class.</p>


### Computer Quadrants
The other major difference when it comes to computer graphics is that the coordinate quadrants are mirrored along the _x-axis_. That means that the first quadrant where _x_ and _y_ are positive is in the bottom right. A better way to think about this is to imagine that the point _(0,0)_ is in the top left corner of your screen.
[![](https://learn365project.files.wordpress.com/2015/08/computer_coordinates.png)](https://learn365project.com/2015/08/01/why-do-computer-coordinates-start-from-the-upper-left-corner/)
<p class="caption">https://learn365project.com/2015/08/01/why-do-computer-coordinates-start-from-the-upper-left-corner/</p>

### Circles
This means that if we want to draw a circle that is 100px in diameter in the middle of the screen that is 400px x 200px we would have to draw its center at _(200,100)_ which is 200px from the left side of the screen and 100px from the top of the screen.

<iframe width="600" height="420" frameborder="0" src="http://alpha.editor.p5js.org/embed/Skx-qZ1Um"></iframe>

### Lines
If we want to draw a line we need to define two points, one at either end of the line. A horizontal line with a length of 100px might have a first point _(0,0)_ and a second point at _(100, 0)_. A vertical line with length 50 might have two points _(0,0)_ and _(0,100)_. We could also define lines that are diagonal with the points _(0,0)_ and _(100,100)_

<iframe width="600" height="420" frameborder="0" src="http://alpha.editor.p5js.org/embed/r1G_BWJLX"></iframe>

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeNLSP1v9oUR3gMoEAfzbcFXqy19CErXV3yI4yxCBMEhNjqvQ/viewform?embedded=true" width="560" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Using only circles and lines make a picture on graph paper. Using the computer coordinate system, for each line, mark the start and end point coordinates. For each circle, mark the center point and the diameter. (I'd suggest keeping the coordinates to integers only) You must have at least 3 circles and 3 lines. One easy shape to make would be a snowman, but I'll leave that up to you.

Attached is a template that already is laid out with computer coordinates. You may either print out the template and draw by hand with a ruler and a compass or you may use an online markup program such as notability or xodo. If you choose to print the template, you must turn in a picture of your work. If you do it digitally, submit a pdf or image.

[Link to Google Classroom Assignment](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYwMzkxMDg4NjBa/details)
