// Get the canvas from the HTML
var c=document.getElementById('canv');

var ctx=c.getContext("2d");

// Make the canvas full size
window.addEventListener("load",setDimensions);
window.addEventListener("resize",setDimensions);

var cx,cy,radius,angle2,angleSpeed;

// Run
setInterval(draw,15);

function setDimensions() {
	c.width=window.innerWidth;
	c.height=window.innerHeight;
	cx = c.width/2;
	cy = c.height/2;
	radius = 0;
	angleSpeed=0;	
};

var total_circles = 9;

function draw() {

	ctx.clearRect(0,0,c.width,c.height)

	for(i = 0; i < total_circles; i++){

		//ctx.strokeStyle = color;
		var angle = i * angleSpeed * Math.PI/total_circles;
		var x = cx + Math.cos(angle) * radius;
		var y = cy + Math.sin(angle) * radius;  	
		
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.stroke();
	}	
	
	//Increase the circle size (responsive)
	minSide = Math.min(window.innerHeight,window.innerWidth);

	// Control the circle growth
	while(radius<minSide/4){
		radius+=2.3
		angleSpeed += 1;
	}

	angleSpeed +=0.0005;

}