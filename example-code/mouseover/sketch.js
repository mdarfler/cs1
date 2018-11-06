//Michael Darfler
//Mouse Over
//October 31, 2018

/* This sketch demonstrates different mouseover
and clicking behaviors based on the boolean
variables mouseInRec and mouseInCirc*/

let rec, circ;
let mouseInRec, mouseInCirc; //Boolean Variable
let bgFill;

function setup() {
	createCanvas(400, 400);

	//initialize rec and circ
	rec = {
		x: random(width),
		y: random(height),
		w: random(20, 100),
		h: random(20, 100)
	};
	circ = {
		d: random(10, 100),
		x: random(20, width),
		y: random(20, height)
	};

	//set initial background color
	bgFill = [200,100,100];
}

function draw() {
	//draw background with bgFill
	background(bgFill[0],bgFill[1],bgFill[2]);

	//Determine if the mouse in inside the rec or mouse
	mouseInRec =
		mouseX > rec.x &&
		mouseX < rec.x + rec.w &&
		mouseY > rec.y &&
		mouseY < rec.y + rec.h;
	mouseInCirc =
		dist(mouseX, mouseY, circ.x, circ.y) < circ.d / 2;

	//If mouse over rec change fill
	if (mouseInRec) {
		fill(120);
	} else {
		fill(0);
	}
	rect(rec.x, rec.y, rec.w, rec.h);

	//If mouse over circ change fill
	if (mouseInCirc) {
		fill(120);
	} else {
		fill(0);
	}
	ellipse(circ.x, circ.y, circ.d);
}

//Change background on mouse clicked based on
//what shape the mouse is over
function mouseClicked(){

	if(mouseInCirc){
		bgFill = [255,32,200];
	} else if (mouseInRec) {
		bgFill = [222,111,0];
	} else {
		bgFill = [220,220,220];
	}
}
