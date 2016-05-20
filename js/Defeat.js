/**
 * Created by Deric on 16/05/19.
 */
/**
 * Created by Deric on 16/05/19.
 */

function Defeat() {

    this.component = document.createElement("div");
    this.component.id = "menu";
    this.component.className = "popup";

    //build
    var title = document.createElement("h1");
    title.innerHTML = "Defeat";

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";

    var newGame = document.createElement("button");
    newGame.appendChild(document.createTextNode("Play"));
    newGame.addEventListener('click', function(){
        DEFEAT.setVisibility(false);
        GAME.newGame();
    });

    var score = document.createElement("button");
    score.appendChild(document.createTextNode("High Score"));
    score.addEventListener('click', function(){
        GAME.setVisibility(false);
        DEFEAT.setVisibility(false);
        HIGH_SCORE.pullHighScores();
        HIGH_SCORE.setVisibility(true);
        //future call to high scores
    });


    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        GAME.setVisibility(false);
        MENU.setVisibility(true);
    });


    wrapper.appendChild(title);
    wrapper.appendChild(newGame);
    wrapper.appendChild(score);
    wrapper.appendChild(home);

    this.component.appendChild(wrapper);

}


Defeat.prototype = {

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