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
	var lives = 2;
    var maxLives = 2;
	var centerX;
	var centerY;
    var leftX;
	var rightX;
    var topY;
	var bottomY;
	var keySwitch = false;
	var xCoord;
	var yCoord;
    canvas.getCanvas().addEventListener("touchstart", moveMe, false);

    /**
     * Determines the coordinates needed to draw the X over
     * the grid.
     */
    this.setDimensions = function() {
        xCoord = grid.getXCoord();
        yCoord = grid.getYCoord();
        centerX = WIDTH / 2;
        centerY = HEIGHT / 2;
        leftX = grid.getXCoord();
        rightX = grid.getXCoord() + grid.getWidth();
        topY = grid.getYCoord();
        bottomY = grid.getYCoord() + grid.getHeight();
    };

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
					GAME.getTrump().drawMovementX();
				}, 3000);
			} else if (lives != 0) {
				RESOURCES.playSound("explosion");
				window.setTimeout(function() {
					RESOURCES.playSound("low_energy");
				}, 550);
			}
			
			if (lives == 0) {
				game.logScore();
				RESOURCES.playSound("neverbegreat");
				this.resetLives();
                grid.clearGrid();
                DEFEAT.setVisibility(true);
                
			} else {
				lives--;
				game.setupLevel(false);
			}
            return false;
		} else if(grid.getSectionAt(column, row) instanceof WhiteHouse) {
			game.setupLevel(true);
			return false;
		} else if (grid.getSectionAt(column, row) instanceof Star) {
            console.log("star");
			RESOURCES.playSound("star");
            return true;
        } else if (grid.getSectionAt(column, row) instanceof Certificate) {
            console.log("certificate");
			RESOURCES.playSound("certificate");
            return true;
        } else if (grid.getSectionAt(column, row) instanceof SprayTan) {
            console.log("spraytan");
			RESOURCES.playSound("spraytan");
            return true;
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
            if (code == 38 || trump.isInside(xCoord, yCoord, centerX, centerY, rightX, yCoord, x, y)) {
                //up
                if (row != 0) {
                    row--;
                    moved = true;
                }
            } else if (code == 39 || trump.isInside(rightX, yCoord, centerX, centerY, rightX, bottomY, x, y)) {
                //right
                if (column != grid.getColumns() - 1) {
                    column++;           
                    moved = true;
                }
            } else if (code == 40 || trump.isInside(rightX, bottomY, centerX, centerY, xCoord, bottomY, x, y)) {
                //down
                if (row != grid.getRows() - 1) {
                    row++;
                    moved = true;
                }
            } else if (code == 37 || trump.isInside(xCoord, yCoord, centerX, centerY, xCoord, bottomY, x, y)) {
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

    /**
     * Draws the movement X.
     */
    this.drawMovementX = function() {
        this.setDimensions();

        /*
        var context = CANVAS_MANAGER.uiCanvas.getContext();
        context.beginPath();
        context.fillStyle = "#FFF";
        context.moveTo(xCoord, yCoord);
        context.lineTo(centerX, centerY);
        context.lineTo(rightX, yCoord);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(rightX, bottomY);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(xCoord, bottomY);
        context.closePath();
        context.stroke();

        */
    };

    /**
     * Turns the listeners for arrow keys presses and movement X
     * off so the user canot move trump.
     * 
     * @param switcher
     */
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
        lives = maxLives;
    };
}

//inheritance stuff
Trump.prototype = Object.create(Entity.prototype);
Trump.prototype.constructor = Trump;
