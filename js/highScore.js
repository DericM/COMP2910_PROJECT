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




    this.component.appendChild(title);

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