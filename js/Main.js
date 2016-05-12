
/** GLOBAL VARIABLES */

var TILE_SIZE;
var WIDTH;
var HEIGHT;
//var MAPS;
var RESOURCES;
var PLAYER_DATA;
var CANVAS_MANAGER;
var MENU;

/**
 * Entry point.
 */
function Main(){

    TILE_SIZE = 40;
    WIDTH     = 360;
    HEIGHT    = 640;

    CANVAS_MANAGER = new CanvasManager();
    //MAPS           = new Maps();
    RESOURCES      = new ResourceManager();
    PLAYER_DATA    = new PlayerData();
    GAME           = new Game();
    MENU           = new Menu(CANVAS_MANAGER.uiCanvas, GAME);
}
