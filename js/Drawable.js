function Drawable(image, xCoord, yCoord) {
	var image = image;
	var xCoord = 
	var yCoord;

	this.draw = function(context) {
		context.drawImage(image, xCoord, yCoord);
	}

	this.setImage = function(newImage) {
		image = image;
	}

	this.setX = function(newXCoord) {
		xCoord = newXCoord;
	}

	this.setY = function(newYCoord) {
		yCoord = newYCoord;
	}

	this.getImage = function() {
		return image;
	}

	this.getX = function() {
		return xCoord;
	}

	this.getY = function() {
		return yCoord;
	}
}