function Grid(columns, rows, ctx) {
	var gridSections = [];
	var columns = columns;
	var rows = rows;
	for(i = 0; i < rows; i++) {
		gridSections[i] = [];
		for(j = 0; j < columns; j++) {
			gridSections[i][j] = new GridSection(i, j, ctx);
		}
	}

	this.getSectionAt = function(column, row) {
		return gridSections[row][column];
	}
}