/**
 * The main game object that sets up and plays the game.
 */
function Game() {
    var level = 0;
    var levels = new LevelManager();
    var scoreTracker = new ScoringSystem(CANVAS_MANAGER.gameCanvas);
    var grid = new Grid(CANVAS_MANAGER.gameCanvas);
    CANVAS_MANAGER.gameCanvas.insertDrawable(grid);
    CANVAS_MANAGER.gameCanvas.insertDrawable(scoreTracker);
    var trump = new Trump(CANVAS_MANAGER.uiCanvas, grid, 0, 0, RESOURCES.getImage("trump"), this);
    grid.addTrump(trump);
	
    this.getTrump = function() {
        return trump;
    };
	
    /**
     * Initializes a new game.
     */
    this.newGame = function() {
        CANVAS_MANAGER.setCanvasesVisibility(true);
        level = 0;
        scoreTracker.resetScore();
        scoreTracker.clearFail();
        this.setupLevel(null);
    };

    /**
     * Adds the user's score to the database.
     */
    this.logScore = function() {
        console.log("calling");
        var finalScore = scoreTracker.getScore();
        $.post("php/logscore.php", {score: finalScore, id: PLAYER_DATA.getId()});
    };

    /**
     * Sets up the next level to be played
     * 
     * @param {boolean} passed  :  whether or not the previous
     *                             level should was passed.
     */
    this.setupLevel = function(passed) {
        if(passed) {
            RESOURCES.playSound(RESOURCES.getNextWinSound());
            scoreTracker.addToScore(level);
            scoreTracker.clearFail();
            level++;
            if (level == 9000) {
                this.logScore();
                alert("YOU WIN");
                trump.resetLives();
                this.newGame();
            }

            //failed level
        } else if (passed === false) {
            scoreTracker.incrementFail();
            
            //initial level
        } else {
            RESOURCES.playSound("make_america_great");
            
        }
        
        grid.populate(levels.readLevel(grid, level));
        CANVAS_MANAGER.gameCanvas.draw();

        trump.toggleListener(false);

        trump.setVisible(false);

        window.setTimeout(function() {
            trump.toggleListener(true);
        }, 2000);

		if (level == 0 && TUTORIAL.readCookie() == false) {
			trump.setVisible(true);
			TUTORIAL.run(grid);
			console.log("Cookie setting in Game.js is commented out.");
			//TUTORIAL.setCookie(true, 365);
		} else {
			window.setTimeout(function() {
				grid.setFade(false);
			}, 2000);
		}
    };

    /**
     * Returns what level is being played.
     * @returns {number}  :  the level tha that is being played.
     */
    this.getLevel = function(){
        return level;
    }
}
