
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');


function loadImages(sources, callback) {
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
var buttonWidth = [95,95,95,95];
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
 
canvas.addEventListener("mousemove", checkPos);

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
var a = function(){ clear();  }
  var b = function(){ console.log("this is function: instructions") }
  var c = function(){ console.log("this is function: settings") }
  var d = function(){ console.log("this is function: credits") }

  var arrayFunc = [a,b,c,d];

  


var fadeId = 0;
canvas.addEventListener("mouseup", checkClick);

function checkClick(mouseEvent){
    for(i = 0; i < buttonX.length; i++){
        if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
            if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                 arrayFunc[i]();
            }
        }
    }
}
