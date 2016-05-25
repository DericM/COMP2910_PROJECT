/**
 * Holds entity objects and draws them onto a canvas
 * in the form of a grid. Entity objects include Donald
 * Trump, mines, and the whitehouse.
 *
 * @param {Canvas} canvas to paint grid to.
 */
function Grid(canvas) {
	var canvas = canvas;
	var context = canvas.getContext();
	var columns = 5;
	var rows = 7;
	var perc = 0.85;
	var width;
	var height;
	var xCoord;
	var yCoord;
	var entities;
	var sectionWidth;
	var sectionHeight;
	var trump;

	/**
	 * Determines the coordinates needed to draw the grid.
	 */
	this.setDimensions = function() {
		width = WIDTH * perc;
		height = width * rows / columns;
		if(height > HEIGHT * perc) {
			height = HEIGHT * perc;
			width = height * columns / rows;
		}
		xCoord = (WIDTH / 2) - (width / 2);
		yCoord = (HEIGHT / 2) - (height / 2);
		sectionWidth = width / columns;
		sectionHeight = height / rows;
	};

	/**
	 * Removes all entities from the grid.
	 */
	this.clearGrid = function() {
		for(var i = 0; i < columns; i++) {
			for(var j = 0; j < rows; j++) {
				entities[j][i] = null;
			}
		}
		canvas.clear();
	};

	/**
	 * Returns the number of columns.
	 *
	 * @returns {number} number of columns.
     */
	this.getColumns = function() {
		return columns;
	};

	/**
	 * Returns the number of rows.
	 *
	 * @returns {number} number of rows.
	 */
	this.getRows = function() {
		return rows;
	};

	/**
	 * Returns the width of the grid.
	 *
	 * @returns {number} The width of the grid.
     */
	this.getWidth = function() {
		return width;
	};

	/**
	 * Returns the height of the grid.
	 *
	 * @returns {number} The height of the grid.
	 */
	this.getHeight = function() {
		return height;
	};

	/**
	 * Returns the x coordinate of the grid.
	 *
	 * @returns {number} The x coordinate of the grid.
     */
	this.getXCoord = function() {
		return xCoord;
	};

	/**
	 * Returns the y coordinate of the grid.
	 *
	 * @returns {number} The y coordinate of the grid.
	 */
	this.getYCoord = function() {
		return yCoord;
	};

	/**
	 * Adds Donald Trump entity to the grid.
	 *
	 * @param {Trump} _trump: New trump to add to the grid.
	 */
	this.addTrump = function(_trump) {
		trump = _trump;
	};

	/**
	 * Moves Donald Trump entity to a different position on the grid and
	 * removes him from his previous position.
	 *
	 * @param oldCol Donald Trumps' previous column.
	 * @param oldRow Donald Trumps' previous row.
	 */
	this.moveTrump = function(oldCol, oldRow) {
		entities[trump.getRow()][trump.getColumn()] = trump;
		entities[oldRow][oldCol] = null;
	};

	/**
	 * Returns Donald Trump entity object.
	 *
	 * @returns {Trump} trump: Donald Trump.
	 */
	this.getTrump = function() {
		return trump;
	};

	/**
	 * Sets the contents of the grid.
	 *
	 * @param level2dArr 2d array containing a level to display
	 * on the grid.
	 */
	this.populate = function(level2dArr) {
		entities = level2dArr;
		rows = entities.length;
		columns = entities[0].length;
		this.setDimensions();
		trump.drawMovementX();
		this.init();
	};

	/**
	 * Sets the visibility property of the mines to the visible
	 * parameter and Trump and the WhiteHouse to the opposite
	 * of the visible parameter.
	 *
	 * @param {boolean} visible Used to set visibility property of entities.
	 */
	this.setFade = function(visible) {
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				if(entities[i][j] instanceof Fadable) {
					entities[i][j].setVisible(visible);
				}
				if(entities[i][j] instanceof Trump || entities[i][j] instanceof WhiteHouse) {
					entities[i][j].setVisible(!visible);
				}

			}
		}
		CANVAS_MANAGER.gameCanvas.draw();
	};

	this.showWhiteHouse = function() {
		for (i = 0; i < rows; i++) {
			for (j = 0; j < columns; j++) {
				if (entities[i][j] instanceof WhiteHouse) {
					entities[i][j].setVisible(true);
					return true;
				}
			}
		}
	}
	
	/**
	 * @returns {Context} context: The context the grid is painted to.
	 */
	this.getContext = function() {
		return context;
	};

	/**
	 * @returns {number} sectionWidth Width of individual grid section.
	 */
	this.getSectionWidth = function() {
		return sectionWidth;
	};

	/**
	 * @returns {number} sectionHeight Width of individual grid section.
	 */
	this.getSectionHeight = function() {
		return sectionHeight;
	};

	/**
	 * Draws the grid.
	 */
	this.draw = function() {
		var xOffset = xCoord;
		var yOffset = yCoord;
		for(var i = 0; i < rows; i++) {
			for(var j = 0; j < columns; j++) {
				/*context.beginPath();
				 context.rect(xOffset, yOffset, sectionWidth, sectionHeight);
				 context.closePath();
				 context.stroke();*/
				if(entities[i][j] != null) {
					entities[i][j].draw(xOffset, yOffset);
				}
				xOffset += sectionWidth;
			}
			xOffset = xCoord;
			yOffset += sectionHeight;
		}
	};

	/**
	 * Draws the grass.
	 */
	this.init = function() {
		var grass = false;
		var xOffset = xCoord;
		var yOffset = yCoord;
		for(var i = 0; i < rows; i++) {
			for(var j = 0; j < columns; j++) {
				if(grass) {
					CANVAS_MANAGER.backgroundCanvas.getContext().drawImage(
						RESOURCES.getImage("grass1"), xOffset, yOffset - 15, sectionWidth, sectionHeight + 15);
					grass = false;
				}
				else {
					CANVAS_MANAGER.backgroundCanvas.getContext().drawImage(
						RESOURCES.getImage("grass2"), xOffset, yOffset - 15, sectionWidth, sectionHeight + 15);
					grass = true;
				}
				xOffset += sectionWidth;
			}
			xOffset = xCoord;
			yOffset += sectionHeight;
		}
	};

	/**
	 * @param {number} column Column of section to return;
	 * @param {number} row Row of section to return.
	 * @returns {Entity} entity: Desired entity.
	 */
	this.getSectionAt = function(column, row) {
		return entities[row][column];
	};
}