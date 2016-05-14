/**
 * Entity is a super class for Mines, Trump, and the WhiteHouse.
 * 
 * @param {Grid} grid: Grid the entity is on.
 * @param {number} column: Column of the entity.
 * @param {number} row: Row of the entity.
 * @param {Image} image: Image that represents the entity.
 */
function Entity(_grid, _column, _row, _image) {
	var grid = _grid;
	var column = _column;
	var row = _row;
    var image = _image;

    /**
     * Draws the image that represents the entity.
     *
     * @param {number} xCoord: X coordinate in pixels to draw the entities image to.
     * @param {number} yCoord: Y coordinate in pixels to draw the entities image to.
     */
	this.draw = function(xCoord, yCoord) {
        //Need to fix resource manager.
        //grid.getContext().drawImage(, xCoord, yCoord);
	};
}