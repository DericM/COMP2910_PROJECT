/**
 * Represents a Cell or block in the game, can contain multiple layers of sprites.
 * @constructor
 * @param {int} x
 * @param {int} y
 * @param {Image} background
 */
function Cell(x, y, background){
    var x_pos;
    var y_pos;

    var layer1;
    var layer2;
    var layer3;

    var cellCanvas;

    var cellContext;

    this.constructor = function(x, y, background){
        x_pos = x;
        y_pos = y;

        layer1 = background;
        layer2 = new Image(TILE_SIZE, TILE_SIZE);
        layer3 = new Image(TILE_SIZE, TILE_SIZE);

        cellCanvas = document.createElement("canvas");
        cellCanvas.height = TILE_SIZE;
        cellCanvas.width = TILE_SIZE;

        cellContext = cellCanvas.getContext("2d");

        this.build();
    };


    this.build = function(){
        cellContext.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
        cellContext.drawImage(layer1, 0, 0);
        cellContext.drawImage(layer2, 0, 0);
        cellContext.drawImage(layer3, 0, 0);
        cellContext.fillRect(0,0,20,20);
        CONTEXT.drawImage(cellCanvas, x_pos, y_pos);
    };



    /**
     * @param {string} source
     */
    this.setLayer1 = function(source){
        layer1.src = source;
        this.build();
    };

    /**
     * @param {string} source
     */
    this.setLayer2 = function(source){
        layer2.src = source;
        this.build();
    };

    /**
     * @param {string} source
     */
    this.setLayer3 = function(source){
        layer3.src = source;
        this.build();
    };

    this.constructor(x, y, background);
}