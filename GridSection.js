function GridSection(image) {
	var image = image;
	this.draw = function(context, xOffset, yOffset) {
		if(image != null) {
			context.drawImage(image, xOffset, yOffset);
		}
	}

	this.setImage = function(newImage) {
		image = newImage;
	}
}