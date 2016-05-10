/**
 *
 */
function Game(){

    var cells;

    var current_map;

    this.constructor = function(){
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);

        cells = [];
        current_map = MAPS.getMap(PLAYER.getLevel());
        init();

    };


    var init = function(){
        for(var i = 0; i < current_map.length;i++){
            cells[i] = [];
            for(var j =0; j < current_map[0].length;j++) {
                var x = i * TILE_SIZE;
                var y = j * TILE_SIZE;
                var tile = RESOURCES.getTile(current_map[i][j]);

                cells[i][j] = new Cell(x, y, tile.img);

                var cell = cells[i][j];

                //------------------------------
                //for testing
                //alert("" + cell.x + " " + cell.y);
                CONTEXT.fillRect(cell.x, cell.y, 19, 19);
                //--------------------------------
            }
        }
    };


    this.constructor();
}
