/**
 * @param {PlayerData} player
 */
function Game(player){


    var canvas = document.getElementById("game");

    var ctx   = canvas.getContext("2d");

    ctx.fillStyle = "#00FF00";
    //ctx.fillRect(0,0,400,400);

    var cells = [];

    var current_map = MAPS.getMap(player.getLevel());

    for(var i = 0; i < current_map.length;i++){
        cells[i] = [];
        for(var j =0; j < current_map[0].length;j++) {
            var x = i * TILE_SIZE;
            var y = j * TILE_SIZE;
            var tile = TILES.getTile(current_map[i][j]);

            cells[i][j] = new Cell(x, y, tile);

            var cell = cells[i][j];


            //alert("" + cell.x + " " + cell.y);

            ctx.fillRect(cell.x, cell.y, 19, 19);

            //ctx2 = cell.tile.mYcanvas.getContext("2d");
            //ctx2.fillStyle = "#FFFF00";
            //ctx2.fillRect(0,0,17,17);

            ctx.drawImage(cell.tile.myCanvas, cell.x, cell.y);
        }
    }
}
