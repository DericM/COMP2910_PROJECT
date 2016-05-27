/**
 * WhiteHouse.
 *
 * @param {Grid} grid: Grid the WhiteHouse is on.
 * @param {number} column: Column of the WhiteHouse.
 * @param {number} row: Row of the WhiteHouse.
 * @param {Image} image: Image that represents the WhiteHouse.
 */
function WhiteHouse(grid, column, row, image) {
	Entity.call(this, grid, column, row, image, false);

	this.drawEntity = function() {
		if (this.visible == true) {
			var width = grid.getSectionWidth() * 1.5;
			var height = grid.getSectionHeight() * 1.5;
			CANVAS_MANAGER.gameCanvas.getContext().drawImage(this.image
				, this.xCoord - grid.getSectionWidth() * 0.25, this.yCoord - grid.getSectionHeight() *0.5, width, height);
		}
	}
}

//inheritance stuff
WhiteHouse.prototype = Object.create(Entity.prototype);
WhiteHouse.prototype.constructor = WhiteHouse;