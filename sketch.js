r = [];
s = [];

var rep = 0,
	cWidth = 400,
	cHeight = 800,
	fps = 30,
	length = 100,
	rwidth = (cHeight-100)/length,
	mode = "quick";

function setup() {
	var canvas = createCanvas(cHeight,cWidth);
	canvas.parent('sketch-holder');
	fill(255, 255, 255);
	frameRate(fps);
	for(i = 0; i < length; i++){
		r[i] = (Math.random()*300);
	}
}

function draw() {
	background(51);
	fill(255, 255, 255);
	text("Position in Array: " + rep,10,15);
	text("Sorting Algorithm: " + mode + " sort",10, 30);
	text("Sorted: " + isSorted(r),10, 45);
	text("FPS: " + fps,10, 60);
	if(isSorted(r)){
		rep = "done";
		for(i = 0; i < 35; i++){
			fill(0,0+(i*5),0);
			s[i] = rect((i*rwidth)+50,350,rwidth,-r[i]);
		}
	}
	for(i=0; i < length; i++){
		s[i] = rect((i*rwidth)+50,350,rwidth,-r[i]);
	}
	
	if(mode == "selection"){
		selectionStep(r, rep);
	} else if (mode == "bubble"){
		bubbleStep(r, rep);
	}

	if (rep < length){
		rep++;
	} else if (rep == length) {
		rep = 0;	
	}
}
