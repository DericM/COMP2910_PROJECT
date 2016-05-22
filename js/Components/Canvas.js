
/**
 Creates a canvas and inserts it into the container div in index.html.
 */
function Canvas(id) {
    this.width = WIDTH;
    this.height = HEIGHT;
    this.drawables = [];
    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "absolute";
    this.canvas.setAttribute('width', this.width);
    this.canvas.setAttribute('height', this.height);
    this.canvas.id = id;
    this.context = this.canvas.getContext("2d");
}


Canvas.prototype = {
    /**
     * Sets the width of canvas.
     *
     * @param _width The new width to set the canvas to.
     */
    setWidth: function(_width) {
        this.width = _width;
        this.canvas.setAttribute('width', this.width);
    },

    /**
     * Sets the height of the canvas.
     *
     * @param _height The new height to set the canvas to.
     */
    setHeight: function(_height) {
        this.height = _height;
        this.canvas.setAttribute('height', this.height);
    },

    /**
     * Clears the canvas of all of its drawings.
     */
    clear: function() {
        this.context.clearRect(0, 0, this.width, this.height);
    },
    /**
     * Return context.
     * @returns {CanvasRenderingContext2D}
     */
    getContext: function() {
        return this.context;
    },

    /**
     * Return canvas.
     * @returns {Element}
     */
    getCanvas: function () {
        return this.canvas;
    },

    /**
     * Return width.
     * @returns {*}
     */
    getWidth: function() {
        return this.width;
    },

    /**
     * Return height.
     * @returns {*}
     */
    getHeight: function() {
        return this.height;
    },

    /**
     Adds a drawable to the end of the drawables array.

     PARAM drawable: The drawable to be added.
     */
    insertDrawable: function(drawable) {
        this.drawables.push(drawable);

    },

    /**
     Calls the draw method on all the drawables in the
     drawables array, which draws them all to the context
     of this canvas.
     */
    draw: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.drawables.length; i++) {
            this.drawables[i].draw();
        }
    },

    /**
     * Sets the visibility of the canvas html element this canvas object is
     * associated with. Passing false removes it from the HTML dom tree,
     * passing true adds it to the HTML dom tree.
     *
     * @param {boolean} visibility: True to add to dom tree, false to remove from.
     */
    setVisible: function(visibility) {
            if(this.visibility == false) {
                document.getElementById("container").removeChild(this.canvas);
            } else {
                document.getElementById("container").appendChild(this.canvas);
            }
    }

};