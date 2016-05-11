/**
 * Created by Deric on 16/05/10.
 */

function Context(){

    var canvas1 = document.createElement("canvas");
    var canvas2 = document.createElement("canvas");
    var canvas3 = document.createElement("canvas");



    this.layer1 = canvas1.getContext("2d");
    this.layer2 = canvas2.getContext("2d");
    this.layer3 = canvas3.getContext("2d");


    this.build = function(){
        var canvas = document.getElementById("game");

        canvas.drawImage(canvas1, 0, 0);
        canvas.drawImage(canvas2, 0, 0);
        canvas.drawImage(canvas3, 0, 0);
    }

}
