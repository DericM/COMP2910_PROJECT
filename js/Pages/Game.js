/**
 * The main game object that sets up and plays the game.
 */
function Game() {
    Page.call(this);

    this.page.id = "game-page";
    this.page.className = "game";

    this.level = 0;
    this.levels = new LevelManager();
    this.scoreTracker = new ScoringSystem(CANVAS_MANAGER.gameCanvas);
    this.grid = new Grid(CANVAS_MANAGER.gameCanvas);

    CANVAS_MANAGER.gameCanvas.insertDrawable(this.grid);
    CANVAS_MANAGER.gameCanvas.insertDrawable(this.scoreTracker);

    this.trump = new Trump(CANVAS_MANAGER.uiCanvas, this.grid, 0, 0, RESOURCES.getImage("trump"), this);
    this.grid.addTrump(this.trump);


    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        GAME.setVisibility(false);
        MENU.setVisibility(true);
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





Game.prototype.getTrump = function() {
    return this.trump;
};

/**
 * Initializes a new game.
 */
Game.prototype.newGame = function() {

    this.level = 0;
    this.scoreTracker.resetScore();
    this.scoreTracker.clearFail();
    this.setupLevel(null);
};

/**
 * Adds the user's score to the database.
 */
Game.prototype.logScore = function() {
    //console.log("calling");
    var finalScore = this.scoreTracker.getScore();
    $.post("php/logscore.php", {
        score: finalScore,
        id: PLAYER_DATA.getId()
    });
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
        if (this.level == 9000) {
            this.logScore();
            alert("YOU WIN");
            this.trump.resetLives();
            this.newGame();
        }

        //failed level
    } else if (passed === false) {
        this.scoreTracker.incrementFail();

        //initial level
    } else {
        RESOURCES.playSound("make_america_great");

    }

    this.grid.populate(this.levels.readLevel(this.grid, this.level));
    CANVAS_MANAGER.gameCanvas.draw();

    this.trump.toggleListener(false);

    this.trump.setVisible(false);

    var myThis = this;
    window.setTimeout(function() {
        myThis.trump.toggleListener(true);
    }, 2000);

	if (this.level == 0 && TUTORIAL.readCookie() == false) {
		myThis.trump.setVisible(true);
		TUTORIAL.run(myThis.grid);
		console.log("Cookie setting in Game.js is commented out.");
		//TUTORIAL.setCookie(true, 365);
	} else {
		window.setTimeout(function() {
			myThis.grid.setFade(false);
		}, 2000);
	}
};

/**
 * Returns what level is being played.
 * @returns {number}  :  the level tha that is being played.
 */
Game.prototype.getLevel = function(){
    return this.level;
};


