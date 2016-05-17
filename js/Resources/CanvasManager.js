/**
 * A canvas manager that generates all the necessary canvases.
 * Object that contains all the canvases to draw to.
 */
function CanvasManager() {
    this.gameCanvas = new Canvas("canvas-game");
    this.popupCanvas = new Canvas("canvas-popup");
    //this.menuCanvas = new Canvas("canvas-menu");
    this.uiCanvas =  new Canvas("canvas-ui");

    this.gameCanvas.setVisible(false);
    this.popupCanvas.setVisible(false);
    this.uiCanvas.setVisible(false);


}