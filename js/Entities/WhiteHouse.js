/**
* Inherits GridDrawable.
* Currently Acting as the MINE only.
*/
function WhiteHouse(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);
	var _visible = false;

	this.draw = function(xCoord, yCoord) {
		if (_visible) {
			grid.getContext().fillStyle = "#0000ff";
			grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};
	
	this.setVisible = function(visible) {
		_visible = visible;
	};
}

//inheritance stuff
WhiteHouse.prototype = Object.create(Entity.prototype);
WhiteHouse.prototype.constructor = WhiteHouse;