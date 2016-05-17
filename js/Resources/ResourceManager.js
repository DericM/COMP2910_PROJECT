//CURRENTLY NOT IN USE.

function ResourceManager() {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    var sources = {
        mine: "Images/mine.png",
        trump: "Images/trump.png",
        whitehouse: "Images/whitehouse.png",
        nextlevel: "Images/nextLevel.png"
    };

    this.loadImages = function() {
        for(var src in sources) {
            numImages++;
        }

        for(var src in sources) {
            images[src] = new Image();
            images[src].onload = function() {
                if(++loadedImages >= numImages) {
                    //proved images loaded here.
                    Main();

                }
            };
            images[src].src = sources[src];
        }
    };

    this.getImage = function(name) {
        return images[name];
    };
}
