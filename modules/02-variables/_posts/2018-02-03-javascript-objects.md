---
title: Javascript Objects
---
# {{page.title}}
In this lesson we will look at one way in which we can keep our code well organized and easy to read. Javascript Objects can do many things, but for now we will use them to create a container of sorts to hold related variables.

## Refactoring
Refactoring code is a process by which code is restructured without changing the external behavior of the code. These small changes improve readability, reduce complexity, and make your code easier to maintain. Often times when writing code we are first focused on functionality—just getting the thing to work the way we want it. However, this can make for code that isn't as tidy as it ought to be. Maybe we have some hard coded variables in there that could be turned into variables. Maybe we have too many variables floating around that could be organized in a more thoughtful way. Throughout this semester we will often go back to existing code and refactor it. Think of this like proof reading an essay. We may not be changing the argument of the essay, but we're making it better organized and easier to read.

> By continuously improving the design of code, we make it easier and easier to work with. This is in sharp contrast to what typically happens: little refactoring and a great deal of attention paid to expediently adding new features. If you get into the hygienic habit of refactoring continuously, you'll find that it is easier to extend and maintain code.
— Joshua Kerievsky, Refactoring to Patterns

<script type="text/p5" data-autoplay data-width="250" data-preview-width="310" data-height="320">
var x = 150;
var y = 125;
var d = 60;
function setup(){
createCanvas(250, 250);
background(150);
}

function draw(){
  fill(0);
  ellipse(x, y, d);
}
</script>

<script type="text/p5" data-autoplay data-width="250" data-preview-width="310" data-height="320">
var circle = {
  x: 150,
  y: 125,
  d: 60
};

function setup(){
createCanvas(250, 250);
background(150);
}

function draw(){
  fill(0);
  ellipse(circle.x, circle.y, circle.d);
}
</script>



## Video Explanation
<iframe width="560" height="315" src="https://www.youtube.com/embed/-e5h4IGKZRY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScI4jP8cM3MGF4xAKuMkDDx-jjh-hsDtFOB8oK5UMUVm_bKeg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Refactor your code from 02-02 to use JavaScript Objects. Make sure that you make a copy of your code and rename it.

Submit a link to your code on [Google Classroom](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTYxMDQ1NTM4NDJa/details).
