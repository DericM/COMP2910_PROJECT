//CURRENTLY NOT IN USE.

function ResourceManager() {
    var images = {};
    var imageSources = {
        mine: "Images/land_mine.png",
        trump: "Images/trump.png",
        whitehouse: "Images/whitehouse.png",
        snake: "Images/snakeWoman.jpg",
        orientlistener: "Images/orientlistener.png",
        spraytan: "Images/spraytan.png",

        star: "Images/star.png",
        grass1: "Images/grass1.png",
        grass2: "Images/grass2.png",
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
        im_smart : "Sounds/im_smart.mp3",
    
		art_of_the_deal : "Sounds/art_of_the_deal.mp3",
		country_to_hell : "Sounds/country_to_hell.mp3",
		handsome : "Sounds/handsome.mp3",
		having_fun : "Sounds/having_fun.mp3",
		insane : "Sounds/insane.mp3",
		lets_go_on : "Sounds/lets_go_on.mp3",
		like_in_a_war : "Sounds/like_in_a_war.mp3",
		more_energy_tonight : "Sounds/more_energy_tonight.mp3",
		proud : "Sounds/proud.mp3",
		wonderful_guy : "Sounds/wonderful_guy.mp3"
    };
    
    var winSounds = ["build_wall", "im_rich", "nobody_builds", "mexico_pay", "im_smart", "proud", "wonderful_guy", "country_to_hell", "handsome", "having_fun", "insane", "lets_go_on", "like_in_a_war", "more_energy_tonight", "art_of_the_deal"];
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
            images[src].id = src;
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
