/**
* 
*
*
*/
function Grid(width, height, columns, rows, context) {
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var context = context;
	var entities = [];

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

	this.draw = function() {
		var xOffset = 0;
		var yOffset = 0;
		var sectionWidth = width / columns;
		var sectionHeight = height / rows;
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				entities[i][j].draw();
				yOffset += sectionHeight;
			}
			xOffset += sectionWidth;
		}
	}

	this.getSectionAt = function(column, row) {
		return entities[row][column];
	}
}