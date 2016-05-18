/**
 * Item object that can be made invisible.
 *
 * @param {Grid} grid: Grid the entity is on.
 * @param {number} column: Column of the entity.
 * @param {number} row: Row of the entity.
 * @param {Image} image: Image that represents the entity.
 */
function SprayTan(grid, column, row, image) {
    Entity.call(this, grid, column, row, image, true);
}

//inheritance stuff
Fadable.prototype = Object.create(Entity.prototype);
Fadable.prototype.constructor = Fadable;
