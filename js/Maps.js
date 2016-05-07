function Maps(){

    var level_1 = [
        [1,0,0,0,1],
        [1,1,1,0,1],
        [1,1,1,0,1],
        [1,1,1,0,1],
        [1,1,1,0,1],
        [1,1,1,0,1],
        [1,1,1,0,1]
    ];

    var level_2 = [
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1]
    ];


    /**
     * @param {int} level
     */
    this.getMap = function(level){
        switch (level) {
            case 1:
                return level_1;
            case 2:
                return level_2;
            default:
                throw "no such level";
        }
    };

}