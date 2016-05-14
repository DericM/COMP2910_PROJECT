/**
 * A canvas manager that generates all the necessary canvases.
 * Object that contains all the canvases to draw to.
 */
function CanvasManager() {
    this.gameCanvas = new Canvas(WIDTH, HEIGHT);
    this.popupCanvas = new Canvas(WIDTH, HEIGHT);
    this.uiCanvas =  new Canvas(WIDTH, HEIGHT);
    this.menuCanvas = new Canvas(WIDTH, HEIGHT);
}