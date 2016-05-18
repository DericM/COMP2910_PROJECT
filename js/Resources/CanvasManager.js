/**
 * A canvas manager that generates all the necessary canvases.
 * Object that contains all the canvases to draw to.
 */
function CanvasManager() {
    //this.orientCanvas = new Canvas("suckacock");
    this.gameCanvas = new Canvas("canvas-game");
    //this.menuCanvas = new Canvas("canvas-menu");
    this.uiCanvas =  new Canvas("canvas-ui");
    this.popupCanvas = new Canvas("canvas-popup");
    this.gameCanvas.setVisible(false);
    this.popupCanvas.setVisible(false);
    this.uiCanvas.setVisible(false);

/*
    this.orientCanvas.setVisible(false);
    this.orientCanvas.setWidth(HEIGHT);
    this.orientCanvas.setHeight(WINDOW_WIDTH);
    this.orientCanvas.getCanvas().style.zIndex = "1";
    this.orientCanvas.getCanvas().style.position = "absolute";
    this.orientCanvas.getContext().drawImage(RESOURCES.getImage("orient"), 0, 0, HEIGHT, WINDOW_WIDTH);
    */
}