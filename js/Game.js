/**
 * The main game object that sets up and plays the game.
 */
function Game() {
    var level = 0;
    var levels = new LevelManager();
    
    var grid = new Grid(CANVAS_MANAGER.gameCanvas);
    
    CANVAS_MANAGER.gameCanvas.insertDrawable(grid);
    
    var trump = new Trump(grid, 0, 0, RESOURCES.getImage("trump"), this);
    
    grid.addTrump(trump);
    
    var MOVE_MANAGER = new MovementSystem(CANVAS_MANAGER.uiCanvas.getCanvas()
        , CANVAS_MANAGER.uiCanvas.getContext(), trump);

    /**
     * Sets up a new game starting at level 0.
     */
    this.newGame = function() {
        level = 0;
        this.setupLevel(true);
    };

    /**
     * Sets up the next level to be played
     * 
     * @param {boolean} repeat  :  whether or not the previous
     *                             level should be repeated.
     */
    this.setupLevel = function(repeat) {
        if(level == 11) {
            alert("YOU WIN");
        } else {
            if (!repeat) {
                level++;
            }
            grid.populate(levels.readLevel(grid, level));
            CANVAS_MANAGER.gameCanvas.draw();
            
            MOVE_MANAGER.toggleListener(false);
            
            trump.setVisible(false);
            setTimeout(function () {
                MOVE_MANAGER.toggleListener(true);
            }, 2000);

            setTimeout(function () {
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
