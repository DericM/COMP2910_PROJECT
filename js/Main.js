
/* GLOBAL VARIABLES */

/** Tile Size.*/
var TILE_SIZE;
/** Game Width.*/
var WIDTH;
/** Game Height.*/
var HEIGHT;
/** Resource Manager. Use this to get pictures.*/
var RESOURCES;
/** Manager for popups, contains methods for calling and removing them. */
var POPUPS;
/** Manager for canvases, instantiates them, all canvases accessed through this. */
var CANVAS_MANAGER;

var LOADING_SCREEN;
/** THe menu. Use this to show and hide the menu. */
var MENU;
/** The game. Use this to show and hide the game canvas.*/
var GAME;
/** Listens for orientation change */
var ORIENTATION_LISTENER;

var LOGIN;

var REGISTER;

/** Used to save width of window if it stops being stored in WIDTH because the device is desktop. */
var WINDOW_WIDTH;

var PLAYER_DATA;

var HIGH_SCORE;

var VICTORY;

var DEFEAT;

/**
 * Entry point.
 */
function Main(){

    this.init = function() {
        CANVAS_MANAGER = new CanvasManager();
        POPUPS = new PopupManager();

        MENU = new Menu();
        LOGIN = new Login();
        REGISTER = new Register();
        GAME = new Game();
        PLAYER_DATA = new PlayerData();     
        HIGH_SCORE = new HighScore();
        // VICTORY = new Victory();
        // DEFEAT = new Defeat();
        VICTORY = new Victory();
        DEFEAT = new Defeat();

        LOADING_SCREEN.setVisibility(false);
        MENU.setVisibility(true);
    };



    TILE_SIZE = 50;

    var screenRatio = 640 / 360;

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    WINDOW_WIDTH = WIDTH;
    if(HEIGHT / WIDTH < screenRatio -0.4){
        WIDTH = HEIGHT / screenRatio;
        var container = document.getElementById("container");
        container.style.width = WIDTH + "px";
        container.style.height = HEIGHT + "px";
        container.style.left =  ((window.innerWidth / 2) - (WIDTH / 2)) + "px";
    }
    WINDOW_WIDTH = (WINDOW_WIDTH - WIDTH) / 2;
    window.onresize = function(){
        //location.reload();
    };


    LOADING_SCREEN = new LoadingScreen();
    LOADING_SCREEN.setVisibility(true);

    RESOURCES = new ResourceManager();
    RESOURCES.loadImages(this);
    RESOURCES.loadSounds();
    ORIENTATION_LISTENER = new OrientationListener();
}



