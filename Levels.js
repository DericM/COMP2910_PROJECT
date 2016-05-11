var LEVELS = {
	var level = ["xxwxxxxx*xxxxxxx*xxxxxxxxxxxxxxtxxx",
               "xxxxxwx*xxxxxxxxx*xxxxxxxxxxxtxx*xx",
               "xx*xwxx*xxxxxxxxxxx*xxxxxxxxxxxxtxx",
               "xxwxxxx**xxxxxxxxxxxxxxxxx**xxxxtxx",
               "wxxxxxxxxxxx*xxxx*xxxx*xx**xxxxxtxx",
               "xxxxxxxxxxw*xxxx*xxxxxxxx***xxtxxxx",
               "x*wxxx***xxxxxx*xx**xxx*xxx*xxxxtxx",
               "x*wxxx***xxxxxx*xx**xxx*xxx*xxxxtxx",
               "xw**xxxx*x**xxxxx*xxxxxxxx****xxxtx",
               "xw**xxxx*x**xxxxx*xxxxxxxx****xxxtx"];

  function readLevel(level_string, level_num) {
    var new_array = [];
    for (var i = 0; i < level_string[level_num].length; i++) {
      var row = Math.floor(i / 5);
      var column = i % 5;
      var ch = level_string[level_num].charAt(i);

      if (ch == 'x') {
        new_array.push(null);

      } else if (ch == 'w') {
        new_array.push(null);
        conole.log("WHITE HOUSE HAS NOT BEEN IMPLEMENTED");
      } else if (ch == 't') {
        new_array.push(new Trump(column, row, null));

      } else if (ch == '*') {
        new_array.push(new Fadable(column, row, null));

      } else {
        alert("there was a problem");
      }
    }
    return new_array;
  }
}