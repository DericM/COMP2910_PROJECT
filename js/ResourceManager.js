function ResourceManager(){



    var grass = new Tile("assets/grass.png");


    var mine = new Tile("assets/mine.png");


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