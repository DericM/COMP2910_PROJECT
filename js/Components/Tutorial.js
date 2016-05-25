/**
 * Creates a tutorial object.
 */
function Tutorial() {}

/**
 * Sets a cookie once the tutorial on-boarding has been completed.
 * @param done boolean whether the tutorial has been completed
 * @param exdays the number of days until the cookie expires
 */
Tutorial.prototype.setCookie = function(done, exdays) {
    //this.tutorialDone = done;
    //this.exDays = exdays;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "tutorialDone=" + done + "; " + expires;
};

/**
 * Determines whether a cookie exists, to determine whether
 * the tutorial should be run.
 */
Tutorial.prototype.readCookie = function() {
 	if (document.cookie) {
 		return true;
 	} else {
 		return false;
 	}
};

/**
 * Initializes and runs the tutorial.
 */
Tutorial.prototype.run = function(grid) {
	var myThis = this;
	var canvas = CANVAS_MANAGER.gameCanvas;
	var width = canvas.getWidth();
	var height = canvas.getHeight();
	var ctx = canvas.getContext();
	
	grid.showWhiteHouse();
	canvas.draw();
	
	myThis.drawArrow(ctx, width, height);
	
	document.getElementById("container").onmousedown = function() {
		canvas.draw();
		
		myThis.showTriangles(ctx, width, height);
		
		document.getElementById("container").onmousedown = function() {
			canvas.draw();
			
			window.setTimeout(function() {
				grid.setFade(false);
			}, 2000);
		}
	}
	
};

/**
 * Draws the first step of the tutorial, involving an arrow from Trump
 * to the White House of the first level, as well as some text.
 */
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
	
	ctx.font = (HEIGHT * 0.05) + "px Arial";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Guide Trump", width * 0.11, height * 0.45);
	ctx.fillText("to the White  House", width * 0.11, height * 0.6);
	ctx.fillText("avoiding the  mines", width * 0.11, height * 0.7);
}

/**
 * Draws the second step of the tutorial, involving triangles corresponding
 * to the areas that Trump is moved with.
 */
Tutorial.prototype.showTriangles = function(ctx, width, height) {
	ctx.font = (HEIGHT * 0.065) + "px Arial";
	ctx.globalAlpha=0.5;
	
	//UP triangle
	ctx.fillStyle = "#FF0";
	ctx.beginPath();
	ctx.moveTo(width * 0.1, height * 0.15);
	ctx.lineTo(width * 0.9, height * 0.15);
	ctx.lineTo(width * 0.5, height * 0.49);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#000";
	ctx.fillText("UP", width * 0.4, height * 0.3);
	
	//LEFT triangle
	ctx.fillStyle = "#FF0";
	ctx.beginPath();
	ctx.moveTo(width * 0.08, height * 0.15);
	ctx.lineTo(width * 0.08, height * 0.83);
	ctx.lineTo(width * 0.49, height * 0.5);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#000";
	ctx.fillText("LEFT", width * 0.11, height * 0.5);
	
	//RIGHT triangle
	ctx.fillStyle = "#FF0";
	ctx.beginPath();
	ctx.moveTo(width * 0.92, height * 0.15);
	ctx.lineTo(width * 0.92, height * 0.83);
	ctx.lineTo(width * 0.51, height * 0.5);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#000";
	ctx.fillText("RIGHT", width * 0.55, height * 0.5);
	
	//DOWN triangle
	ctx.fillStyle = "#FF0";
	ctx.beginPath();
	ctx.moveTo(width * 0.1, height * 0.83);
	ctx.lineTo(width * 0.90, height * 0.83);
	ctx.lineTo(width * 0.5, height * 0.51);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#000";
	ctx.fillText("DOWN", width * 0.31, height * 0.75);
	
	ctx.globalAlpha=1;
};