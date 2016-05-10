/* 
Object that everything that needs to be drawn should extend. Has methods
for sorting and coordinates.

INSTANCE xCoord: A canvas HTML element.
INSTANCE yCoord: The context of the canvas. The thing that you draw to.
Author: Brody
Date: Sat, 7
*/
function Drawable(zIndex, xCoord, yCoord) {
	var zIndex = zIndex;
	var xCoord = xCoord;
	var yCoord = yCoord;

	/* Compares the zIndex of drawable objects. 

	RETURNS 1: If this is large than paramater comparable.
	RETURN -1: If this is smaller than paramter comparable.
	RETURN 0: If this is equal to paramater comparable.
	*/
	this.compare = function(compA, compB) {
		if(compA > comparable.getZIndex()) {
			return 1;
		} else if(zIndex < comparable.getZIndex()) {
			return -1;
		} else {
			return 0;
		}
	}

	this.getZIndex = function() {
		return zIndex;
	}
}