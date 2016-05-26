/**
 * The main game object that sets up and plays the game.
 */
function Game() {
    Page.call(this);

    this.page.id = "game-page";
    this.page.className = "game";


    this.level = 0;
    this.scoreTracker = new ScoringSystem(CANVAS_MANAGER.gameCanvas);
    this.grid = new Grid();

    CANVAS_MANAGER.gameCanvas.insertDrawable(this.grid);
    CANVAS_MANAGER.gameCanvas.insertDrawable(this.scoreTracker);

    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        GAME.setVisibility(false);
        MENU.setVisibility(true);
        console.log(MENU);
    });


    this.page.appendChild(CANVAS_MANAGER.orientCanvas.canvas);
    this.page.appendChild(CANVAS_MANAGER.backgroundCanvas.canvas);
    this.page.appendChild(CANVAS_MANAGER.gameCanvas.canvas);
    this.page.appendChild(CANVAS_MANAGER.uiCanvas.canvas);
    this.page.appendChild(home);

    
}

//inheritance stuff
Game.prototype = Object.create(Page.prototype);
Game.prototype.constructor = Game;





/**
 * Initializes a new game.
 */
Game.prototype.newGame = function() {
    this.level = 0;
    this.scoreTracker.resetScore();
    this.scoreTracker.clearFail();
    this.setupLevel(false);
    this.grid.start();
};


/**
 * Sets up the next level to be played
 *
 * @param {boolean} passed  :  whether or not the previous
 *                             level should was passed.
 */
Game.prototype.setupLevel = function(passed) {
    if(passed) {
        RESOURCES.playSound(RESOURCES.getNextWinSound());
        this.scoreTracker.addToScore(this.level);
        this.scoreTracker.clearFail();
        this.level++;
    } else if (passed === false) {
        this.scoreTracker.incrementFail();
    }
    this.grid.populateLevel(this.level);
    this.grid.initializeLevel(this.level);
};

/**
 * Adds the user's score to the database.
 */
Game.prototype.logScore = function() {
    console.log("calling");
    var finalScore = this.scoreTracker.getScore();
    $.post("php/logscore.php", {score: finalScore, id: PLAYER_DATA.getId()});
};



