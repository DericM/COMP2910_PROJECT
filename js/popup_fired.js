
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
var score = 0; 


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

        //crossImage : "Images/cross.png",

        menuImage : "Images/mainMenu.png",

        //levelImage : "Images/nextLevel.png",
      };


      loadImages(sources, function(images) {
        draw(images);
      });


//positions of the buttons
var buttonX = [ width/3];
var buttonY = [height/2 ];
var buttonWidth = [96];
var buttonHeight = [40];



function clear(){
    context.clearRect(0, 0, width, height);
}

function draw(images) {

context.drawImage(images.bgImage, 0, 0);
//context.drawImage(images.crossImage, buttonX[0] ,buttonY[0]);
context.drawImage(images.menuImage, buttonX[0] ,buttonY[0]);
//context.drawImage(images.levelImage, buttonX[1] ,buttonY[1]);
context.strokeRect(20,height/3,width-40,height/3 + 40);
context.fillStyle = 'Red';
write('You\'re Fired!!!', width/3 - 50, height/3 + 50);
write('score: ' + score , width/3, height-50);
}

//write text on the canvas 
//x,y == coordinates
function write(text,x,y){
  context.font = "40px Arial bold";
  context.fillText(text,x,y);
} 

var mouseX;
var mouseY;
 
canvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent){
    if(mouseEvent.pageX || mouseEvent.pageY == 0){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
    } else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
    mouseX = mouseEvent.offsetX;
    mouseY = mouseEvent.offsetY;
    }
}

//array of functions to respond to the clicks to each menu item
// var a = function(){ 
//         clear();  
//         canvas.removeEventListener("mousemove", checkPos);
//         canvas.removeEventListener("mouseup", checkClick);
//       }
var a = function(){ console.log("main menu"); } //main menu
//var b = function(){ console.log("next level"); }
  
  var arrayFunc = [a];

  


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

