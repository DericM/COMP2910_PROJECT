
/* 
Creates a canvas and inserts it into the container div in index.html.

Author: Brody
Date: Sat, 7
*/
function Canvas(width, height) {
	var width = width;
	var height = height;
	var drawables = [];
	var canvas = document.createElement("canvas");
	canvas.style.border = "1px solid black";
	canvas.style.position = "absolute";
	document.getElementById("container").appendChild(canvas);
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
	var context = canvas.getContext("2d");

	this.getContext = function() {
		return context;
	};
	
	this.getCanvas = function () {
		return canvas;
	};

	this.getWidth = function() {
		return width;
	}

	this.getHeight = function() {
		return height;
	}

	/*
		Adds a drawable to the end of the drawables array.

		PARAM drawable: The drawable to be added.
	*/
	this.insertDrawable = function(drawable) {
		drawables.push(drawable);
		
	};

	/*
		Calls the draw method on all the drawables in the
		drawables array, which draws them all to the context
		of this canvas.
	*/
	this.draw = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		console.log("drawing");
		for (var i = 0; i < drawables.length; i++) {
			drawables[i].draw();
		}
	};

	/**
	 * Sets the visibility of the canvas html element this canvas object is
	 * associated with. Passing false removes it from the HTML dom tree,
	 * passing true adds it to the HTML dom tree.
	 *
	 * @param {boolean} visibility: True to add to dom tree, false to remove from.
     */
	this.setVisible = function(visibility) {
		if(visibility == false) {
			document.getElementById("container").removeChild(canvas);
		} else {
			document.getElementById("container").appendChild(canvas);
		}
	}
}
