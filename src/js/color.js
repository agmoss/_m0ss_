/**
 * ** RGB Fade Algorithm **
 * Code to product color alternating effect
 */
rgbAlgo();
function rgbAlgo(){
	
	// Canvas elements
	var c=document.getElementById('canv');
	var ctx=c.getContext("2d");

	// Start with red
	var r=255,g=0,b=0;

	setInterval(function(){

		if(r > 0 && b == 0){
			r--;
			g++;
		}
		if(g > 0 && r == 0){
			g--;
			b++;
		}
		if(b > 0 && g == 0){
			r++;
			b--;
		}

		var color = "rgb("+r+","+g+","+b+")";

		// Change the canvas circle color
		ctx.strokeStyle = color;

		// Change link color
		var css = `.cp{ color: ${color}}`;

		var style = document.createElement('style');

		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		document.getElementsByTagName('head')[0].appendChild(style);

	},50);

}