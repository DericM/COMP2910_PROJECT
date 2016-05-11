function GridSection(entity, point) {
	var entity = entity;

	var point = point;

	this.setEntity = function(newEntity) {
		entity = newEntity;
	};

	this.getEntity = function() {
		return entity;
	};
};
