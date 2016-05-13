/**
 *
 */
function Game() {
    var level = 0;
    var levels = new LevelManager();
    var grid = new Grid(CANVAS_MANAGER.gameCanvas.getContext(),
        (360 / 2) - (275 / 2), (640 / 2) - (375 * (7 / 5) / 2), 275, 375 * (7 / 5), 5, 7);
    CANVAS_MANAGER.gameCanvas.insertDrawable(grid);
    var trump = new Trump(grid, 0, 0, "images/logo.png", this);
    grid.addTrump(trump);
    var MOVE_MANAGER = new MovementSystem(CANVAS_MANAGER.uiCanvas.getCanvas()
        , CANVAS_MANAGER.gameCanvas.getContext(), trump);

    this.newGame = function() {
        level = 0;
        this.setupLevel(true);
    };

    this.setupLevel = function(repeat) {
        if(level == 10) {
            console.log("YOU WIN");
        } else {
            if (!repeat) {
                level++;
            }
            grid.populate(levels.readLevel(grid, level));
            CANVAS_MANAGER.gameCanvas.draw();
            window.setTimeout(function () {
                grid.setFade(false)
            }, 3000);
        }
    };
}

/*
    var grid;

    var current_map;

    this.constructor = function(){
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);

        grid = [];
        current_map = MAPS.getMap(PLAYER.getLevel());
        init();

    };


    var init = function(){
        for(var i = 0; i < current_map.length;i++){
            grid[i] = [];
            for(var j =0; j < current_map[0].length;j++) {
                var x = i * TILE_SIZE;
                var y = j * TILE_SIZE;
                var tile = RESOURCES.getTile(current_map[i][j]);

                grid[i][j] = new Cell(x, y);
                grid[i][j].setLayer1(tile);

                CONTEXT.drawImage(RESOURCES.mine.img, x, y);

                document.getElementById("myimg").src = RESOURCES.mine.img.src;

                //------------------------------
                //for testing
                var cell = grid[i][j];
                //alert("" + cell.x + " " + cell.y);
                CONTEXT.fillRect(cell.x, cell.y, 19, 19);
                //--------------------------------
            }
        }


    };


    this.constructor();
}
*/