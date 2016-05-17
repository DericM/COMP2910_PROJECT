//CURRENTLY NOT IN USE.

function ResourceManager() {
    var images = {};
    var imageSources = {
        mine: "Images/mine.png",
        trump: "Images/trump.png",
        whitehouse: "Images/whitehouse.png",
        nextlevel: "Images/nextLevel.png",
        snake: "Images/snakeWoman.jpg"
    };

    var loadedImages = 0;
    var numImages = 0;

    var sounds = {};
    var soundSources = {
        snake_woman : "Sounds/snake_woman.ogg"
    };

    this.loadImages = function(main) {
        for(var src in imageSources) {
            numImages++;
        }

        for(var src in imageSources) {
            images[src] = new Image();
            images[src].onload = function() {
                if(++loadedImages >= numImages) {
                    //proved images loaded here.
                    
                    main.init();

                }
            };
            images[src].src = imageSources[src];
        }
    };

    this.getImage = function(name) {
        return images[name];
    };

    this.loadSounds = function() {
        laugher = document.createElement("audio");
        laugher.setAttribute("src", "sound_test/snake_woman.ogg");
        laugher.setAttribute("type", "audio/ogg");
    };

    this.loadSounds = function() {
        for(var src in soundSources) {
            sounds[src] = document.createElement("audio");
            sounds[src].setAttribute("src", soundSources[src]);
            sounds[src].setAttribute("type", "audio/ogg");
        }
    };

    this.playSound = function(name) {
        sounds[name].play();
    };

    this.pauseSound = function(name) {
        sounds[name].pause();
    };
}
