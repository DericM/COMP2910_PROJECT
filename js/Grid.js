function Grid(width, height, columns, rows, context) {
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var gridSections = [];
	for(i = 0; i < rows; i++) {
		gridSections[i] = [];
		for(j = 0; j < columns; j++) {
			gridSections[i][j] = new GridSection();
		}
	}

	this.draw = function(context) {
		var xOffset = 0;
		var yOffset = 0;
		var sectionWidth = width / columns;
		var sectionHeight = height / rows;
		for(i = 0; i < rows; i++) {
			for(j = 0; j < columns; j++) {
				gridSections[i][j].draw(context, xOffset, yOffset);
				yOffset += sectionHeight;
			}
			xOffset += sectionWidth;
		}
	}

	this.getSectionAt = function(column, row) {
		return gridSections[row][column];
	}

	this.insertAt = function(drawable, column, row) {
		var[row][column]. = drawable;
	}
}