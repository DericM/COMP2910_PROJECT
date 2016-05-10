/**
 * 
 */
function Menu(){

    CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);

    this.play = function () {
        new Game();
    };

    this.scoreScreen = function() {
        //new scoreScreen();
    };

    this.toggleMute = function() {
        //code to toggle mute
    };


    //-----------------
    //temporary call to play. In the finished menu onclick="play()"
    this.play();
    //-------------------
}