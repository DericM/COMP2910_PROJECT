
/** GLOBAL VARIABLES */

var TILE_SIZE;
var WIDTH;
var HEIGHT;
//var MAPS;
var RESOURCES;
var PLAYER_DATA;
var CANVAS_MANAGER;
var GAME;
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
    MENU           = new Menu(CANVAS_MANAGER.menuCanvas);
    GAME           = new Game(MENU);
    MENU.addGame(GAME);
}
