/**
* 
*
* {int} Width in pixels.
* {int} Height in pixels.
* {int} Number of columns.
* {int} Number of rows.
* {Canvas Context} To pass to the enities when they are generated.
*/
function Grid(width, height, columns, rows, context) {
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var context = context;
	var entities = [];
	var sectionWidth = width / columns;
	var sectionHeight = height / rows;

	this.populate = function(level) {
		entites = readLevel(level);
	}

	this.fadeEntities = function() {
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				if(!(entity instanceof Trump || entity instanceof WhiteHouse)) {
					entity.setInvisible();
				}
			}
		}
	}

	this.getSectionWidth = function() {
		return sectionWidth;
	}

	this.getSectionHeight = function() {
		return sectionHeight;
	}

	this.draw = function() {
		var xOffset = 0;
		var yOffset = 0;
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				entities[i][j].draw(xOffset, yOffset);
				yOffset += sectionHeight;
			}
			xOffset += sectionWidth;
		}
	}

	this.getSectionAt = function(column, row) {
		return entities[row][column];
	}
}