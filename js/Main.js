
/* GLOBAL VARIABLES */

/** Tile Size.*/
var TILE_SIZE;
/** Game Width.*/
var WIDTH;
/** Game Height.*/
var HEIGHT;
/** Resource Manager. Use this to get pictures.*/
var RESOURCES;

var POPUPS;
var CANVAS_MANAGER;

var LOADING_SCREEN;
/** THe menu. Use this to show and hide the menu. */
var MENU;
/** The game. Use this to show and hide the game canvas.*/
var GAME;

var LOGIN;

var WIDTH2;



/**
 * Entry point.
 */
function Main(){

    this.init = function() {
        CANVAS_MANAGER = new CanvasManager();
        POPUPS = new PopupManager();

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
    WIDTH2 = WIDTH;
    if(HEIGHT / WIDTH < screenRatio -0.4){
        WIDTH = HEIGHT / screenRatio;
        var container = document.getElementById("container");
        container.style.width = WIDTH + "px";
        container.style.height = HEIGHT + "px";
        container.style.left =  ((window.innerWidth / 2) - (WIDTH / 2)) + "px";
    }
    WIDTH2 = (WIDTH2 - WIDTH) / 2;
    window.onresize = function(){
        location.reload();
    };


    LOADING_SCREEN = new LoadingScreen();
    LOADING_SCREEN.setVisibility(true);

    RESOURCES = new ResourceManager();
    RESOURCES.loadImages(this);
    RESOURCES.loadSounds();

}



