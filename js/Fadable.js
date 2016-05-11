/**
* Inherits GridDrawable.
* Currently Acting as the MINE only.
*/
function Fadable(grid, column, row, image) {
	GridDrawable.call(this, grid, column, row, image);
	var visible = true;

	this.draw = function(xCoord, yCoord) {
		if(visible) {
			grid.getContext().fillStyle = "#FF0000";
			grid.getContext() = fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	}
	this.setVisible = function(visible) {
		visible = visible;
	}
}

//inheritance stuff
Fadable.prototype = Object.create(GridDrawable.prototype);
Fadable.prototype.constructor = Fadable;