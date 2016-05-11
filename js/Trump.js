/**
* inherits GridDrawable
*/
function Trump(column, row, image) {
	GridDrawable.call(this, grid, column, row, image);

	this.draw = function(xCoord, yCoord) {
		context.fillStyle = "CCC000";
		context.fillRect(xCoord, yCoord, grid.getSectionWidth(), grid.getSectionHeight());
	};

	/*trump moves up,down,left or right*/
	this.move = function(direction){
		if(direction == 'left')
			column--;
		else if(direction == 'right') 
			column++;
		else if(direction == 'up')
			row--;
		else
			row++;
		if(grid.getSectionAt(column, row) instanceof Fadable) {
			console.log("YOU'RE FIRED!!!!");
		} else {
			canvas1.getContext().draw();
		}
	};
}

//inheritance stuff
Trump.prototype = Object.create(GridDrawable.prototype);
Trump.prototype.constructor = Trump;