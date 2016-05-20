function Contents(_width, _height) {
    var width = _width;
    var height = _height;

    this.getWidth = function() {
        return width;
    };

    this.getHeight = function() {
        return height;
    };
}