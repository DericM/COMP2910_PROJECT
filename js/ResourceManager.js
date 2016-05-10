function ResourceManager(){



    this.grass = new Tile("assets/grass.png");


    this.mine = new Tile("assets/mine.png");


    /**
     * @param {int} type
     */
    this.getTile = function(type) {

        switch(type){
            case 0:
                return this.grass;
            case 1:
                return this.mine;
            default:
                throw "no such tile";
        }

    };

}