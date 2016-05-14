
/* GLOBAL VARIABLES */

/** Tile Size.*/
var TILE_SIZE;
/** Game Width.*/
var WIDTH;
/** Game Height.*/
var HEIGHT;
/** Resource Manager. Use this to get pictures.*/
var RESOURCES;
/** Player data*/
var PLAYER_DATA;
/** Canvas Manager. Use this to access canvas'.*/
var CANVAS_MANAGER;
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
    RESOURCES      = new ResourceManager();
    // PLAYER_DATA    = new PlayerData();
    MENU           = new Menu(CANVAS_MANAGER.menuCanvas);
    GAME           = new Game(MENU);
    MENU.addGame(GAME);
}
