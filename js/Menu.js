/**
 * Builds a new menu.
 *
 * @param canvas
 * @constructor
 */
function Menu(canvas) {

    /** Game object. */
    var game;

    var canvasElement = canvas.getCanvas();
    var context = canvas.getContext();
    var width = canvasElement.getAttribute('width');
    var height = canvasElement.getAttribute('height');


    /**
     * Sets the game
     * @param _game
     */
    this.addGame = function(_game) {
        game = _game;
    };


    /**
     *
     * @param sources
     * @param callback
     */
    var loadImages = function(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 6;

        for(var src in sources) {
            images[src] = new Image();
            images[src].onload = function() {
                if(++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[src].src = sources[src];
        }
    };

    /**
     * Array of sources.
     *
     * @type {{bgImage: string, logoImage: string, playImage: string, instructImage: string, settingsImage: string, creditsImage: string}}
     */
    var sources = {
        bgImage : "Images/circles_bg.png",
        logoImage : "Images/logo.png",
        playImage : "Images/play.png",
        instructImage : "Images/instructions.png",
        settingsImage :   "Images/settings.png",
        creditsImage :  "Images/credits.png"
    };


    loadImages(sources, function(images) {
        draw(images);
    });


    //positions of the buttons
    var buttonX = [width/3,width/3,width/3,width/3];
    var buttonY = [120,200,280,360];
    var buttonWidth = [96,96,96,96];
    var buttonHeight = [40,40,40,40];


    /**
     * Draw the images to the canvas.
     * @param images
     */
    function draw(images) {
        context.drawImage(images.bgImage, 0, 0);
        context.drawImage(images.logoImage, width/3 + 30 ,10);
        context.drawImage(images.playImage, buttonX[0], buttonY[0]);
        context.drawImage(images.instructImage, buttonX[1], buttonY[1]);
        context.drawImage(images.settingsImage, buttonX[2], buttonY[2]);
    }

    var mouseX;
    var mouseY;

    canvasElement.addEventListener("mousemove", checkPos);
    function checkPos(mouseEvent){
        if(mouseEvent.pageX || mouseEvent.pageY == 0){
            mouseX = mouseEvent.pageX - this.offsetLeft;
            mouseY = mouseEvent.pageY - this.offsetTop;
        }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
            mouseX = mouseEvent.offsetX;
            mouseY = mouseEvent.offsetY;
        }
    }


    var play = function(){
        canvas.setVisible(false);
        game.newGame();
    }; //play
    var inst = function(){ console.log("instructions"); };//instructions
    var sett = function(){ console.log("this is function: settings") };//settings
    var cred = function(){ console.log("this is function: credits") };//credits

    var arrayFunc = [play,inst,sett,cred];




    canvasElement.addEventListener("mouseup", checkClick);
    function checkClick(){
        for(i = 0; i < buttonX.length; i++){
            if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
                if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                    arrayFunc[i]();
                }
            }
        }
    }



}
