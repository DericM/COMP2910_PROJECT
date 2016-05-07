function GridSection(column, row, ctx) {
	var location = new Point(column, row);
	var ctx = ctx;
	var entity;

	this.addEntity = function(entity) {
		entity = entity;
	}

	this.removeEntity = function() {
		entity = null;
	}

	this.getEntity = function() {
		return entity;
	}

	this.paintSection = function() {
		//tbd
		//if entity isn't null, get image from entity and draw it to the context.
	}
}