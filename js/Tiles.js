function Tiles(){

    function Tile(color){
        this.myCanvas = document.createElement("canvas");
        this.myCanvas.width = TILE_SIZE + "px";
        this.myCanvas.height = TILE_SIZE + "px";
        this.ctx = this.myCanvas.getContext("2d");
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);


        var canvas = document.getElementById("game");
        var ctxH   = canvas.getContext("2d");
        ctxH.drawImage(this.myCanvas, 0,0);

        //this.img = document.createElement("img");
        //this.img.src = "tilesG.jpg";


    }

    var blank = new Tile("#00FFFF");

    var mine = new Tile("#FF0000");


    /**
     * @param {int} type
     */
    this.getTile = function(type) {

        switch(type){
            case 0:
                return blank;
            case 1:
                return mine;
            default:
                throw "no such tile";
        }

    };

}