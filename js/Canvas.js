
/* 
Creates a canvas and inserts it into the container div in index.html.

Author: Brody
Date: Sat, 7
*/
function Canvas() {
	var drawables = [];
	var canvas = document.createElement("canvas");
	canvas.style.width = "360px";
	canvas.style.height = "640px";
	canvas.style.border = "1px solid black";
	document.getElementById("container").appendChild(canvas);
	var context = canvas.getContext("2d");
	this.getContext = function() {
		return context;
	};

	/*
		Adds a drawable to the end of the drawables array.

		PARAM drawable: The drawable to be added.
	*/
	this.insertDrawable = function(drawable) {
		for(var i = 0; i < drawables.length(); i++) {
			if(drawable.compare(drawables[i]) >= 0) {

			}
		}
	};

	/*
		Calls the draw method on all the drawables in the
		drawables array, which draws them all to the context
		of this canvas.
	*/
	this.draw = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < drawables.length(); i++) {
			drawables[i].draw();
		}
	};

	/*
		An insertion sort that I copied from the internet. Insertion sort
		because only 1-3 objects will be out of order. You will need to use
		this if you change the zIndex of objects. 

		COULD BE FUCKED.

		author: Brody
	*/
	this.insertionSort = function() {
		var len = drawables.length;
		for(var i = 0; i < len; i++) {
			var tmp = drawables[i]; 
			for(var j = i - 1; j >= 0 && (drawables[j].compare(tmp) == 1); j--) {
				drawables[j+1] = drawables[j];
			}
			drawables[j+1] = tmp;
		}
	};
}