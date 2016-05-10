
/** GLOBAL VARIABLES */

var TILE_SIZE = 40;

var WIDTH;
var HEIGHT;
var MAPS;
var RESOURCES;
var CONTEXT;
var PLAYER;


/**
 * Entry point.
 */
function Main(){

    var canvas = document.getElementById("game");
    CONTEXT = canvas.getContext("2d");

    
    //------------------------
    //possible loading screen
    //--------------------------


    WIDTH = canvas.width;
    HEIGHT = canvas.height;


    MAPS = new Maps();
    RESOURCES  = new ResourceManager();

    PLAYER = new PlayerData();

    new Menu();

}
