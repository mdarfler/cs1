---
title: End of unit
---

# End of unit assessment

For much of western history, artists created what is known as representational art. Pictures of peoples, places, and things that told a story. However, in the early 1900's a growing number of artists explored making non-representational art, including Piete Mondrian, Wassily Kandinsky, and Jackson Pollock.
>As a catalyst for contemporary art, abstract painting rejected the “rules” of traditional art. Rather than focus on figurative and representational depictions, abstract painters placed emphasis on color, composition, and emotion. Similarly, instead of concentrating solely on the completed works, these artists placed importance in the process.

<p class="caption">https://mymodernmet.com/abstract-artists/</p>
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTxTiKdFRSQ13ygcljJsZiiBFhsuCnLAhAqv5mhij4Pm-uHelsCZnh_voM5Zo5cEGtEoIC3BJlLcXWV/embed?start=true&loop=true&delayms=5000" frameborder="0" width="600" height="360" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Assignement

This assignment has two parts, one written and one coded.

### [Coding](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYwNDMwODIzODda/details)
In class, you will choose a print out of a famous drawing from the past 200 years. You will also be given tracing paper. For this part of the assignment your goal is to understand the basic form of the painting by understanding its abstract, geometric elements. Be loose and don't worry about making a perfect representation of the painting. Take advantage of the fact that you won't be able to see the picture with perfect fidelity through the tracing paper.
![]({{site.baseurl}}/img/hopper-rooms-by-the-sea.jpg)

There are examples of what I am looking for on the front table so that you can get a sense of where we are going. There is also an example on the front white board if you turn on the projector.

Start by placing your tracing paper over your painting. If you are having trouble seeing your painting you may want to place it over top of a computer screen or iPad with a bright white screen.

Next, choose a marker of a particular color and trace out all of the rectangles in the painting. Only draw rectangles that have horizontal and vertical lines. If the shapes in the painting are slightly rotated draw the bounding box that contains that rectangle.
![]({{site.baseurl}}/img/hopper-boxes.png)

Next, choose another marker and trace out any diagonal lines. Try to be clear about where the connect to other rectangles that you have already identified in the painting.

![]({{site.baseurl}}/img/hopper-boxes-lines.png)
Next, choose yet another color marker and outline all of the curves, ellipses, and circles. Consider that some of the curves may be defined by an ellipse whose diameter is much larger than that of the painting.
![]({{site.baseurl}}/img/lily-pond-ellipse.png)

Now that you have the basic forms of the painting your next task is to translate that into code. It might help you to take your tracing paper and place it over graphing paper so that it's easier to convert the drawing.
![]({{site.baseurl}}/img/hopper-with-grid.png)

In order to complete your drawing you may need to investigate the use of two new p5.js commands, [`arc()`](https://p5js.org/reference/#/p5/arc) and [`quad()`](https://p5js.org/reference/#/p5/quad).

Once you have the shapes and lines sketched out complete your drawing by using colors from the painting. Also, pay attention to the `stroke` and `strokeWeight` of your shapes. You may be able to convert some boxes into a single line just by using a bigger strokeWeight. Consider what you're background color will be  so that you don't have to fill in every pixel on the screen. Also keep in mind that the order in which you write your code is the order in which your sketch will be drawn. You may be able to take advantage of this to create interesting shapes.

Submit:
- A link to your code.
- A digital copy of your tracing.

[Link to Google Classroom Assignment](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYwNDMwODIzODda/details)

### [Written](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTgxMTA5OTQzNzVa/details)

For the second portion of this assignment, write ~250 - 400 words about the importance of the painting and the artist that you a studied. Make sure to include:
- The artists, the date of the painting, where it was painted.
- A description of the painting.
  - What is the subject of the painting?
  - Who/what is in the painting?
  - What materials were used in its creation?
  - What colors are predominantly used and what colors are used as accents?
- A description of the style of painting (Impressionism, Cubism, Baroque) and how this painting exemplifies that particular style.
- Observations about the painting that you made while studying its form and structure.
