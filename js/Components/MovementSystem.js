function MovementSystem(canvas, context, trump) {
    // document.getElementById("gameCanvas");

    var canvas = canvas;
    var context = context;
    var trump = trump;
    var centerWidth = WIDTH / 2;
    var centerHeight = HEIGHT / 2;
    var rightMost = WIDTH;
    var bottomMost = HEIGHT;
    
    context.beginPath();
    context.fillStyle = "#000";
    context.moveTo(0, 0);
    context.lineTo(centerWidth, centerHeight);
    context.lineTo(rightMost, 0);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(centerWidth, centerHeight);
    context.lineTo(rightMost, bottomMost);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(centerWidth, centerHeight);
    context.lineTo(0, bottomMost);
    context.closePath();
    context.stroke();

    canvas.addEventListener("click", moveMe, false);

    this.toggleListener = function (switcher) {
        if (switcher) {
            canvas.addEventListener("click", moveMe, false);
        } else {
            canvas.removeEventListener("click", moveMe, false);
        }

    };

    window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 37) {
            trump.move("left");
        } else if (code === 38) {
            trump.move("up");
        } else if (code === 39) {
            trump.move("right");
        } else if (code === 40) {
            trump.move("down");
        }
    };

    function moveMe(event) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;

        /*
         * myTrump doesn't fucking exist yet
         */
        if (isInside(0, 0, centerWidth, centerHeight, rightMost, 0, x, y)) {
            trump.move("up");
        } else if (isInside(rightMost, 0, centerWidth, centerHeight, rightMost, bottomMost, x, y)) {
            trump.move("right");
        } else if (isInside(rightMost, bottomMost, centerWidth, centerHeight, 0, bottomMost, x, y)) {
            trump.move("down");
        } else if (isInside(0, 0, centerWidth, centerHeight, 0, bottomMost, x, y)) {
            trump.move("left");
        }

    }


    var area = function (x1, y1, x2, y2, x3, y3) {
        return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
    };

    /* A function to check whether point P(x, y) lies inside the triangle formed
     by A(x1, y1), B(x2, y2) and C(x3, y3) */
    var isInside = function (x1, y1, x2, y2, x3, y3, x, y) {
        /* Calculate area of triangle ABC */
        var A = area(x1, y1, x2, y2, x3, y3);

        /* Calculate area of triangle PBC */
        var A1 = area(x, y, x2, y2, x3, y3);

        /* Calculate area of triangle PAC */
        var A2 = area(x1, y1, x, y, x3, y3);

        /* Calculate area of triangle PAB */
        var A3 = area(x1, y1, x2, y2, x, y);

        /* Check if sum of A1, A2 and A3 is same as A */
        return (A == A1 + A2 + A3);
    };

}
