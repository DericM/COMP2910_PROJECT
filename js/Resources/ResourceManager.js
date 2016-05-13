function ResourceManager(){

    ////////////////////////////////////////////////TILES////////////////////////////////////////////////////
     this.grass = new Image(TILE_SIZE, TILE_SIZE);
     this.grass.src = "Images/grass.png";

     this.mine = new Image(TILE_SIZE, TILE_SIZE);
     this.mine.src = "Images/mine.png";

     this.trump = new Image();
     this.trump.src = "Images/trump.png";

     this.whitehouse = new Image(TILE_SIZE, TILE_SIZE);
     this.whitehouse.src = "Images/whitehouse.png";


     //////////////////////////////////////////////BACKGROUND////////////////////////////////////////////////

     this.circles_bg = new Image(TILE_SIZE, TILE_SIZE);
     this.circles_bg.src = "Images/circles_bg.png";

     /////////////////////////////////////////////MENU///////////////////////////////////////////////////////

     this.credits = new Image(TILE_SIZE, TILE_SIZE);
     this.credits.src = "Images/credits.png";

     this.play = new Image(TILE_SIZE, TILE_SIZE);
     this.play.src = "Images/play.png";

     this.settings = new Image(TILE_SIZE, TILE_SIZE);
     this.settings.src = "Images/settings.png";

     this.ship = new Image(TILE_SIZE, TILE_SIZE);
     this.ship.src = "Images/ship.png";

     this.instructions = new Image(TILE_SIZE, TILE_SIZE);
     this.instructions.src = "Images/instructions.png";
}