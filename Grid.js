function Grid(width, height, columns, rows, context) {
	var width = width;
	var height = height;
	var columns = columns;
	var rows = rows;
	var gridSections = [];

	function GridSection(image, point) {
		var containsImage;
		var image = image;
		var point = point;
		this.draw = function(context, xOffset, yOffset) {
			var xCoord = (sectionWidth / 2) + xOffset - (image.width / 2);
			var yCoord = (sectionHeight / 2) + yOffset - (image.height / 2);
			context.drawImage(image, xCoord, yCoord);
		}

		this.setImage = function(newImage) {
			image = newImage;
		}

		this.containsImage = function() {
			return containsImage;
		}
	}

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

	this.insertAt = function(image, column, row) {
		gridSections[row][column] = gridSection;
	}
}