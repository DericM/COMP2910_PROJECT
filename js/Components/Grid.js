/**
* 
*
* {int} Width in pixels.
* {int} Height in pixels.
* {int} Number of columns.
* {int} Number of rows.
* {Canvas Context} To pass to the enities when they are generated.
*/
function Grid(context, xCoord, yCoord, width, height, columns, rows) {
	Drawable.call(this, xCoord, yCoord);
	var context = context;
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var entities;
	var sectionWidth = width / columns;
	var sectionHeight = height / rows;
	var trump;
	var trumpRow;
	var trumpCol;

	this.addTrump = function(_trump) {
		trump = _trump;
	};

	this.moveTrump = function(oldCol, oldRow) {
		trumpCol = trump.getColumn();
		trumpRow = trump.getRow();
		entities[trumpRow][trumpCol] = trump;
		entities[oldRow][oldCol] = null;

	};
	
	this.getTrump = function() {
		return trump;
	};

	this.populate = function(level2dArr) {
		entities = level2dArr;
	};

	this.setFade = function(visible) {
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				if(entities[i][j] instanceof Fadable) {
					entities[i][j].setVisible(visible);
				}
			}
		}
		CANVAS_MANAGER.gameCanvas.draw();
	};

	this.getContext = function() {
		return context;
	};

	this.getSectionWidth = function() {
		return sectionWidth;
	};

	this.getSectionHeight = function() {
		return sectionHeight;
	};

	this.draw = function() {
		var xOffset = xCoord;
		var yOffset = yCoord;
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				context.rect(xOffset, yOffset, sectionWidth, sectionHeight);
				context.stroke();
				if(entities[i][j] != null) {
					entities[i][j].draw(xOffset, yOffset);
				} 
				if (entities[i][j] instanceof Trump) {
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

	this.getSectionAt = function(column, row) {
		return entities[row][column];
	}
}

Grid.prototype = Object.create(Drawable.prototype);
Grid.prototype.constructor = Grid;