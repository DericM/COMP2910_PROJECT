/**
 * Represents a Cell or block in the game, can contain multiple layers of sprites.
 * @constructor
 * @param {int} x
 * @param {int} y
 * @param {Image} background
 */
function Cell(x, y, background){
    this.x = x;
    this.y = y;

    this.layer1 = background;
    this.layer2 = new Image(TILE_SIZE, TILE_SIZE);
    this.layer3 = new Image(TILE_SIZE, TILE_SIZE);

    this.canvas = document.createElement("canvas");
    this.canvas.height = TILE_SIZE;
    this.canvas.width = TILE_SIZE;

    var context = this.canvas.getContext("2d");


    /////
    var cv = document.getElementById("game");
    var ctx = cv.getContext("2d");



    this.getCanvas = function(){
        return this.canvas;
    };


    this.build = function(){
        context.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
        context.drawImage(this.layer1, 0, 0);
        context.drawImage(this.layer2, 0, 0);
        context.drawImage(this.layer3, 0, 0);
        context.fillRect(0,0,20,20);
        //ctx.drawImage(this.canvas,this.x,this.y);
    };
    this.build();


    /**
     * @param {string} source
     */
    this.setLayer1 = function(source){
        this.layer1.src = source;
        this.build();
    };

    /**
     * @param {string} source
     */
    this.setLayer2 = function(source){
        this.layer2.src = source;
        this.build();
    };

    /**
     * @param {string} source
     */
    this.setLayer3 = function(source){
        this.layer3.src = source;
        this.build();
    };

}