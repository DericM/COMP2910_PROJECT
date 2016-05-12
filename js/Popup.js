function Popup() {
    this.draw = function() {
        var width = CANVAS_MANAGER.popupCanvas.width - 20;
        var height = CANVAS_MANAGER.popupCanvas.height - 50;
        var xCoord = width + 10;
        var yCoord = height + 25;
        CANVAS_MANAGER.popupCanvas().fillStyle = "#000DDD";
        CANVAS_MANAGER.popupCanvas().getContext().fillRect(xCoord, yCoord, width, height);
    }
}
