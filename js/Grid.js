/**
* 
*
* {int} Width in pixels.
* {int} Height in pixels.
* {int} Number of columns.
* {int} Number of rows.
* {Canvas Context} To pass to the enities when they are generated.
*/
function Grid(context, width, height, columns, rows) {
	var context = context;
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var entities;
	var sectionWidth = width / columns;
	var sectionHeight = height / rows;

	this.populate = function(level2dArr) {
		entities = level2dArr;
	}

	this.setFade = function(visible) {
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				if(entities[i][j] instanceof Fadable) {
					entity.setVisible(visible);
				}
			}
		}
	}

	this.getContext = function() {
		return context;
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
				context.rect(xOffset, yOffset, sectionWidth, sectionHeight);
				context.stroke();
				if(entities[i][j] != null) {
					entities[i][j].draw(xOffset, yOffset);
				} 
				xOffset += sectionWidth;
			}
			xOffset = 0;
			yOffset += sectionHeight;
		}
	}

	this.getSectionAt = function(column, row) {
		return entities[row][column];
	}
}