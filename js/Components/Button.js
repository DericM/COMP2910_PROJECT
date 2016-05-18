function Button(_link, _image) {
    var link = _link;
    var image = _image;
    var width;
    var height;

    this.draw = function(context, xCoord, yCoord) {
        if(image == null) {
            context.fillStyle = "#CCCCCC";
            context.fillRect(xCoord, yCoord, width, height);
        } else {
            context.drawImage(image, xCoord, yCoord, width, height);
        }
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