
function Menu(canvas) {
    var canvasElement = canvas.getCanvas();
    var context = canvas.getContext();
    var width = canvas.getWidth();
    var height = canvas.getHeight();

    //positions of the buttons
    var buttonX = [width/3,width/3,width/3,width/3];
    var buttonY = [120,200,280,360];
    var buttonWidth = [95,95,95,95];
    var buttonHeight = [40,40,40,40];

    var mouseX;
    var mouseY;

    var sources = {
        bgImage : "Images/Background.png",
        logoImage : "Images/logo.png",
        playImage : "Images/play.png",
        instructImage : "Images/instructions.png",
        settingsImage :   "Images/settings.png",
        creditsImage :  "Images/credits.png"
    };

    this.loadImages = function(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
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

/*
          loadImages(sources, function(images) {
            draw(images);
          });
*/

    this.clear =function(){
        context.clearRect(0, 0, width, height);
    };

    this.draw = function(images) {
        context.drawImage(images.bgImage, 0, 0);
        context.drawImage(images.logoImage, width/2 - 30 ,10);
        context.drawImage(images.playImage, buttonX[0], buttonY[0]);
        context.drawImage(images.instructImage, buttonX[1], buttonY[1]);
        context.drawImage(images.settingsImage, buttonX[2], buttonY[2]);
        context.drawImage(images.creditsImage, buttonX[3], buttonY[3]);
    };

    this.checkPos = function(mouseEvent){
        if(mouseEvent.pageX || mouseEvent.pageY == 0){
            mouseX = mouseEvent.pageX - this.offsetLeft;
            mouseY = mouseEvent.pageY - this.offsetTop;
        } else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
            mouseX = mouseEvent.offsetX;
            mouseY = mouseEvent.offsetY;
        }
    };
    canvasElement.addEventListener("mousemove", "checkPos()");

    //array of functions to respond to the clicks to each menu item
    var a = function(){ clear();  }
    var b = function(){ console.log("this is function: instructions") }
    var c = function(){ console.log("this is function: settings") }
    var d = function(){ console.log("this is function: credits") }

    var arrayFunc = [a, b, c, d];




    var fadeId = 0;
    canvasElement.addEventListener("mouseup", "checkClick()");

    this.checkClick = function(mouseEvent){
        for(i = 0; i < buttonX.length; i++){
            if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
                if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                     arrayFunc[i]();
                }
            }
        }
    };
}
