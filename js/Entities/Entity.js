/**
* The object that every object that gets drawn on a grid should inherit.
*/
function Entity(grid, column, row, imageSrc) {
	var grid = grid;
	var column = column;
	var row = row;
	var image = new Image();
	image.src = imageSrc;

	
	this.draw = function(xCoord, yCoord) {
			console.log("image");
			grid.getContext().drawImage(RESOURCES.getImage("trump"), xCoord, yCoord);
	};
}