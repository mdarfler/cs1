---
title: MouseX MouseY
---

# MouseX MouseY
In this lesson we will take our first look at variables. Think of a variable as a location in the computer's memory where you can store and retrieve information.

## Example
Move your mouse over the screen. What happens?
<iframe width="560" height="220" frameborder="0" src="https://alpha.editor.p5js.org/embed/BkbpL5e8m"></iframe>


## Video Explanation
<iframe width="560" height="315" src="https://www.youtube.com/embed/RnS0YNuLfQQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### [mouseX mouseY](https://p5js.org/reference/#/p5/mouseX)
The system variables `mouseX` and `mouseY` always contains the current horizontal and vertical position of the mouse, relative to (0, 0) of the canvas.

### [pmouseX pmouseY](https://p5js.org/reference/#/pmouseX)
The system variable `pmouseX` and `pmouseY` always contains the horizontal position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas.

### [mousePressed()](https://p5js.org/reference/#/p5/mousePressed)
>The mousePressed() function is called once after every time a mouse button is pressed. The mouseButton variable (see the related reference entry) can be used to determine which button has been pressed. If no mousePressed() function is defined, the touchStarted() function will be called instead if it is defined.

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSfUCYg-SC2Ga5H5CvBJcLyN-nMtCDaLpsqI2YrY0Fu8isoGCg/viewform)

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUCYg-SC2Ga5H5CvBJcLyN-nMtCDaLpsqI2YrY0Fu8isoGCg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## [Assignment](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTYwNTk3MjYzMjZa/details)
Create a simple drawing program using p5.js. Your program should allow the user to interactively draw on a digital canvas with their mouse. Things to consider:
- How will you clear the screen?
- How will the mark that the user makes be drawn continuously or will they be able to tell the computer when they want to draw and when they don't want to draw?
- Can the user choose more than one colors?
- **EXTRA CREDIT** Can you make it so that you can draw a continuous line instead of a series of dots?
<iframe width="600" height="410" frameborder="0" src="https://editor.p5js.org/embed/HybU4U6Fm"></iframe>

In order to receive full credit, you must write a well formatted sketch that calls `setup()` `draw()` `mouseX` `mouseY` and at least two event functions. The complete list of event functions and variables can be found [here](https://p5js.org/reference/#group-Events)

Submit a link to your p5.js sketch on [Google Classroom](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTYwNTk3MjYzMjZa/details)
