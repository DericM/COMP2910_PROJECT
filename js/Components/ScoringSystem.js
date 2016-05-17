
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

        this.ctx.font = this.fontSize + "px Arial";
        this.ctx.fillStyle = "#000";
        this.ctx.fillText("Score: ", xCoord, yCoord);
        this.ctx.fillText(this.score, WIDTH / 2 , yCoord);

    };
    
    this.clearFail = function() {
        this.fail = 0;
    };
    
    this.incrementFail = function() {
        this.fail++;
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
        return this.score
        
    };

}