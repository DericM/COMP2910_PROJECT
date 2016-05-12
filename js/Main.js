
/** GLOBAL VARIABLES */

var TILE_SIZE = 40;

var WIDTH;
var HEIGHT;
var MAPS;
var RESOURCES;
var PLAYER_DATA;
var CANVAS_MANAGER;


/**
 * Entry point.
 */
function Main(){


    CANVAS_MANAGER = new CanvasManager();

    WIDTH = canvas.width;
    HEIGHT = canvas.height;


    MAPS = new Maps();
    RESOURCES  = new ResourceManager();

    PLAYER_DATA = new PlayerData();

    new Menu();

}
