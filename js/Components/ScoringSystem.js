
function ScoringSystem(canvas) {
    this.score = 0;
    this.factor = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext();
    this.fail = 0;
    this.fontSize = (HEIGHT * 0.5) + "px Arial";


    var failFactor = new Array();
    failFactor[0] = 1;
    failFactor[1] = 0.6;
    failFactor[2] = 0.4;

    this.draw = function() {
        this.ctx.fillStyle = "#CCC";
        this.ctx.fillRect(0, HEIGHT - (HEIGHT * 0.1), WIDTH, HEIGHT * 0.1);
        this.ctx.fillStyle = "#000";
        this.ctx.font = (HEIGHT * 0.05) + "px Arial";
        this.ctx.fillText("Score: " + this.score, 10, HEIGHT - 10);
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