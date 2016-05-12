function ResourceManager(){
    this.grass = new Image(TILE_SIZE, TILE_SIZE);
    this.mine = new Image(TILE_SIZE, TILE_SIZE);

    this.constructor = function(){
        this.grass.src = "assets/grass.png";
        this.mine.src = "assets/mine.png";
    };
    
    this.constructor();
}