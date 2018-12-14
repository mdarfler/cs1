---
title: Recursion
---

# {{page.title}}
Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem (as opposed to iteration).[[1]](https://www-cs-faculty.stanford.edu/~knuth/gkp.html)

>The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement. In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.<br>
— Niklaus Wirth, Algorithms + Data Structures = Programs, 1976

## Recursive v. Iterative
In the previous unit we looked at using loops to solve certain types of problems. Loops typically use some sort of iterative paradigm in their solution, i.e. something changes incrementally and ends when the incrementation reaches the end. For example, if we wanted to draw 10 circles we would iterate an  `ellipse()` call 10 times and then be done.
```
for(let i = 0; i < 10; i++){
  ellipse(i*50, height/2, 20);
}
```
Recursion, on the other hand, solves problems by solving some smaller instance of the problem in the solving of the bigger problem.

### Factorials
Factorials are a mathematic concept that calculates the product of all integers from 1 to n, where n is an positive integer, and is written n!. For example. 5! is equal to _5 * 4 * 3 * 2 * 1 = 120_

If we wanted to solve this problem using iteration we could use a `for` loop like this:

<iframe height="600px" width="100%" src="https://repl.it/@mdarfler/Iterative-Factorial?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br>
But there is another way to think about this problem using recursive function. A recursive function definition has one or more base cases, meaning input(s) for which the function produces a result without recurring, and one or more recursive cases, meaning input(s) for which the program **calls itself** For example, the factorial function can be defined recursively by the equations
- 0! = 1 and,
- for all n > 0, n! = n(n − 1)!.

Neither equation by itself constitutes a complete definition; the first is the base case, and the second is the recursive case. Because the base case breaks the chain of recursion, it is sometimes also called the "terminating case".

In code this might look like this:

<iframe height="600px" width="100%" src="https://repl.it/@mdarfler/UnawareGiddyRevisioncontrol?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
<br>
**WHAT IS GOING ON!** The function just called itself! This is a recursive definition.

### Recursion in p5.js

Say we wanted to draw a series of concentric circles on the screen like this:
<iframe width="100%" height="300px" frameborder="0px" src="https://editor.p5js.org/mdarfler/embed/SkcQZfikV"></iframe>

It would be easy to make this happen with a simple for loop:
```
for(i = height; i > 2; i *= 0.9){
  ellipse(width/2, height/2, i);
}
```
But what if we wanted to write this another way? The trick here is to see that the solution to the whole problem depends on solving one smaller problem and relating it to the whole, namely how to draw one circle that is dependent on the previous circle.

To begin, let's make a very boring function that draws a circle at a given _x. y, and d_.
```
function circle(x, y, d){
  ellipse(x, y, d);
}

circle(width/2, height/2, 1)
```
This will give us a circle of diameter 1 in the center of the screen. Boring, if not completely superfluous. But wait, there's more. How, then, to draw the next circle which shares the same _x and y_ but with a slightly bigger diameter? We already have a function that does that, namely `circle()` Could we just just use the function again?
```
function circle(x, y, d){
  ellipse(x, y, d);
  circle(x, y, d * 1.1)
}

circle(width/2, height/2, 1);
```
**DON'T RUN THIS CODE!** Remember that we need a recursive case and a base case. What we have here is only a recursive case. This code will never stop running. It just keeps on calling itself over and over again in an **infinite loop**. We need to add in a base case, or some way for the function to stop running. In our case, we want the code to stop running once the circle the we are drawing is bigger than the canvas that we're drawing on.

```
function concentricCircles(x, y, d){
  ellipse(x, y, d);
  if(d < width){
    ellipse(x, y, d * 1.1)
  }
}

concentricCircles(width/2, height/2, 1)
```
### Putting it together
Let's put this all together and see what happens. We'll start by defining our `setup()` function to make a canvas and call the function `concentricCircles()` with some initial conditions. As noted above, `concentricCircles()` is a recursive function that draws every growing concentric circles.

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="400">
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	concentricCircles(width / 2, height / 2, 1)
}

function concentricCircles(x, y, d) {
	noFill();
	stroke(255);
	ellipse(x, y, d);
	if (d < height) {
		concentricCircles(x, y, d * 1.1)
	}
}
</script>
<br>
Nifty, eh?

## Going Further
So this is certainly cool, but how is this much different than just writing a loop to do this? The case of concentric circles is simple, but we can go a lot further. What if we started with one big circle in the center of the screen and then we drew four circles around the circle at the four cardinal directions that were 80% the size of the original?

<iframe width="100%" height="400px" frameborder="0px" src="https://editor.p5js.org/mdarfler/embed/BJwkFSoJ4"></iframe>

Now what if we wanted to use each of those 4 new circles as the start of 4 new circles. 
