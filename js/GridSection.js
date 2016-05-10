function GridSection(image, point) {
	var containsImage;
	var image = image;
	var point = point;
	this.draw = function(context, xOffset, yOffset) {

	}

	this.setImage = function(newImage) {
		image = newImage;
	}

	this.containsImage = function() {
		return containsImage;
	}
}