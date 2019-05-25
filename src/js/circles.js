// Get the canvas from the HTML
var c=document.getElementById('canv');

var ctx=c.getContext("2d");

// Make the canvas full size
window.addEventListener("load",setDimensions);
window.addEventListener("resize",setDimensions);

var cx,cy,radius,angle2;

// Run
setInterval(draw,15,randomColor());

function setDimensions() {
	c.width=window.innerWidth;
	c.height=window.innerHeight;
	cx = c.width/2;
	cy = c.height/2;
	radius = 0;
	angleSpeed=0;	
};

var total_circles = 9;

function draw(color) {

	ctx.clearRect(0,0,c.width,c.height)

	for(i = 0; i < total_circles; i++){

		ctx.strokeStyle = color;
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
		radius+=1
		angleSpeed += 100000;
	}

	angleSpeed +=0.0005;

}


function randomColor() {

	// Choose a random color for the circles
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);

	var color = "rgb(" + x + "," + y + "," + z + ")";

	// Change link hover color
	var css = `.cp:hover{ color: ${color}}`;

	var style = document.createElement('style');

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	document.getElementsByTagName('head')[0].appendChild(style);

    return color
}
