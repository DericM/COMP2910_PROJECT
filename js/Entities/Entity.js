/**
 * Entity is a super class for Mines, Trump, and the WhiteHouse.
 * 
 * @param {Grid} _grid: Grid the entity is on.
 * @param {number} _column: Column of the entity.
 * @param {number} _row: Row of the entity.
 * @param {Image} _image: Image that represents the entity.
 */
function Entity(_grid, _column, _row, _image, _visible) {
	var grid = _grid;
	var column = _column;
	var row = _row;
    var image = _image;
	var visible = _visible;

    /**
     * Draws the image that represents the entity.
     *
     * @param {number} xCoord: X coordinate in pixels to draw the entities image to.
     * @param {number} yCoord: Y coordinate in pixels to draw the entities image to.
     */
	this.draw = function(xCoord, yCoord) {
		if(visible) {
			CANVAS_MANAGER.gameCanvas.getContext().drawImage(image, xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};

	/**
	 * Sets the visibility property of this Fadable.
	 *
	 * @param visible
	 */
	this.setVisible = function(_visible) {
		visible = _visible;
	};
}