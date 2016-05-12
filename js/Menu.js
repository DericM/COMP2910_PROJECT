
function Menu(canvas) {
    var canvas = canvas;
    var game;
    var canvasElement = canvas.getCanvas();
    var context = canvas.getContext();
    var width = canvasElement.getAttribute('width');
    var height = canvasElement.getAttribute('height');

    this.addGame = function(_game) {
        game = _game;
    }

    var loadImages = function(sources, callback) {
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
    }

    var sources = {

        bgImage : "Images/Background.png",

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



    function clear(){
        context.clearRect(0, 0, width, height);
    }

    function draw(images) {
        context.drawImage(images.bgImage, 0, 0);
        context.drawImage(images.logoImage, width/2 - 30 ,10);
        context.drawImage(images.playImage, buttonX[0], buttonY[0]);
        context.drawImage(images.instructImage, buttonX[1], buttonY[1]);
        context.drawImage(images.settingsImage, buttonX[2], buttonY[2]);
        context.drawImage(images.creditsImage, buttonX[3], buttonY[3]);
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

//array of functions to respond to the clicks to each menu item
    var a = function(){
        canvas.setVisible(false);
        game.newGame();
    } //play
    var b = function(){ console.log("instructions"); };//instructions
    var c = function(){ console.log("this is function: settings") };//settings
    var d = function(){ console.log("this is function: credits") };//credits
    var arrayFunc = [a,b,c,d];




    var fadeId = 0;
    canvasElement.addEventListener("mouseup", checkClick);

    function checkClick(mouseEvent){
        for(i = 0; i < buttonX.length; i++){
            if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
                if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                    arrayFunc[i]();
                }
            }
        }
    }


// canvas.addEventListener("mouseover", function(event){
//    for(i = 0; i < buttonX.length; i++){
//         if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
//             if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
//                 canvas.style.cursor = "pointer"; 
//             }
//         }else {

//               canvas.style.cursor = "default";
//         }
//     } 
// });

}