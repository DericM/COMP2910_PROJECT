function Popup(canvas) {
    Drawable.call(this, 30, 100);
    var width = canvas.getWidth() - 200;
    var height = canvas.getHeight() - 60;
    this.draw = function() {
        CANVAS_MANAGER.popupCanvas.getContext().fillStyle = "#FFF000";
        CANVAS_MANAGER.popupCanvas.getContext().fillRect(xCoord, yCoord, width, height);
    }
}

Popup.prototype = Object.create(Drawable.prototype);
Popup.prototype.constructor = Popup;