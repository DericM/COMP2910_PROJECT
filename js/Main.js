
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

var LOADING_SCREEN;
/** THe menu. Use this to show and hide the menu. */
var MENU;
/** The game. Use this to show and hide the game canvas.*/
var GAME;

var LOGIN;




/**
 * Entry point.
 */
function Main(){

    this.init = function() {
        CANVAS_MANAGER = new CanvasManager();
        //PLAYER_DATA    = new PlayerData();

        MENU = new Menu();
        LOGIN = new Login();
        GAME = new Game();

        LOADING_SCREEN.setVisibility(false);
        MENU.setVisibility(true);
    };



    TILE_SIZE = 50;

    var screenRatio = 640 / 360;

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    if(HEIGHT / WIDTH < screenRatio -0.4){
        WIDTH = HEIGHT / screenRatio;
        var container = document.getElementById("container");
        container.style.width = WIDTH + "px";
        container.style.height = HEIGHT + "px";
        container.style.left =  ((window.innerWidth / 2) - (WIDTH / 2)) + "px";
    }

    window.onresize = function(){
        location.reload();
    };


    LOADING_SCREEN = new LoadingScreen();
    LOADING_SCREEN.setVisibility(true);

    RESOURCES = new ResourceManager();
    RESOURCES.loadImages(this);

}



