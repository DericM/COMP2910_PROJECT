function LevelManager() {

    /**
     * An array of strings that represent levels
     *
     * The strings currently are set for a 5 x 7 grid
     *
     * 'x' denotes an empty cell
     * '*' denotes a mine
     * 'w' denotes the white house
     * 't' denotes trump
     *
     * @type {string[]}
     */
    var levels = [
        ["xxwxx", "xxx*x", "xxxxx", "x*xxx", "xxxxx", "xxxxx", "xtxxx"],
        ["*xxxx", "wx*xx", "*xxxx", "xxx*x", "xxxxx", "xxxxt", "xxxxx"],
        ["xxxxx", "xw*xx", "x*xxx", "xxxxx", "xx*xx", "x*t*x", "xxxxx"],
        ["xwxxx", "****x", "xxxxx", "x****", "xxxxx", "****x", "xtxxx"],
        ["*wxxx", "x**xx", "xxxx*", "**xx*", "xxx*x", "txxxx", "xxxxx"],
        ["xxxxx", "x*w**", "xx*x*", "xxxx*", "***xx", "*txxx", "xxxxx"],
        ["x*wxx", "x***x", "xxxxx", "*xx**", "xxx*x", "xx*tx", "xxxxx"],
        ["xw**x", "xxx*x", "**xxx", "xx*xx", "xxxxx", "x****", "xxxtx"],
        ["*xxxw", "xx**x", "*xxx*", "x*x*x", "xxxx*", "*x*xx", "xxxxt"],
        ["*xxx*", "xx*xx", "xxw*x", "x**xx", "x*t*x", "*xx*x", "xxxxx"],
        
        ["xx*wx", "xxxx*", "xxx*x", "**xxx", "xxxxx", "x***x", "xtxxx"],
        ["wx*xx", "*x*x*", "xxxxx", "xx*xx", "**t*x", "xxxxx", "x*x*x"],
        ["xtx*x", "x*xxx", "xxx*x", "*xxx*", "xx*xx", "x***x", "xxwxx"],
        ["x*xxx", "x*x*w", "xxx*x", "*xxx*", "t*xxx", "x*x*x", "xxx*x"],
        ["*xw*x", "xx*xx", "x**xx", "xx**t", "*x*xx", "xx*xx", "*xxx*"],
        ["txxxx", "*xx*x", "xxxxx", "x**x*", "xxxxx", "xxx*x", "*xxxw"],
        ["xxxxx", "*x*x*", "xxxxx", "x*w*x", "xx*xx", "*xxx*", "txxxx"],
        ["*xwx*", "*x*x*", "xxxxx", "x***x", "xx*xx", "*x*x*", "*xtx*"],
        ["wxx**", "x*xxx", "***xx", "xxxx*", "x***x", "x***x", "xxtxx"],
        ["x*xtx", "xxxx*", "*x*xx", "*xxxx", "xx*xx", "x*w*x", "xxxx*"],
        ["w*xxx", "xx*xx", "*xxxx", "xxx**", "x*xxx", "*x*xx", "txxx*"],
        ["*xxx*", "xw*xx", "**xxx", "xxxx*", "*x***", "xx*tx", "*xxx*"],
        ["xxx*x", "w*xx*", "*t*xx", "xxx*x", "*xx*x", "x*xxx", "*xx*x"],
        ["xxxwxx", "*x***x", "xx*xxx", "*xxxx*", "***xxx, ", "xxxxxx", "x***xx" ,"xxtx**"]
    
    ];

    /**
     * Read the specified level string and returns
     * an array of objects to be displayed on the grid for the level.
     *
     * @param {Grid} grid         :  the grid that will be given to the trump object
     * @param {number} level_num  :  level_num
     * @returns {Array}           :  The array of objects to be displayed.
     */
    this.readLevel = function(grid, level_num) {

        var level_array = [];


        for (var i = 0; i < levels[level_num].length; i++) {
            level_array[i] = [];

            for (var j = 0; j < levels[level_num][i].length; j++) {

                var ch = levels[level_num][i].charAt(j);

                if (ch == 'x') {
                    level_array[i][j] = null;
                } else if (ch == 'w') {
                    level_array[i][j] = new WhiteHouse(grid, j, i, RESOURCES.getImage("whitehouse"));
                } else if (ch == 't') {
                    level_array[i][j] = grid.getTrump();
                    grid.getTrump().setLocation(j, i);
                } else if (ch == '*') {
                    level_array[i][j] = new Fadable(grid, j, i, RESOURCES.getImage("mine"));

                } else {
                    alert("there was a problem");
                }
            }
        }
        return level_array;
    };

}
