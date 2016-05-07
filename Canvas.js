
/* Canvas Object. 
Author: Brody
Date: Sat, 7
*/
function Canvas() {
	//Generates Canvas and adds it to the html file.
	var canvas = document.createElement("canvas");
	canvas.style.width = "360px";
	canvas.style.height = "640px";
	canvas.style.border = "1px solid black";
	document.getElementById("container").appendChild(canvas);

	//Generates canvas context.
	var ctx = canvas.getContext("2d");

	/* Returns the 2d context of this specific canvas */
	this.getContext = function() {
		return ctx;
	}
}