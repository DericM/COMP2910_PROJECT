//CURRENTLY NOT IN USE.

function ResourceManager() {
    var images = {};
    var imageSources = {
        mine: "Images/land_mine.png",
        trump: "Images/trump.png",
        whitehouse: "Images/whitehouse.png",
        nextlevel: "Images/nextLevel.png",
        snake: "Images/snakeWoman.jpg",
        home: "Images/home.png",
        login: "Images/login.png",
        newgame: "Images/newgame.png",
        no: "Images/no.png",
        yes: "Images/yes.png",
        back: "Images/back.png",
        orient: "Images/orient.png",

        spraytan: "Images/spraytan.png",

        star: "Images/star.png",
    
        certificate: "Images/certificate.png"
    };

    var loadedImages = 0;
    var numImages = 0;

    
    var sounds = {};
    
    var soundSources = {
		chime : "Sounds/chime.mp3",
        explosion : "Sounds/explosion.mp3",
		spraytan : "Sounds/spraytan.mp3",
		star : "Sounds/star.mp3",
		certificate : "Sounds/certificate.mp3",
		
        snake_woman : "Sounds/snake_woman.mp3",
        low_energy : "Sounds/low_energy.mp3",
        neverbegreat : "Sounds/neverbegreat.mp3",
        make_america_great : "Sounds/make_america_great.mp3",

        build_wall : "Sounds/build_wall.mp3",
        im_rich : "Sounds/im_rich.mp3",
        nobody_builds : "Sounds/nobody_builds.mp3",
        mexico_pay : "Sounds/mexico_pay.mp3",
        im_smart : "Sounds/im_smart.mp3"
    };
    
    var winSounds = ["build_wall", "im_rich", "nobody_builds", "mexico_pay", "im_smart"];
    var chooser = 0;
    
    this.getNextWinSound = function() {
        if (chooser === winSounds.length) {
            chooser = 0;
        }
        return winSounds[chooser++];
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
        for(var src in soundSources) {
            sounds[src] = document.createElement("audio");
            sounds[src].setAttribute("src", soundSources[src]);
            sounds[src].setAttribute("type", "audio/mp3");
        }
    };

    this.playSound = function(name) {
        sounds[name].play();
    };

    this.pauseSound = function(name) {
        sounds[name].pause();
    };
}
