
/** GLOBAL VARIABLES */
//var WIDTH = 5;
//var HEIGHT = 7;
var TILE_SIZE = 40;

var MAPS;
var RESOURCES;


/**
 * Entry point.
 */
function Main(){

    MAPS = new Maps();
    RESOURCES  = new ResourceManager();

    new Menu();

}
