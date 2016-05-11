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
		entites = LEVELS.readLevel(level);
	};

	this.fadeEntities = function() {
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				if(entites[i][j] instanceof Fadables) {
					entities[i][j].setVisible(false);
				}
			}
		}
	};

	this.getSectionWidth = function() {
		return sectionWidth;
	};

	this.getSectionHeight = function() {
		return sectionHeight;
	};

	this.draw = function() {
		var xOffset = 0;
		var yOffset = 0;
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				entities[i][j].draw(xOffset, yOffset);
				xOffset += sectionWidth;
			}
			yOffset += sectionHeight;
		}
	};

	this.getSectionAt = function(column, row) {
		return entities[row][column];
	};
}