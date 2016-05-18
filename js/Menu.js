
function Menu() {

    this.menu = document.createElement("div");
    this.menu.id = "menu";
    this.menu.class = "page";

    //build
    var title = document.createElement("h1");
    title.id = "menu-title";
    title.innerHTML = "Trump Runner";

    var play = document.createElement("button");
    play.id = "menu-button-play";
    play.appendChild(document.createTextNode("Play"));
    play.addEventListener('click', function(){
        MENU.setVisibility(false);
        var container = document.getElementById("container");
        container.style.backgroundImage = "none";
        GAME.newGame();
    });

    var score = document.createElement("button");
    score.id = "menu-button-score";
    score.appendChild(document.createTextNode("High Score"));
    score.addEventListener('click', function(){
        MENU.setVisibility(false);
        //future call to high scores
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
    login.id = "menu-button-login";
    login.appendChild(document.createTextNode("Login"));
    login.addEventListener('click', function(){
        MENU.setVisibility(false);
        LOGIN.setVisibility(true);
    });


    this.menu.appendChild(title);
    this.menu.appendChild(play);
    this.menu.appendChild(score);
    this.menu.appendChild(login);

}


Menu.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.menu);
        }
        else {
            container.removeChild(this.menu);
        }
    }

};