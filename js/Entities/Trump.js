/**
 * Donald Trump.
 *
 * @param {Grid} grid: Grid that Trump is on.
 * @param {number} column: Column of Trump.
 * @param {number} row: Row of Trump.
 * @param {Image} image: Image that represents Trump.
 * @param {Game} game: The game.
 */
function Trump(_canvas, grid, column, row, image, _game) {
	Entity.call(this, grid, column, row, image, false);
	var canvas = _canvas;
	var game = _game;
	var lives = 0;
	var centerWidth = WIDTH / 2;
	var centerHeight = HEIGHT / 2;
	var rightMost = WIDTH;
	var bottomMost = HEIGHT;
	var keySwitch = false;

	var perc = 0.7;
	var width = WIDTH * perc;
	var height = width * 7 / 5;
	if(height > HEIGHT * perc) {
		height = HEIGHT * perc;
		width = height * 5 / 7;
	}
	var xCoord = (WIDTH / 2) - (width / 2);
	var yCoord = (HEIGHT / 2) - (height / 2);
    canvas.getCanvas().addEventListener("click", moveMe, false);

    /**
     * @returns {boolean} : If Trump is on a mine or the WhiteHouse it returns false,
     * if Trump is on an empty section it returns True.
     */
	this.checkState = function() {
		if (grid.getSectionAt(column, row) instanceof Fadable) {
			if (game.getLevel() === 0) {
				RESOURCES.playSound("snake_woman");
				canvas.getContext().drawImage(RESOURCES.getImage("snake"), grid.getXCoord(), grid.getYCoord(), grid.getWidth(), grid.getHeight());
                window.setTimeout(function() {
                    RESOURCES.pauseSound("snake_woman");
					CANVAS_MANAGER.uiCanvas.clear();
					GAME.getTrump().drawMoveThingy();
				}, 3000);
			}
			
			if (lives == 0) {
				// game.logScore();
				RESOURCES.playSound("neverbegreat");
				this.resetLives();
                grid.clearGrid();
                console.log("FUCL");
				POPUPS.drawPopup("death");
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

	/**
	 * Moves trump in the specified direction. (called by the mouse listener)
	 *
	 * @param {event} event  :
	 */
    function moveMe(event) {
        if(keySwitch) {
            var trump = GAME.getTrump();
            var oldX, oldY;
            oldX = column;
            oldY = row;
            var moved = false;
            var code = event.keyCode ? event.keyCode : event.which;
            var x = event.pageX - canvas.getCanvas().offsetLeft;
            var y = event.pageY - canvas.getCanvas().offsetTop;
            if (code == 38 || trump.isInside(xCoord, yCoord, centerWidth, centerHeight, xCoord + width, yCoord, x, y)) {
                //up
                if (row != 0) {
                    row--;
                    moved = true;
                }
            } else if (code == 39 || trump.isInside(xCoord + width, yCoord, centerWidth, centerHeight, xCoord + width, yCoord + height, x, y)) {
                //right
                if (column != grid.getColumns() - 1) {
                    column++;
                    moved = true;
                }
            } else if (code == 40 || trump.isInside(xCoord + width, yCoord + height, centerWidth, centerHeight, xCoord, yCoord + height, x, y)) {
                //down
                if (row != grid.getRows() - 1) {
                    row++;
                    moved = true;
                }
            } else if (code == 37 || trump.isInside(xCoord, yCoord, centerWidth, centerHeight, xCoord, yCoord + height, x, y)) {
                //left
                if (column != 0) {
                    column--;
                    moved = true;
                }
            }
            if(moved) {
                if (trump.checkState()) {
                    grid.moveTrump(oldX, oldY);
                }
            }
            CANVAS_MANAGER.gameCanvas.draw();
        }
    }

    this.drawMoveThingy = function() {
        var context = CANVAS_MANAGER.uiCanvas.getContext();
        context.beginPath();
        context.fillStyle = "#FFF";
        context.moveTo(xCoord, yCoord);
        context.lineTo(centerWidth, centerHeight);
        context.lineTo(xCoord + width, yCoord);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(centerWidth, centerHeight);
        context.lineTo(xCoord + width, yCoord + height);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(centerWidth, centerHeight);
        context.lineTo(xCoord, yCoord + height);
        context.closePath();
        context.stroke();
    };

    this.toggleListener = function (switcher) {
        keySwitch = switcher;
    };
    window.onkeydown = moveMe;



	/**
	 * checks whether point P(x, y) lies inside the triangle formed
	 * by A(x1, y1), B(x2, y2) and C(x3, y3)
	 *
	 * @param x1  :  x coordinate of the first triangle point
	 * @param y1  :  y coordinate of the first triangle point
	 * @param x2  :  x coordinate of the second triangle point
	 * @param y2  :  y coordinate of the second triangle point
	 * @param x3  :  x coordinate of the third triangle point
	 * @param y3  :  y coordinate of the third triangle point
	 * @param x   :  x coordinate of the clicked point
	 * @param y   :  y coordinate of the clicked point
	 * @returns {boolean}  :  whether the clicked point is inside the triangle
	 */
	this.isInside = function (x1, y1, x2, y2, x3, y3, x, y) {
        x1 += WINDOW_WIDTH;
        x2 += WINDOW_WIDTH;
        x3 += WINDOW_WIDTH;

		// Calculate area of triangle ABC
		var A = area(x1, y1, x2, y2, x3, y3);

		// Calculate area of triangle PBC
		var A1 = area(x, y, x2, y2, x3, y3);

		// Calculate area of triangle PAC
		var A2 = area(x1, y1, x, y, x3, y3);

		// Calculate area of triangle PAB
		var A3 = area(x1, y1, x2, y2, x, y);

		// Check if sum of A1, A2 and A3 is same as A
		return (A < (A1 + A2 + A3 + 1) && A > (A1 + A2 + A3 - 1));
	};

	/**
	 * Calculates the area of a triangle specified by 3 points.
	 *
	 * @param x1  :  x coordinate of the first triangle point
	 * @param y1  :  y coordinate of the first triangle point
	 * @param x2  :  x coordinate of the second triangle point
	 * @param y2  :  y coordinate of the second triangle point
	 * @param x3  :  x coordinate of the third triangle point
	 * @param y3  :  y coordinate of the third triangle point
	 * @returns {number}  :  the area of the triangle
	 */
	var area = function (x1, y1, x2, y2, x3, y3) {
		return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
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
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;
