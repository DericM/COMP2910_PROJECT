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
    var levels = ["xxwxxxxx*xxxxxxx*xxxxxxxxxxxxxxtxxx",
        "*xxxxwx*xx*xxxxxxx*xxxxxxxxxxtxxxxx",
        "xxxxxxw*xxx*xxxxxxxxxx*xxx*t*xxxxxx",
        "xwxxx****xxxxxxx****xxxxx****xxtxxx",
        "*wxxxx**xxxxxx***xx*xxx*xtxxxxxxxxx",
        "xxxxxx*w**xx*x*xxxx****xx*txxxxxxxx",
        "x*wxxx***xxxxxx*xx**xxx*xxx*txxxxxx",
        "xwxxx***xxxxxx*xx*xx*x*xxxxxxxxtxxx",
        "xw**xxxx*x**xxxxx*xxxxxxxx****xxxtx",
        "*xxxwxx**x*xxx*x*x*xxxxx**x*xxxxxxt"];

    this.readLevel = function(grid, level_num) {
        var new_array = [];
        // initialize 2d array of 5 columns
        for (var j = 0; j < 7; j++) {
            new_array[j] = []
        }

        for (var i = 0; i < levels[level_num].length; i++) {
            var row = Math.floor(i / 5);
            var column = i % 5;
            var ch = levels[level_num].charAt(i);
            if (ch == 'x') {
                new_array[row][column] = null;
            } else if (ch == 'w') {
                new_array[row][column] = new WhiteHouse(grid, column, row, null);
            } else if (ch == 't') {
                new_array[row][column] = grid.getTrump();
                grid.getTrump().setLocation(column, row);
            } else if (ch == '*') {
                new_array[row][column] = new Fadable(grid, column, row, null);

            } else {
                alert("there was a problem");
            }
        }
        return new_array;
    }
}