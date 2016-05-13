/**
* inherits GridDrawable
*/
function Trump(grid, column, row, image, game) {
	Entity.call(this, grid, column, row, image);
	var game = game;
	var lives = 3;
	var _visible = false;
	/**
	* Temporary draw method. Draws Trump as a rectangle. Once we have a trump image and
	* a working grid, delete method and pass trump an image. 
	*
	* @param {int} xCoord: x coordinate to draw Trump at.
	* @param {int} yCoord: y coordinate to draw Trump at.
	*/
	
	this.draw = function(xCoord, yCoord) {
		if (_visible) {
			grid.getContext().fillStyle = "#FFFF00";
			grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};
	
	this.setVisible = function(visible) {
		_visible = visible;
	};

	this.setLocation = function(_column, _row) {
		column = _column;
		row = _row;
	};
	
	this.getRow = function() {
		return row;
	};
	
	this.getColumn = function() {
		return column;
	};
	
	this.resetLives = function() {
		lives = 3;
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
			
			if (game.getLevel() === 0) {
				laugher = document.createElement("audio");
				laugher.setAttribute("src", "sound_test/snake_woman.ogg");
				laugher.setAttribute("type", "audio/ogg");
				laugher.play();

				var witch = document.createElement("img");
				witch.setAttribute("src", "sound_test/snake_woman.jpg");
				witch.setAttribute("width", "345");
				witch.setAttribute("height", "470");
				witch.setAttribute("id", "snake_woman");
				//witch.style.marginLeft = "162px";
				witch.style.visibility = "visible";
				witch.style.display = "block";
				witch.style.margin = "auto";
				witch.style.paddingTop = "90px";
				var container = document.getElementById("container");
				container.appendChild(witch);

				window.setTimeout(function() {
					laugher.pause();
					laugher.currentTime = 0;

					witch = document.getElementById("snake_woman");
					witch.style.display="none";
					container.removeChild(witch);
					
				}, 3000);
			}
			
			if (lives == 0) {
				this.resetLives();
				game.newGame();
			} else {
				lives--;
				game.setupLevel(true);
				
			}
			return false;
		} else if(grid.getSectionAt(column, row) instanceof WhiteHouse) {
			console.log("WIN");
			
			game.setupLevel(false);
			return false;
		}
		return true;
	};
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;