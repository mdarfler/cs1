---
title: random() function
---

# {{page.title}}
Another great built in function in p5.js is the `random()` function. Let's take a look at how it works.

## What is random?
True randomness is when a set of outcomes are all equally likely and there is no order or pattern to the outcomes. Flipping a coin or rolling a die are examples of random events. Hopefully, if the coin or die are fair there is no way to predict what they outcome will be. There are simply too many environmental variables influencing the outcome.

<iframe width="650" height="210" frameborder="0" src="https://alpha.editor.p5js.org/embed/H14R84JPQ"></iframe>

Being able to generate a random number in the computer can be incredibly useful. Perhaps if you're making a game and you want to award its hero with a random amount of gold. Or if you're teacher and you want to generate random pairs of students. A computer, however, is built precisely so that there is no randomness. So how, then, does a computer do something randomly?

<iframe width="560" height="315" src="https://www.youtube.com/embed/1cUUfMeOijg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## [random() function](https://p5js.org/reference/#/p5/random)
In p5.js the `random()` function can take 0, 1 or 2 arguments. If no arguments are given, random returns a decimal number between 0 and 1, not including 1. If 1 argument is given, `random(num)` returns a random decimal number between 0 and that number, not including that number. If 2 arguments are given `random(min, max)` returns a number between min and max. Try it for yourself. Change the arguments inside `random()` and press play.

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="200">
function setup(){
  createCanvas(200, 200);
  var rand = random();
  text(rand,10,10);
}
</script>

## Normal Distribution
Sometimes we want something to be random, but not so random. When we think about how choices are distributed we might be able to categorize them in different ways. While there are many different mathematical distributions, one that you might be already familiar with is the Gaussian Distribution, or what is also called the bell curve.
[![bell curve](https://explorable.com/sites/default/files/images/standard_deviation_diagram.svg_.png)](https://explorable.com/bell-curve-controversy)
<p class="caption">https://explorable.com/bell-curve-controversy</p>
The Gaussian Distribution relies on two variables, the **mean** and the **standard deviation** If we too 100 test scores and averaged all of them that would be the statistical mean. The standard deviation describes how quickly the scores deviate from the mean. The higher the standard deviation the more slowly the curve falls away. Conversely, the lower the standard deviation, the faster the curve falls away.

Another way to think about it is with two darts players. Let's say Jesse has a lot of experience and Sam has hardly any. Now, let's give each player 100 darts and tell them both to try and hit the bullseye. After each player throws their darts, we can measure the distance from each dart to the center of the dart board. Presumably both Jesse and Sam's darts will be, **on average,** at the center of the board, however, Jesses will likely be much more closely clustered near the center, while Sam's will be more spread out.

<iframe width="560" height="210" frameborder="0" src="https://alpha.editor.p5js.org/embed/BJ3xQFlv7"></iframe>

In p5.js there is a function called [`randomGaussian()`](https://p5js.org/reference/#/p5/randomGaussian) that takes 2 arguments, mean and standard deviation. it "returns a random number fitting a Gaussian, or normal, distribution. There is theoretically no minimum or maximum value that randomGaussian() might return. Rather, there is just a very low probability that values far from the mean will be returned; and a higher probability that numbers near the mean will be returned."

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="360">
function setup(){
  createCanvas(200, 200);
}

function draw(){
  var x = randomGaussian(100,25);
  var y = randomGaussian(100,50);
  noStroke();
  fill(255);
  ellipse(x,y,10,10);
}
</script>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSerG_xHGIRYTUvYyWknW3El71u4oIksnKG3s8i8MZ3Fh9mzVA/viewform?embedded=true)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerG_xHGIRYTUvYyWknW3El71u4oIksnKG3s8i8MZ3Fh9mzVA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Using your knowledge of how the `random()` and `randomGaussian()` functions work, create a sketch that randomly draws shapes of different sizes and different colors and different places on the canvas. You must use both `random()` and `randomGuassian()` in order to receive full credit.

Submit on [Google Classroom.](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYyMTA4MTE3MjNa/details)
