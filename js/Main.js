
/* GLOBAL VARIABLES */

/** Tile Size.*/
var TILE_SIZE;
/** Game Width.*/
var WIDTH;
/** Game Height.*/
var HEIGHT;
/** Holds ll of the canvases */
var CANVAS_MANAGER;
/** Used to display popups */
var POPUPS;
/** The game. Use this to show and hide the game canvas.*/
var GAME;
/** THe menu. Use this to show and hide the menu. */
var MENU;

/**
 * Entry point.
 */
function Main(){
    TILE_SIZE = 50;
    WIDTH     = window.innerWidth;
    HEIGHT    = window.innerHeight;

    CANVAS_MANAGER = new CanvasManager();
    POPUPS         = new PopupManager(CANVAS_MANAGER.popupCanvas);
    MENU           = new Menu(CANVAS_MANAGER.menuCanvas);
    GAME           = new Game(MENU);
    MENU.addGame(GAME);
}
