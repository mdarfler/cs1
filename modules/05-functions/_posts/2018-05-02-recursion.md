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

```
let total = 0;
for(let i = 1; i <= 5; i++){
  total = total * i
}
console.log(total);
}
```
<script type="text/p5" data-autoplay data-width="600" data-preview-width="0" data-height="400">
let total = 0;
for(let i = 1; i <= 5; i++){
  total = total * i
}
console.log(total);
</script>
