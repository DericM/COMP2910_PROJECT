
/* 
Creates a canvas and inserts it into the container div in index.html.

INSTANCE drawables: Array of objects to be drawn on the canvas.
INSTANCE canvas: A canvas HTML element.
INSTANCE context: The context of the canvas. The thing that you draw to.
Author: Brody
Date: Sat, 7
*/
function Canvas() {
	var drawables = []
	var canvas = document.createElement("canvas");
	canvas.style.width = "360px";
	canvas.style.height = "640px";
	canvas.style.border = "1px solid black";
	document.getElementById("container").appendChild(canvas);
	var context = canvas.getContext("2d");
	this.getContext = function() {
		return context;
	}

	/*
		Adds a drawable to the end of the drawables array.

		PARAM drawable: The drawable to be added.
	*/
	this.addDrawable = function(drawable) {
		drawables.push(drawable);
	}

	/*
		Calls the draw method on all the drawables in the
		drawables array, which draws them all to the context
		of this canvas.
	*/
	this.draw = function() {
		for (var i = 0; i < drawables.length(); i++) {
			drawables[i].draw();
		}
	}
}