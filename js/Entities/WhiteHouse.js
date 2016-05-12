/**
* Inherits GridDrawable.
* Currently Acting as the MINE only.
*/
function WhiteHouse(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);

	this.draw = function(xCoord, yCoord) {
		grid.getContext().fillStyle = "#FFCCCC";
		grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
	}
}

//inheritance stuff
WhiteHouse.prototype = Object.create(Entity.prototype);
WhiteHouse.prototype.constructor = WhiteHouse;