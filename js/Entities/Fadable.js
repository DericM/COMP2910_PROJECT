/**
 * Entity object that can be made invisible.
 *
 * @param {Grid} grid: Grid the entity is on.
 * @param {number} column: Column of the entity.
 * @param {number} row: Row of the entity.
 * @param {Image} image: Image that represents the entity.
 */
function Fadable(grid, column, row, image) {
	Entity.call(this, grid, column, row, image);
	var visible = true;

    /**
     * Draws the entity if it is set to visible.
     *
     * @param {number} xCoord: X coordinate in pixels to draw the entities image to.
     * @param {number} yCoord: Y coordinate in pixels to draw the entities image to.
     */
	this.draw = function(xCoord, yCoord) {
		if(visible) {
			grid.getContext().fillStyle = "#FF0000";
			grid.getContext().fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
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

//inheritance stuff
Fadable.prototype = Object.create(Entity.prototype);
Fadable.prototype.constructor = Fadable;