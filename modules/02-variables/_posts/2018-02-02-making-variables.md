---
title: Making Variables
---
# Making variables
In the previous unit we looked at using the built in system variables `mouseX` and `mouseY`, but what if we want to define our own variables to use?

## Computer Memory
One of the core elements of a computer is the ability to store things in memory. You can store programs, images, text files, movies, just about anything you want as long as its digital. When we programming we can tell the computer to store certain pieces of information that are useful to us. One thing that we might store is a **variable**. A lot of things happen in the background when we do this, but heres the basic idea:
1. Ask the computer to find some free memory where we can store something.
1. Give that space in memory a name that we can easily remember.
1. Give the computer something to put into memory.

Once we have that space in memory assigned to the variable we can ask the computer to retrieve that information by using the name that we gave it when we created the variable. We can even change that variable and then tell the computer to store a new value in the same place. Think of it like a storage locker. The computer has a bunch of memory lockers that we can store things in for safe keeping and if we want to get back what we stored there all we have to do is remember the name of the locker.
[![storage lockers](https://www.ezrshelving.com/user/products/large/lockers/autumn-door-colour-lockers2.jpg)](https://www.ezrshelving.com/probe-storage-lockers-autumn-range.html)
<p class="caption">https://www.ezrshelving.com/probe-storage-lockers-autumn-range.html</p>

## Variables in JavaScript
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bn_B3T_Vbxs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Comprehension Check
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5S-tBXSNeVS1GywAg0z8w6w8lZnOCo2_i7DkdNaIxihTR8w/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## Assignment
Living here on planet earth, objects have to obey the law of gravity. Gravity is a force that causes things to accelerate towards earth. This means that while the acceleration that an object experiences is constant, its velocity continues to increase. We could think of an objects y-velocity `velY` at time _t+1_ to be its y-velocity at time _t_ + y-acceleration `accelY` and the objects y-location at time _t+1_ to be its y-location `locY` at time _t_ + y-velocity at time _t+1_ or in other words:

```
velY = velY + acceY
locY = locY + velY
```

Create a p5.js sketch that uses variables `locY, velY, accelY` to create a simple simulation of a ball falling with gravity. Follow the following steps
1. Declare and initialize all variables.
2. create a canvas to draw on
3. update the position of an ellipse experiencing gravity.

**Bonus** Can you give the ellipse an initial X and Y velocity so that it isn't just falling straight down? 10 extra points if you can create a sketch where a ball starts in the bottom left corner of the screen, touches the top-center of the screen and falls off the screen in the bottom right using only the acceleration of gravity.

Submit a link to your p5.js sketch on [Google Classroom](https://classroom.google.com/c/MTU5OTI3MjEzNTZa/a/MTYwNjA5MzIzMDZa/details)
