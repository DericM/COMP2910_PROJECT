function Popup(_canvas, _contents, _btnLeft, _btnRight) {
    var canvas = _canvas;
    var contents = _contents;
    var btnLeft = _btnLeft
    var btnRight = _btnRight;
    var width = WIDTH * 0.9;
    var height = HEIGHT * 0.5;
    var xCoord = (WIDTH / 2) - (width / 2);
    var yCoord = (HEIGHT / 2) - (height / 2);
    var btnLX;
    var btnLY;
    var btnRX;
    var btnRY;
    btnLeft.setWidth(width * 0.35);
    btnLeft.setHeight(height * 0.15);
    btnRight.setWidth(width * 0.35);
    btnRight.setHeight(height * 0.15);

    this.draw = function() {
        var canvas = CANVAS_MANAGER.popupCanvas;
        canvas.getCanvas().addEventListener("click", this.buttonPress, false);
        canvas.clear();
        canvas.getContext().fillStyle = "#3C3C3C";
        canvas.getContext().fillRect(xCoord, yCoord, width, height);
        btnLX = (width - btnLeft.getWidth() - btnRight.getWidth()) / 3 + xCoord;
        btnLY = (height - btnLeft.getHeight() + yCoord) * 0.95;
        btnRX = btnLX + btnLeft.getWidth() + ((width - btnLeft.getWidth() - btnRight.getWidth()) / 3);
        btnRY = btnLY;
        btnLeft.draw(canvas.getContext(), btnLX, btnLY);
        btnRight.draw(canvas.getContext(), btnRX, btnRY);
    };


    /*

     */

    this.buttonPress = function(event) {
        var x = event.pageX - canvas.getCanvas().offsetLeft;
        var y = event.pageY - canvas.getCanvas().offsetTop;
        var x1 = btnRX + WINDOW_WIDTH;
        if(x >= btnLX && x <= btnLX + btnLeft.getWidth()
            && y >= btnLY && y <= btnLY + btnLeft.getHeight()) {
            canvas.getCanvas().removeEventListener("click", this.buttonPress, false);
            POPUPS.removePopup();
            btnLeft.callLink();
        } else if(x >= x1 && x <= x1 + btnRight.getWidth()
            && y >= btnRY && y <= btnRY + btnRight.getHeight()) {
            canvas.getCanvas().removeEventListener("click", this.buttonPress, false);
            POPUPS.removePopup();
            btnRight.callLink();
        }
    };
}