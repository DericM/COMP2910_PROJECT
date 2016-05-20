/**
 * Created by Deric on 2016-05-18.
 */

function HighScore() {

    this.component = document.createElement("div");
    this.component.id = "high-score";
    this.component.className = "page";

    //build
    var title = document.createElement("h1");
    title.innerHTML = "High Score";

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";


    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        HIGH_SCORE.setVisibility(false);
        MENU.setVisibility(true);
    });



    this.table = document.createElement("table");
    this.id = "highscores";

    var row = document.createElement("tr");

    var place = document.createElement("th");
    place.appendChild(document.createTextNode("Place"));

    var name = document.createElement("th");
    name.appendChild(document.createTextNode("User Name"));

    var score = document.createElement("th");
    score.appendChild(document.createTextNode("Score"));


    this.component.appendChild(title);

    row.appendChild(place);
    row.appendChild(name);
    row.appendChild(score);

    this.table.appendChild(row);

    wrapper.appendChild(this.table);

    this.component.appendChild(wrapper);
    this.component.appendChild(home);

}


HighScore.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.component);
        }
        else {
            container.removeChild(this.component);
        }
    }

};

/**
 * Pulls the highscores from the server.
 */
HighScore.prototype.pullHighScores = function(){

    var url = "php/highscore.php"; // the script where you handle the form input.

    var bindThis = this;

    $.ajax({
        type: "POST",
        url: url,
        success: function(data) {

            var obj = JSON.parse(data);
            bindThis.buildScores(obj);

        }
    });
};

/**\
 * Builds the score table and appends it to the screen.
 * @param obj
 */
HighScore.prototype.buildScores = function(obj) {

    for(var i = 0; i < obj.length; i++){
        console.log(obj[i].username + " " + obj[i].score);

        var row = document.createElement("tr");

        var place = document.createElement("td");
        place.appendChild(document.createTextNode("" + (i + 1)));

        var name = document.createElement("td");
        name.appendChild(document.createTextNode(obj[i].username));

        var score = document.createElement("td");
        score.appendChild(document.createTextNode(obj[i].score));

        row.appendChild(place);
        row.appendChild(name);
        row.appendChild(score);

        this.table.appendChild(row);

    }
};