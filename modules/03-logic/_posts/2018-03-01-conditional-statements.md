---
title: Conditional Statements
---
# {{page.title}}
Up to this point we have had to be extremely specific with the direction that our programs can take. We start in setup and then proceed to the draw loop which executes the code inside again, and again, and again without variation. But what if we wanted to have our sketch to behave differently based on different conditions. Well you're in luck!

## Conditional logic

When we talk about making decisions in the computer it is usually in terms of evaluating boolean expressions that have the form:
```
if this, then that.
```
That is, if `this`(a boolean expression) is true, then do `that`. We can expand this to also say, if `this` is false (not true) then don't `that`

## Boolean Expression
What then is a Boolean Expression? A boolean expression is a statement that is either `true` or `false` examples include:
- "It is raining."
- "The world record for largest rubber band ball is 5,495 lbs."
- "I like cats."

All of these statements are either true or false. Examples of something that is not a boolean expression:
- "What color is the sky?"
- "Why are there so few unicorns left?"
- "How do you fix a leaky faucet?"

## Relational Operator
There are different ways of constructing boolean expressions, but one of the easiest ways of doing so is by using a relational operator. A relational operator tests the relationship between two things in your program and returns either `true` or `false`. e.g. 5 > 4 is `true`, while 5 > 6 is `false`. Let's take a look at some more relational operators.

|**Operator**|**symbol**|
|equal to|==|
|not equal to|!=|
|less than|<|
|greater than|>|
|less than or equal to|<=|
|greater than or equal to|>=|

These probably all make a fair amount of sense except maybe the first two. You might wonder, "Why do I have to use a double equals sign? That seems silly." And you're not wrong, but remember that we already saw `=` being used as an _assignment operator_. When we declare a variable we use `=` to assign a value to the variable. Computers, being what they are, can't figure out when you want `=` to be an assignment operator and when it's a relational operator, so we have to come up with a new symbol, hence the `==` (Spoiler, later on you very well might see `===` used. What's that mean?)

Next on the list is the _not equal_ operator. I'm sure some of you know how to write the ≠ (not equal) symbol on the computer, but not everyone does, and who wants to go hunting around every time you want to ask if two things are not the same. So, instead the ! (prn. "bang") is used. So, then why not `!==`? Great question.

## The `if` statement
Now the question becomes, "how do we put this into practice?" And the answer is the if statement. If we go back to that original formulation `if this, then that` we can expand this into some pseudocode.
```
if(this boolean expression is true){   //then <-That is a comment
  doThis();
}
```
Conversely if the boolean expression inside the `()` is false, then don't do `that`. Let's take a look at it in code.

<script type="text/p5" data-autoplay data-width="300" data-preview-width="260" data-height="400">
function setup(){
  createCanvas(200, 200);
  background(255);
}

function draw(){
  background(255);
  if(mouseX > width/2){
    fill(255,10,100);
    noStroke();
    ellipse(width/2, height/2, 40, 40);
  }
}
</script>

Try changing the expression inside of the `()` after the `if`. What happens?

## Video Explaination
<iframe width="560" height="315" src="https://www.youtube.com/embed/1Osb_iGDdjk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSeHxniZJ5szT7AZboTZmBMbOu5XFylcsr3XyGD5xZvKEpQ_gQ/viewform)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHxniZJ5szT7AZboTZmBMbOu5XFylcsr3XyGD5xZvKEpQ_gQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Create a sketch that uses conditional statements to create an ball that moves across the screen and increases in size up to a certain point. When the ball gets too big it returns to its original size. When it gets too far off the screen, it returns to the far side of the screen.

<iframe width="560" height="210" frameborder="0" src="https://alpha.editor.p5js.org/embed/HJewtdQwQ"></iframe>

Create a new sketch and submit a link on [Google Classroom](https://classroom.google.com/u/0/c/MTU5OTI3MjEzNTZa/a/MTYyNTYzOTYwODha/details)
