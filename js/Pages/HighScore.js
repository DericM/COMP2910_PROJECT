/**
 * Created by Deric on 2016-05-18.
 */

/**
 * High score page.
 * @constructor
 */
function HighScore() {
    Page.call(this);

    this.page = document.createElement("div");
    this.page.id = "high-score";
    this.page.className = "page";

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
    this.table.className = "highscores";

    this.header = document.createElement("tr");

    var place = document.createElement("th");
    place.appendChild(document.createTextNode("Place"));

    var name = document.createElement("th");
    name.appendChild(document.createTextNode("User Name"));

    var score = document.createElement("th");
    score.appendChild(document.createTextNode("Score"));

    this.achievements = document.createElement("div");

    this.page.appendChild(title);

    this.header.appendChild(place);
    this.header.appendChild(name);
    this.header.appendChild(score);



    wrapper.appendChild(this.table);
    wrapper.appendChild(this.achievements);

    this.page.appendChild(wrapper);
    this.page.appendChild(home);

}

//inheritance stuff
HighScore.prototype = Object.create(Page.prototype);
HighScore.prototype.constructor = HighScore;


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

    while (this.table.firstChild) {
        this.table.removeChild(this.table.firstChild);
    }
    this.table.appendChild(this.header);

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

    //////////////////////////////////////////
    //temporary until I reorganize things.
    this.buildAchievements();
    /////////////////////////////////////
};

/**
 * Build the trophies
 */
HighScore.prototype.buildAchievements = function(){

    //don't build achievements if no one is logged in.
    if(!PLAYER_DATA.loggedInState){
        return;
    }

    //remove
    while (this.achievements.firstChild) {
        this.achievements.removeChild(this.achievements.firstChild);
    }

    for(var i = 0; i < PLAYER_DATA.achievements.length;i++){
        var trophy = document.createElement("a");
        trophy.className = "trophy";
        trophy.href = "trophy" + i;
        trophy.setAttribute("data-rel", "popup");


        var dialog = document.createElement("div");
        dialog.appendChild(document.createTextNode(PLAYER_DATA.achievName[i]));
        dialog.setAttribute("data-role", "popup");
        dialog.id = "trophy" + i;

        if(i + 1 % 3 == 1){
            trophy.className += " left";
        }
        else if(i + 1 % 3 == 2){
            trophy.className += " center";
        }
        else {
            trophy.className += " right";
        }

        if(PLAYER_DATA.achievements[i]){
            trophy.className += " active";
        }
        trophy.className += " inactive";
        this.achievements.appendChild(trophy);
    }

};





