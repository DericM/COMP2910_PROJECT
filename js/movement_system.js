function MovementSystem(canvas, context) {
  // document.getElementById("gameCanvas");

  this.canvas = canvas;
  this.ctx = context;

  this.ctx.fillStyle = "#000";
  this.ctx.moveTo(0,0);
  this.ctx.lineTo(180, 320);
  this.ctx.lineTo(360, 0);
  this.ctx.stroke();

  this.ctx.moveTo(180,320);
  this.ctx.lineTo(360,640);
  this.ctx.stroke();

  this.ctx.moveTo(180,320);
  this.ctx.lineTo(0,640);
  this.ctx.stroke();

  this.canvas.addEventListener("click", moveTo, false);


  var moveTo = function(event) {
    var x = event.pageX - this.canvas.offsetLeft;
    var y = event.pageY - this.canvas.offsetTop;

    /*
     * myTrump doesn't fucking exist yet
     */
    if (isInside(0,0,180,320,360,0,x,y)) {
      alert("UP");
      myTrump.move("up");
    } else if (isInside(360,0,180,320,360,640,x,y)) {
      alert("RIGHT");
      myTrump.move("right");
    } else if (isInside(360,640,180,320,0,640,x,y)) {
      alert("DOWN");
      myTrump.move("down");
    } else if (isInside(0,0,180,320,0,640,x,y)) {
      alert("LEFT");
      myTrump.move("left");
    }

  };

  var area = function(x1, y1, x2,  y2,  x3,  y3) {
    return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
  };

  /* A function to check whether point P(x, y) lies inside the triangle formed
   by A(x1, y1), B(x2, y2) and C(x3, y3) */
  var isInside = function (x1, y1, x2, y2, x3, y3, x, y) {
    /* Calculate area of triangle ABC */
    var A = area (x1, y1, x2, y2, x3, y3);

    /* Calculate area of triangle PBC */
    var A1 = area (x, y, x2, y2, x3, y3);

    /* Calculate area of triangle PAC */
    var A2 = area (x1, y1, x, y, x3, y3);

    /* Calculate area of triangle PAB */
    var A3 = area (x1, y1, x2, y2, x, y);

    /* Check if sum of A1, A2 and A3 is same as A */
    return (A == A1 + A2 + A3);
  };

}
