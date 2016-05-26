/**
 * Entity object that can be made invisible.
 *
 * @param {Grid} grid: Grid the entity is on.
 * @param {number} column: Column of the entity.
 * @param {number} row: Row of the entity.
 * @param {Image} image: Image that represents the entity.
 */
function Mine(grid, column, row, image) {
	Entity.call(this, grid, column, row, image, true);
	/*
	 var frames = RESOURCES.getAnimation("mine");
	 var frame = 0;
	 var timer;
	 this.animate = function() {
	 timer = setInterval(this.animation, 30);
	 };

	 this.animation = function() {
	 this.image = frames[frame];
	 if(frames[frame + 1] == undefined) {
	 clearInterval(timer);
	 }
	 }.bind(this);

	 this.drawEntity = function() {

	 };
	 */
}

//inheritance stuff
Mine.prototype = Object.create(Entity.prototype);
Mine.prototype.constructor = Mine;