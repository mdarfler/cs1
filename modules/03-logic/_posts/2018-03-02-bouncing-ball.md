---
title: Bouncing ball
---
# {{page.title}}
If we think back to the last unit where we learned about variables we created a small simulation of a ball arcing across the screen as if it were being thrown in the presence of gravity. Something that looks like this:

<iframe width="560" height="210" frameborder="0" src="https://alpha.editor.p5js.org/embed/S1ZhzTEv7"></iframe>

But this is a little boring and repetitive. Let's look how how we might spice it up a bit.

## Boundary Conditions.

Let's say we want to imagine that the canvas that we're drawing on is a box with hard edges and that our ellipse is a super bouncy ball that bounces off the wall in a completely inelastic way, i.e. without losing any energy when it bounces. Great! But instead of tackling this whole problem at once, lets take a look at the problem in just one dimension.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LO3Awjn_gyU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

What Shiffman has shown us here should look something like this:
<iframe width="560" height="210" frameborder="0" src="https://alpha.editor.p5js.org/embed/HJZbL6Ewm"></iframe>

## Augmented Assignments
Let's take Shiffman's code a little further. Towards the end of the video he writes out the
```
x = x + speed;
```
This is great. Very clear, and unambiguous. As with any assignment operation you evaluate the right hand side first `x + speed` and you assign that value to the left hand side so that `x` is increased by the value `speed`. But it's also a little clunky to have to type that out all of the time. Which leads us to **augmented assignments** Becuase programmers are naturally lazy and this type of assignment operation happens a lot they came up with some short hand ways of changing variables and then reassigning them.

|Operator|The Verbose Way  | The Augmented Way|
|---|---|---|
|Addition|x = x + speed|x += speed|
|Subtraction|x = x - speed|x -= speed|
|Multiplication| x = x * speed|x *= speed|
|Division|x = x / speed|x /= speed|

So now we can rewrite that line of code as `x += speed`. Pretty Handy.
The next thing we have to tackle is how to get the ball to bounce back when it goes off the left hand side of the screen. It's not too much of a stretch to see that if we have one if statement that takes care of the right hand side, we could probably just put in another if statement to take care of the left side
```
if(x < 0){
  speed = 3;
}
```
That aught to do it. But now we have `speed` being redefined in three different places, at the beginning of the code, when it hits the right hand side, and when it hits the left hand side. What if we want to change the speed to make it go faster? Now we have to go through our code and change it in three places. This is not only boring, but prone to error.

## Once and Only Once
There is a concept in computer programming know as **Once and Only Once** (OAOO). The idea is that you should only define something once and then use good programming so that you don't have to hardcode it again. e.g. instead of typing
```
if(x > 600){
  speed = -3;
}
```
type
```
if(x > width){
  speed = -3;
}
```
if what you want is to have the ball change directions when it gets to the end of the canvas. In this way, if you change your canvas size, the functionality of your program doesn't change. With that in mind,
>can you think of a way of making the ball change direction without hardcoding in a new value?

## Comprehension Check
