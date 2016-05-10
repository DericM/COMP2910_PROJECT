function GridSection(entity, point) {
		var entity = entity;
		var point = point;
		this.draw = function(context, xOffset, yOffset) {
			var xCoord = (sectionWidth / 2) + xOffset - (image.width / 2);
			var yCoord = (sectionHeight / 2) + yOffset - (image.height / 2);
			context.drawImage(image, xCoord, yCoord);
		};

		this.setEntity(newEntity) {
			entity = newEntity;
		};
		
		this.getEntity() {
			return entity;
		};
	};
