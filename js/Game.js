/**
 * The main game object that sets up and plays the game.
 */
function Game() {
  //commnet
    var level = 0;
    var levels = new LevelManager();
    var scoreTracker = new ScoringSystem(CANVAS_MANAGER.gameCanvas);
    
    var grid = new Grid(CANVAS_MANAGER.gameCanvas);
    
    CANVAS_MANAGER.gameCanvas.insertDrawable(grid);
    CANVAS_MANAGER.gameCanvas.insertDrawable(scoreTracker);
    
    var trump = new Trump(grid, 0, 0, RESOURCES.getImage("trump"), this);
    
    grid.addTrump(trump);
    
    var MOVE_MANAGER = new MovementSystem(CANVAS_MANAGER.uiCanvas.getCanvas()
        , CANVAS_MANAGER.uiCanvas.getContext(), trump);

    /**
     * Sets up a new game starting at level 0.
     */
    this.newGame = function() {

        CANVAS_MANAGER.gameCanvas.setVisible(true);
        CANVAS_MANAGER.popupCanvas.setVisible(true);
        CANVAS_MANAGER.uiCanvas.setVisible(true);

        level = 0;
        scoreTracker.resetScore();
        scoreTracker.clearFail();
        this.setupLevel(null);
    };

    /*
    this.logScore = function() {
        var finalScore = scoreTracker.getScore();
        $.post("php/database.php", {score: finalScore});
    };*/

    /**
     * Sets up the next level to be played
     * 
     * @param {boolean} repeat  :  whether or not the previous
     *                             level should be repeated.
     */
    this.setupLevel = function(passed) {
        if(passed) {
            scoreTracker.addToScore(level);
            scoreTracker.clearFail();
            level++;
            if (level == 11) {
                // this.logScore();
                alert("YOU WIN");
                trump.resetLives();
                this.newGame();
            }

            //failed level
        } else if (passed === false) {
            scoreTracker.incrementFail();
            //initial level
        } else {
            
        }
        
        grid.populate(levels.readLevel(grid, level));
        CANVAS_MANAGER.gameCanvas.draw();

        MOVE_MANAGER.toggleListener(false);

        trump.setVisible(false);

        window.setTimeout(function() {
            MOVE_MANAGER.toggleListener(true);
        }, 2000);

        window.setTimeout(function () {
            grid.setFade(false)
        }, 2000);
        
        /*
        if(level == 11) {
            alert("YOU WIN");
        } else {
            if (!repeat) {
                level++;
                scoreTracker.addToScore(1000);
                scoreTracker.setFactor(1);
            }
            grid.populate(levels.readLevel(grid, level));
            CANVAS_MANAGER.gameCanvas.draw();
            
            MOVE_MANAGER.toggleListener(false);
            
            trump.setVisible(false);
            
            window.setTimeout(function() {
                MOVE_MANAGER.toggleListener(true);
            }, 2000);
            
            window.setTimeout(function () {
                grid.setFade(false)
            }, 2000);
        }
        */
    };

    /**
     * Returns what level is being played.
     * @returns {number}  :  the level tha that is being played.
     */
    this.getLevel = function(){
        return level;
    }
}
