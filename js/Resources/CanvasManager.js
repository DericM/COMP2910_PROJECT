/**
 * A canvas manager that generates all the necessary canvases.
 */
function CanvasManager() {
    this.gameCanvas = new Canvas(WIDTH, HEIGHT);
    this.popupCanvas = new Canvas(WIDTH, HEIGHT);
    this.uiCanvas =  new Canvas(WIDTH, HEIGHT);
    this.menuCanvas = new Canvas(WIDTH, HEIGHT);
}