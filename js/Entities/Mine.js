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

	var frames = RESOURCES.getAnimation("explosion");
	var frame = 0;
	var timer;

	this.animate = function() {
		timer = setInterval(this.animation, 15);
	};

	this.animation = function() {
		this.yCoord -= grid.getSectionHeight() * 0.5;
		this.image = frames[frame];
		if(frames[++frame] == undefined) {
			clearInterval(timer);
			this.image = RESOURCES.getImage("mine");
			frame = 0;
		}
	}.bind(this);
}

//inheritance stuff
Mine.prototype = Object.create(Entity.prototype);
Mine.prototype.constructor = Mine;