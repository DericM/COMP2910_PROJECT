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
}

//inheritance stuff
WhiteHouse.prototype = Object.create(Entity.prototype);
WhiteHouse.prototype.constructor = WhiteHouse;