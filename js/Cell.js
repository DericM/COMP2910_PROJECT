/**
 * Represents a Cell or block in the game, can contain multiple layers of sprites.
 * @constructor
 * @param {int} x
 * @param {int} y
 */
function Cell(x, y){
    var x_pos;
    var y_pos;

    var layer1;
    var layer2;
    var layer3;


    this.constructor = function(x, y){
        x_pos = x;
        y_pos = y;

        layer1 = new Tile("");
        layer2 = new Tile("");
        layer3 = new Tile("");

    };


    



    /**
     * @param {Tile} tile
     */
    this.setLayer1 = function(tile){
        layer1 = tile;
    };

    /**
     * @param {Tile} tile
     */
    this.setLayer2 = function(tile){
        layer2 = tile;
    };

    /**
     * @param {Tile} tile
     */
    this.setLayer3 = function(tile){
        layer3 = tile;
    };


    /**
     */
    this.getLayer1 = function(){
        return layer1;
    };

    /**
     */
    this.getLayer2 = function(){
        return layer2;
    };

    /**
     */
    this.getLayer3 = function(){
        return layer3;
    };



    this.constructor(x, y);
}