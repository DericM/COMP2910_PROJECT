/**
 * WhiteHouse.
 *
 * @param {Grid} grid: Grid the WhiteHouse is on.
 * @param {number} column: Column of the WhiteHouse.
 * @param {number} row: Row of the WhiteHouse.
 * @param {Image} image: Image that represents the WhiteHouse.
 */
function WhiteHouse(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);
	var _visible = false;

	/**
	 * Draws the WhiteHouse if it is visible.
	 *
	 * @param {number} xCoord: X coordinate in pixels to draw the entities image to.
	 * @param {number} yCoord: Y coordinate in pixels to draw the entities image to.
	 */
	this.draw = function(xCoord, yCoord) {
		if (_visible) {
			grid.getContext().fillStyle = "#0000ff";
			grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};

    /**
     * Sets visibility property of the WhiteHouse.
     *
     * @param {boolean} visible: Visibility to set the WhiteHouse to.
     */
	this.setVisible = function(visible) {
		_visible = visible;
	};
}

//inheritance stuff
WhiteHouse.prototype = Object.create(Entity.prototype);
WhiteHouse.prototype.constructor = WhiteHouse;