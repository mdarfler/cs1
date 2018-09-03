---
title: else, else if, AND, OR
---
# `else`,  `else if`, `AND`, `OR`
In the last lesson we used `if` statements to create another control structure for our programs. Now, instead of just blindly doing the same thing over and over again, we can do different things each time through the draw loop based on some simple rules. In this unit we will expand what's possible.

## `else` and `elseif`

### else
When using `if` we said that it follows the logic
>if this is TRUE then do that.

but what if "this" is FALSE? In this case we'll need to expand our sentence to include what to do when this is false.
>if this it TRUE then do that. OTHERWISE to this

in code the key word is `else`
```
if(this is true){
  do this;
} else {
  do this;
}
```
Let's say we wanted to create a sketch that draws a blue background with a yellow square when the mouse is on the left half of the screen and a red background with a green circle when it's on the right half. What would that code look like? Below is some starter code. See if you can fill in if/else statement to make the sketch work as described.

<script type="text/p5" data-width="300" data-preview-width="260" data-height="360">
function setup(){
  createCanvas(200, 200);
}

function draw(){
  if(       ){

  } else {

  }
}
</script>

### else if
So that's all well and good as long as we only have two conditions that we want to deal with.
>if this, then that. OTHERWISE if this, then that. OTHERWISE if this, then that.

What if we wanted to draw a blue background with a yellow square when the mouse is in the first 1/3 of the canvas, a purple background with an orange line when it's in the middle 1/3 and a red background with a green rectangle when the mouse is in the last 1/3?

In this case we can follow an `else` with another `if` statement which we can follow with another `else` and another `if` and so on. However, it is good practice to always end with an `else` without another `if` so as to catch all other conditions that have not been specifically addressed. What the video for a more thorough explanation.
```
if(this is true){
  do this;
} else if(this is true){
  do this;
} else {
  do this;
}
```
## Video Explanation.
<iframe width="560" height="315" src="https://www.youtube.com/embed/r2S7j54I68c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## `AND` and `OR`
Let's keep going. Let's say we want to create an if statement that will only run if "this" and "that" are true.
>IF it's cold  AND I need to go outside, THEN I should put on a coat.

What about a conditional statement that would run if either "this" or "that" were true?
>IF it's snowing OR it's sunny THEN I'm happy

This `AND` and `OR` are what are referred to as a logic operators. In programming we write them as `&&` and `||`, and like all things in computer programming it has a very strict definition and usage, which leads us to truth tables.

### Truth Tables
A truth table is a way of evaluating all possible outcomes of a logical operation. Let's create a scenario in which I want to decide if I should get takeout. I only order take out when I'm both hungry and not at home. So we might say:
>IF i'm hungry AND I'm not at home, THEN order takeout

But let's examine all of the possibilities. Each statement can either be TRUE or FALSE and there are a total of two statements which means that there are a total of four different combinations of TRUE and FALSE. For each of these four combinations we can evaluate whether or not to buy food

|Hungry|AND|Away|THEN|Buy Takeout|
|TRUE|`&&`|TRUE|THEN|TRUE|
|TRUE|`&&`|FALSE|THEN|FALSE|
|FALSE|`&&`|TRUE|THEN|FALSE|
|FALSE|`&&`|FALSE|THEN|FALSE|

What if the logic was if I'm hungry OR I'm away from home, order takeout. Then the truth table looks like this.

|Hungry|OR|Away|THEN|Buy Takeout|
|TRUE|`||`|TRUE|THEN|TRUE|
|TRUE|`||`|FALSE|THEN|TRUE|
|FALSE|`||`|TRUE|THEN|TRUE|
|FALSE|`||`|FALSE|THEN|FALSE|

There is a really great more in depth explanation of truth tables [here](https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94). I strongly encourage you to read through it.

Going back to our bouncing ball sketch from before, here's how we might think about getting the ball to move back and forth with only one if statement instead of two.
```
if(circle.x > width || circle.x < 0){
  speeed *= -1;
}
```
## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScYrF4Ulc4pnUUrhOxcOMGdVV-xOBwvs-g-ul5yLFD6BAcY7g/viewform?embedded=true" width="640" height="2785" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Go back to your assignment from the previous unit when you made a ball bounce around the boarder of the canvas. **_Start by making a copy of your code._** Next, refactor your code so that instead of using four if statements you only use two. Keep in mind that each time the ball hits a wall only the speed in one direction is inverted. Secondly, using some else and else if statements make the ball change in appearance depending on where it is on the screen.

Submit a link to your work on [Google Classroom](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYzMTY5Mjk2NTBa/details)
