/**
* inherits GridDrawable
*/
function Trump(grid, column, row, image, game) {
	Entity.call(this, grid, column, row, image);
	var game = game;
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

	this.setLocation = function(_column, _row) {
		column = _column;
		row = _row;

	};
	
	this.getRow = function() {
		return row;w
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
			if (column > 0) {
				column--;
				if(this.checkState()) {
					grid.moveTrump(oldX, oldY);
				}

			}
		} else if(direction == 'right') {
			if (column < 4) {
				column++;
				if(this.checkState()) {
					grid.moveTrump(oldX, oldY);
				}
			}
		} else if(direction == 'up') {
			if (row > 0) {
				row--;
				if(this.checkState()) {
					grid.moveTrump(oldX, oldY);
				}
			}
		} else if(direction == 'down') {
			if (row < 6) {
				row++;
				if(this.checkState()) {
					grid.moveTrump(oldX, oldY);
				}
			}
		}
		CANVAS_MANAGER.gameCanvas.draw();
	};
	
	this.checkState = function() {
		if (grid.getSectionAt(column, row) instanceof Fadable) {
			console.log("HIT A MINE");
			game.newGame();
			return false;
		} else if(grid.getSectionAt(column, row) instanceof WhiteHouse) {
			console.log("WIN");
			game.setupLevel();
			return false;
		}
		return true;
	};
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;