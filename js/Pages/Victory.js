/**
 * Created by Deric on 16/05/19.
 */

/**
 * Defeat popup screen when you die.
 * @constructor
 */
function Victory() {
    Page.call(this);

    this.page.id = "victory";
    this.page.className = "popup";

    var title = document.createElement("h1");
    title.innerHTML = "Victory";

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";

    var newGame = document.createElement("button");
    newGame.appendChild(document.createTextNode("New Game"));
    newGame.addEventListener('click', function(){
        VICTORY.setVisibility(false);
        GAME.newGame();
    });

    var score = document.createElement("button");
    score.appendChild(document.createTextNode("High Score"));
    score.addEventListener('click', function(){
        GAME.setVisibility(false);
        VICTORY.setVisibility(false);
        HIGH_SCORE.build();
        HIGH_SCORE.setVisibility(true);
    });


    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        GAME.setVisibility(false);
        VICTORY.setVisibility(false);
        MENU.setVisibility(true);
    });


    wrapper.appendChild(title);
    wrapper.appendChild(newGame);
    wrapper.appendChild(score);


    this.page.appendChild(wrapper);
    this.page.appendChild(home);
}

//inheritance stuff
Victory.prototype = Object.create(Page.prototype);
Victory.prototype.constructor = Victory;
