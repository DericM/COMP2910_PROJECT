/**
 * Donald Trump.
 *
 * @param {Grid} grid: Grid that Trump is on.
 * @param {number} column: Column of Trump.
 * @param {number} row: Row of Trump.
 * @param {Image} image: Image that represents Trump.
 * @param {Game} game: The game.
 */
function Trump(grid, column, row, image, game) {
	Entity.call(this, grid, column, row, image, false);
	var game = game;
	var lives = 3;


	/**
	 * Sets Trump's location.
	 *
	 * @param {number} _column: New column to set Trump to.
	 * @param {number} _row: New row to set Trump to.
	 */
	this.setLocation = function(_column, _row) {
		column = _column;
		row = _row;
	};

    /**
     * Sets Trump's location.
     *
     * @param {number} _column: New column to set Trump to.
     * @param {number} _row: New row to set Trump to.
     */
	this.setLocation = function(_column, _row) {
		column = _column;
		row = _row;
	};

    /**
     * @returns {number} row: Trump's row.
     */
	this.getRow = function() {
		return row;
	};

    /**
     * @returns {number} column: Trump's column.
     */
	this.getColumn = function() {
		return column;
	};

    /**
     * Sets Trump's lives to the maximum amount of lives.
     */
	this.resetLives = function() {
		lives = 3;
	};

    /**
     * Moves Trump one column and calls to check what was is in the
     * location he moved to.
     *
     * @param {String} direction: Direction to move Trump in.
     */
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

    /**
     * @returns {boolean} : If Trump is on a mine or the WhiteHouse it returns false,
     * if Trump is on an empty section it returns True.
     */
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
				// game.logScore();
				this.resetLives();
				game.newGame();
			} else {
				lives--;
				game.setupLevel(false);
				
			}
			return false;
		} else if(grid.getSectionAt(column, row) instanceof WhiteHouse) {
			game.setupLevel(true);
			return false;
		}
		return true;
	};
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;
