/**
* inherits GridDrawable
*/
function Trump(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);

	/**
	* Temporary draw method. Draws Trump as a rectangle. Once we have a trump image and
	* a working grid, delete method and pass trump an image. 
	*
	* @param {int} xCoord: x coordinate to draw Trump at.
	* @param {int} yCoord: y coordinate to draw Trump at.
	*/
	this.draw = function(xCoord, yCoord) {
		grid.getContext().fillStyle = "#FFFF00";
		grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
	};
	
	this.getRow = function() {
		return row;
	};
	
	this.getColumn = function() {
		return column;
	};

	/*trump moves up,down,left or right*/
	this.move = function(direction){
		var oldX, oldY;
		oldX = column;
		oldY = row;
		if(direction == 'left') {
			column--;
			grid.moveTrump(oldX, oldY);
		} else if(direction == 'right') {
			column++;
			grid.moveTrump(oldX, oldY);
		} else if(direction == 'up') {
			row--;
			grid.moveTrump(oldX, oldY);
		} else if(direction == 'down') {
			row++;
			grid.moveTrump(oldX, oldY);
		}
		if(grid.getSectionAt(column, row) instanceof Fadable) {
			console.log("YOU'RE FIRED!!!!");
		} 
		CANVAS_MANAGER.gameCanvas.draw();
	};
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;