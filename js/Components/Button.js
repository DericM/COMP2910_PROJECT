function Button(link) {
    var width;
    var height;

    this.draw = function(context, xCoord, yCoord) {
        context.fillStyle = "#CCCCCC";
        context.fillRect(xCoord, yCoord, width, height);
    };

    this.callLink = function() {
        link();
    };

    this.setWidth = function(_width) {
        width = _width;
    };

    this.setHeight = function(_height) {
        height = _height;
    };

    this.getWidth = function() {
        return width;
    };

    this.getHeight = function() {
        return height;
    };
}