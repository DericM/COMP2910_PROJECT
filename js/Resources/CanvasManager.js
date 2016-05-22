/**
 * A canvas manager that generates all the necessary canvases.
 * Object that contains all the canvases to draw to.
 */
function CanvasManager() {
    this.orientCanvas = new Canvas();
    this.backgroundCanvas = new Canvas();
    this.gameCanvas = new Canvas("canvas-game");
    this.trumpCanvas = new Canvas();
    this.uiCanvas =  new Canvas("canvas-ui");

    /**
     * Sets the visibility of all canvases except for the orientCanvas to
     * visible or invisible.
     *
     * @param {boolean} visibility
     */
    this.setCanvasesVisibility = function(visibility) {
        for(var object in this) {
            if(this[object] instanceof Canvas && object != this.orientCanvas) {
                this[object].setVisible(visibility);
            }
        }
    };
}