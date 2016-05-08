function ResourceManager(){



    var grass = new Tile("assets/Grass.png");


    var mine = new Tile("assets/Mine.png");


    /**
     * @param {int} type
     */
    this.getTile = function(type) {

        switch(type){
            case 0:
                return grass;
            case 1:
                return mine;
            default:
                throw "no such tile";
        }

    };

}