---
title: Putting it Together
---

# Putting it all together
What if we wanted to have two object rotating on the screen at different rates? Since the  `translate()` and `rotate()` functions are cumulative, we could try to make a transformation for one object and then make another transformation relative the first, but that seems like an awful lot of math. It might just be easier to make them operate independently.

## [push()](https://p5js.org/reference/#/p5/push) [pop()](https://p5js.org/reference/#/p5/pop)

The `push()` function saves the current drawing style settings and transformations, while `pop()` restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with `push()`, it builds on the current style and transform information. The `push()` and `pop()` functions can be embedded to provide more control.


<script type="text/p5" data-autoplay data-width="360" data-preview-width="300" data-height="600">
function setup() {
	createCanvas(260, 260);
	rectMode(CENTER);
	angleMode(DEGREES);

}

function draw() {
	background(200);
	fill(255,200);
	noStroke();

	push();
	translate(width / 2, height / 2);
	rotate(frameCount * 2);
	rect(0, 0, 100, 100);
	pop();

	push();
	translate(width / 4, height / 2);
	rotate(-frameCount * 3);
	rect(width / 8, height / 8, 40, 40);
	pop();
}

</script>

## Video Explanation
<iframe width="600" height="400" src="https://www.youtube.com/embed/o9sgjuh-CBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [Comprehension Check](https://docs.google.com/forms/d/e/1FAIpQLSfmuni30Edd6lh_THso86nQuFR0h-yKru-RNrBQi8zClHnlOA/viewform?usp=sf_link)
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfmuni30Edd6lh_THso86nQuFR0h-yKru-RNrBQi8zClHnlOA/viewform?embedded=true" width="640" height="2249" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

## [Assignment](https://classroom.google.com/u/1/c/MTU5OTI3MjEzNTZa/a/MjY0ODA4ODI5MzBa/details)
Create a sketch that mimics that repeating pattern of the camellia flower.

[![](https://cdn.webvanta.com/000000/51/74/slider_detail/uploads/plant_family/1480439658-3c3b97dd76fcdaef7/57142905_m.jpg)](https://www.gardenia.net/plant-variety/Camellias-Japonica)
<p class="caption"><a href="https://www.gardenia.net/plant-variety/Camellias-Japonica">www.gardenia.net/plant-variety/Camellias-Japonica</a></p>

In order to do so you will need to consider:
- how to approximate the shape of the petal
- how the petal rotates around the center
- how the petal changes as it rotates
- the order in which the petals are drawn
- when to stop drawing

Here is an example of what your sketch might look like
<iframe width="600" height="410" frameborder="0" src="https://editor.p5js.org/mdarfler/embed/HJ0b7ArR7"></iframe>
