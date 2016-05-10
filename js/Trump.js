/*The Trump object*/
//initial position of trump 
var Trump = function(row, column) {
	
	this.row = row;
	this.column = column;
	var width = 50;
	var height = 25;
	var rows = 20;
	var columns = 20; 
	var trumpImg = new Image();
	

	this.draw =  function() {		
		trumpImg.onload = function(){
			context.drawImage(trumpImg, column * (width/columns), row * (height/rows), width, height);
		};
		trumpImg.src = 'trump.jpg';
	};

	/*trump moves up,down,left or right*/
	this.move = function(direction){
		//clear the canvas
		context.clearRect(0,0,canvas.width,canvas.height);
		
		if(direction == 'left')
			column-= canvas.width / columns;
		else if(direction == 'right') 
			column+= canvas.width / columns;
		else if(direction == 'up')
			row-= canvas.height / rows;
		else if(direction == 'down')
			row+= canvas.height / rows;

		this.draw();

	};
