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
    var perc = 0.7;
	var width = WIDTH * perc;
	var height = width * 7 / 5;
    if(height > HEIGHT * perc) {
        height = HEIGHT * perc;
        width = height * 5 / 7;
    }
    var xCoord = (WIDTH / 2) - (width / 2);
    var yCoord = (HEIGHT / 2) - (height / 2);
	var entities;
	var sectionWidth = width / columns;
	var sectionHeight = height / rows;
	var trump;
	var trumpRow;
	var trumpCol;

	this.getWidth = function() {
		return width;
	};


	this.getHeight = function() {
		return height;
	};

	this.getXCoord = function() {
		return xCoord;
	};

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
		trumpCol = trump.getColumn();
		trumpRow = trump.getRow();
		entities[trumpRow][trumpCol] = trump;
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
                context.beginPath();
				context.rect(xOffset, yOffset, sectionWidth, sectionHeight);
                context.closePath();
				context.stroke();
				if(entities[i][j] != null) {
					entities[i][j].draw(xOffset, yOffset);
				} 
				if(entities[i][j] instanceof Trump) {
					trump = entities[i][j];
					trumpRow = i;
					trumpCol = j;
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