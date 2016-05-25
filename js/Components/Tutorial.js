function Tutorial() {
	//this.tutorialDone = false;
	//this.exDays = 365;
	
}

/*
Sets cookie for tutorial
-done: boolean (true / false) 
-exdays : number of days until the cookie expires
*/
Tutorial.prototype.setCookie = function(done, exdays) {
    //this.tutorialDone = done;
    //this.exDays = exdays;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "tutorialDone=" + done + "; " + expires;
};

Tutorial.prototype.readCookie = function() {
 	if (document.cookie) {
 		return true;
 	} else {
 		return false;
 	}
};

Tutorial.prototype.run = function(grid) {
	var canvas = CANVAS_MANAGER.gameCanvas;
	var width = canvas.getWidth();
	var height = canvas.getHeight();
	var ctx = canvas.getContext();
	
	grid.showWhiteHouse();
	canvas.draw();
	
	this.drawArrow(ctx, width, height);
	
	document.getElementById("container").onmousedown = function () {
		
		canvas.draw();
		
		window.setTimeout(function() {
			grid.setFade(false);
		}, 2000);
	}
	
};

Tutorial.prototype.drawArrow = function(ctx, width, height) {
	ctx.strokeStyle="#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(width / 2, height * 0.8);
	ctx.quadraticCurveTo(width * 0.75, height * 0.8, width / 2, height * 0.3);
	ctx.stroke();
	ctx.lineTo(width * 0.4, height * 0.4);
	ctx.stroke();
	ctx.moveTo(width / 2, height * 0.3);
	ctx.lineTo(width * 0.65, height * 0.4);
	ctx.stroke();
	
	ctx.font = (HEIGHT * 0.04) + "px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Guide Trump", width * 0.11, height * 0.45);
	ctx.fillText("to the White House", width * 0.11, height * 0.6);
}