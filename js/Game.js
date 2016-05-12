/**
 *
 */

var levelComplete = false;

function Game() {
   var levels = new LevelManager();

   var grid = new Grid(CANVAS_MANAGER.gameCanvas.getContext(),
       (360 / 2) - (275 / 2), (640 / 2) - (375 * (7 / 5) / 2), 275, 375 * (7 / 5), 5, 7);
   
   var playLevel = function(alevel) {

      
      grid.populate(levels.readLevel(grid, alevel));
      CANVAS_MANAGER.gameCanvas.insertDrawable(grid);
      CANVAS_MANAGER.gameCanvas.draw();
      var MOVE_MANAGER = new MovementSystem(CANVAS_MANAGER.uiCanvas.getCanvas()
          , CANVAS_MANAGER.gameCanvas.getContext(), grid.getTrump());
      
   };

   var i = 0;

   CANVAS_MANAGER.gameCanvas.getCanvas().addEventListener("levelcompleted", function(e) {playLevel(i++)}, false);
   playLevel(0);
   
    
}

function OnLevelComplete(state) {
   var evt = document.createEvent("Event");
   evt.state = state;
   evt.initEvent("levelcompleted", true, false);
   CANVAS_MANAGER.gameCanvas.getCanvas().dispatchEvent(evt);
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