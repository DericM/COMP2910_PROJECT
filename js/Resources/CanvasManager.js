/**
 * A canvas manager that generates all the necessary canvases.
 * Object that contains all the canvases to draw to.
 */
function CanvasManager() {
    this.orientCanvas = new Canvas();
    this.backgroundCanvas = new Canvas();
    this.gameCanvas = new Canvas("canvas-game");
    this.uiCanvas =  new Canvas("canvas-ui");
    //this.popupCanvas = new Canvas("canvas-popup");
    this.backgroundCanvas.setVisible(false);
    this.gameCanvas.setVisible(false);
 //   this.popupCanvas.setVisible(false);
    this.uiCanvas.setVisible(false);
    this.orientCanvas.setVisible(false);
    this.orientCanvas.setWidth(HEIGHT);
    this.orientCanvas.setHeight(WINDOW_WIDTH);
    this.orientCanvas.getContext().fillStyle = "#CCC000";
    this.orientCanvas.getContext().fillRect(0, 0, this.orientCanvas.getWidth, this.orientCanvas.getHeight());
    this.orientCanvas.getContext().drawImage(RESOURCES.getImage("orientlistener"), 0, 0, HEIGHT, WINDOW_WIDTH);
}