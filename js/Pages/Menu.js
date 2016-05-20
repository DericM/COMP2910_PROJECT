/**
 * Menu page.
 * @constructor
 */
function Menu() {
    Page.call(this);
    
    this.page.id = "menu";
    this.page.className = "page";

    //build
    var title = document.createElement("h1");
    title.innerHTML = "Trump Runner";

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";

    var play = document.createElement("button");
    play.appendChild(document.createTextNode("Play"));
    play.addEventListener('click', function(){
        MENU.setVisibility(false);
        GAME.newGame();
    });

    var score = document.createElement("button");
    score.appendChild(document.createTextNode("High Score"));
    score.addEventListener('click', function(){
        MENU.setVisibility(false);
        HIGH_SCORE.pullHighScores();
        HIGH_SCORE.setVisibility(true);
    });

    /* CODE FOR FACEBOOK LOGIN BUTTON*/
    /*
    var login = document.createElement("div");
    login.id = "button-login";
    login.setAttribute("class", "fb-login-button");
    login.setAttribute("data-max-rows", "1");
    login.setAttribute("data-size", "xlarge");
    login.setAttribute("data-show-faces", "false");
    login.setAttribute("data-auto-logout-link", "false");
    */

    var login = document.createElement("button");
    login.appendChild(document.createTextNode("Login"));
    login.addEventListener('click', function(){
        MENU.setVisibility(false);
        LOGIN.setVisibility(true);
    });

    this.page.appendChild(title);

    wrapper.appendChild(play);
    wrapper.appendChild(score);
    wrapper.appendChild(login);

    this.page.appendChild(wrapper);
}

//inheritance stuff
Menu.prototype = Object.create(Page.prototype);
Menu.prototype.constructor = Menu;










