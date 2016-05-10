/**
 *
 */
function Menu(){

    this.constructor = function(){
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);

        //-----------------
        //temporary call to play. In the finished menu: Playbutton onclick="play()"
        this.play();
        //-------------------
    };


    this.play = function () {
        new Game();
    };

    this.scoreScreen = function() {
        //new scoreScreen();
    };

    this.toggleMute = function() {
        //code to toggle mute
    };



    this.constructor();
}