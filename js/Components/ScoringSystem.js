
function ScoringSystem(canvas) {
    this.score = 0;
    this.factor = 0;
    
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext();
    this.fail = 0;
    
    this.fontSize = 40;
    
    var perc = 0.7;
    var width = WIDTH * perc;
    var height = width * 7 / 5;
    if(height > HEIGHT * perc) {
        height = HEIGHT * perc;
        width = height * 5 / 7;
    }
    var xCoord = (WIDTH / 2) - (width / 2);
    var yCoord = (HEIGHT / 2) + (height / 2) + this.fontSize;
    
    var failFactor = new Array();
    failFactor[0] = 1;
    failFactor[1] = 0.6;
    failFactor[2] = 0.4;

    this.draw = function() {
        // this.ctx.fillStyle = "#CCC";
        // this.ctx.fillRect(0, HEIGHT - (HEIGHT * 0.1), WIDTH, HEIGHT * 0.1);
        this.ctx.fillStyle = "#ffcc99";
        this.ctx.strokeStyle = "#000";
        this.ctx.font = (HEIGHT * 0.05) + "px Arial";
        this.ctx.fillText("Score: " + this.score, 30, 75);
        this.ctx.strokeText("Score: " + this.score, 30, 75);

        if (PLAYER_DATA.getLoggedInState()) {
            this.ctx.fillText("Logged in as: " + PLAYER_DATA.getUserName(), 10, 30);
        }

        var place = WIDTH / 2;

        //this.ctx.font = (13) + "px Arial";
        //this.ctx.fillText("Lives: ", place - 55, 73);

        for (var i = GAME.grid.getTrump().getLives(); i > 0; i--) {
            // this.ctx.fillStyle = "#CCC";
            // this.ctx.fillRect((place += 35), 50, 30, 30);
            this.ctx.drawImage(RESOURCES.getImage("trump"), (place += 35), 50, 30, 30);
        }


    };
    
    this.clearFail = function() {
        this.fail = 0;
    };
    
    this.incrementFail = function() {
        (this.fail)++;
    };
    
    this.setFactor = function(factor) {
        this.factor = factor;
    };
    
    this.resetScore = function() {
        this.score = 0;
        
    };
    
    this.addToScore = function(level) {
        this.score += ((level + 1) * 100) * failFactor[this.fail] ;
        
    };
    
    this.getScore = function() {
        return this.score;
        
    };

}