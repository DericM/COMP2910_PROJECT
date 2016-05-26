
/* GLOBAL VARIABLES */
var WIDTH;
var HEIGHT;
var WINDOW_WIDTH;
var PIXEL_RATIO;

/* COMPONENTS */
var CANVAS_MANAGER;
var RESOURCES;
var ORIENTATION_LISTENER;
var PLAYER_DATA;

/* PAGES */
var LOADING_SCREEN;
var MENU;
var GAME;
var LOGIN;
var REGISTER;
var HIGH_SCORE;
var VICTORY;
var DEFEAT;

var TUTORIAL;

/**
 * Entry point for the program.
 */
function Main(){
    
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    PIXEL_RATIO = 16 / 9;
    WINDOW_WIDTH = WIDTH;

    if(HEIGHT / WIDTH < PIXEL_RATIO -0.4){
        WIDTH = HEIGHT / PIXEL_RATIO;
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
}

/**
 *  Initialize the components that are dependent on resource manager.
 *      -This is called from ResourceManager.loadImages.
 */
Main.prototype.init = function() {
    CANVAS_MANAGER = new CanvasManager();
    ORIENTATION_LISTENER = new OrientationListener();
    PLAYER_DATA = new PlayerData();

    MENU = new Menu();
    LOGIN = new Login();
    REGISTER = new Register();
    GAME = new Game();
    HIGH_SCORE = new HighScore();
    VICTORY = new Victory();
    DEFEAT = new Defeat();

	TUTORIAL = new Tutorial();
	
    LOADING_SCREEN.setVisibility(false);
    MENU.setVisibility(true);

};



