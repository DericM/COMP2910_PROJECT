/**
* Inherits GridDrawable.
* Currently Acting as the MINE only.
*/
function Fadable(row, column, image) {
	GridDrawable.call(this, grid, column, row, image);
	var visible = true;

	this.draw = function(xCoord, yCoord) {
		canvas1.fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
	}
	this.setVisible = function(visible) {
		visible = visible;
	}
}

//inheritance stuff
Fadable.prototype = Object.create(GridDrawable.prototype);
Fadable.prototype.constructor = Fadable;