/**
 * Created by Deric on 2016-05-16.
 */

function LoadingScreen() {

    this.loadingScreen = document.createElement("div");
    this.loadingScreen.id = "loading_screen";
    this.loadingScreen.class = "page";
    

}


LoadingScreen.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.loadingScreen);
        }
        else {
            container.removeChild(this.loadingScreen);
        }
    }

};