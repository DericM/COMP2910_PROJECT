/**
* The object that every object that gets drawn on a grid should inherit.
*/
function Entity(grid, column, row, image) {
	var grid = grid;
	var column = column;
	var row = row;
	var image = image;
	
	this.draw = function(xCoord, yCoord) {		
		grid.getContext().drawImage(image, xCoord, yCoord);
	};
}