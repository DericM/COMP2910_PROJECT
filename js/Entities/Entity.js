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
	this.column = _column;
	this.row = _row;
	this.image = _image;
	this.visible = _visible;
	this.xCoord = 0;
	this.yCoord = 0;

	/**
	 * Draws the image that represents the entity.
	 */
	this.drawEntity = function () {
		if (this.visible == true) {
			CANVAS_MANAGER.gameCanvas.getContext().drawImage(this.image
				, this.xCoord, this.yCoord, grid.getSectionWidth(), grid.getSectionHeight());
		}
	};

	this.updateEntity = function (delta) {
		this.setCoords();
	};

	this.setDimensions = function() {
		this.width = grid.getSectionWidth();
		this.height = grid.getSectionHeight();
	};

	/**
	 * Sets the visibility property of this Fadable.
	 *
	 * @param visibility
	 */
	this.setVisibility = function(visibility) {
		this.visible = visibility;
	};

	/**
	 * @returns {number} row: Trump's row.
	 */
	this.getRow = function() {
		return this.row;
	};

	/**
	 * @returns {number} column: Trump's column.
	 */
	this.getColumn = function() {
		return this.column;
	};

	this.setColumn = function(_column) {
		this.column = _column;
	};

	this.setRow = function(_row) {
		this.row = _row;
	};

	this.getXCoord = function() {
		return this.xCoord;
	};

	this.getYCoord = function() {
		return this.yCoord;
	};

	this.setCoords = function() {
		this.xCoord = this.column * grid.getSectionWidth() + grid.getXCoord();
		this.yCoord = this.row * grid.getSectionHeight() + grid.getYCoord();
	};
};