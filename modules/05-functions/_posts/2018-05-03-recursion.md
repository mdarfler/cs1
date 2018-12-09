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
