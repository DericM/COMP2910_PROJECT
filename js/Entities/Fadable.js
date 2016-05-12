/**
* Inherits GridDrawable.
* Currently Acting as the MINE only.
*/
function Fadable(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);
	var _visible = true;

	this.draw = function(xCoord, yCoord) {
		if(_visible) {
			grid.getContext().fillStyle = "#FF0000";
			grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};
	
	this.setVisible = function(visible) {
		_visible = visible;
	};
}

//inheritance stuff
Fadable.prototype = Object.create(Entity.prototype);
Fadable.prototype.constructor = Fadable;