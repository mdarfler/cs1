function setup() {
	createCanvas(400, 400);
	//background(52,68,30);
	colorMode(HSB)
}

function draw(){
	if(frameCount>100) noLoop(), fill(0),ellipse(width/2,height/2,16,16);
	push();
	translate(width/2, height/2);
	rotate(frameCount);
	let petalSize = 100-frameCount;
	let h = randomGaussian(301,4);
	let b = randomGaussian(150,5);
	fill(h,30,b);
	ellipse(0,-8-petalSize,petalSize,2*petalSize);
	pop();
}
