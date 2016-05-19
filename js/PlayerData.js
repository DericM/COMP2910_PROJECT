/**
 * Created by Deric on 2016-05-19.
 */

/**
 *
 * @constructor
 */
function PlayerData(){
    this.loggedInState = false;
    this.userName = "default";
    this.highScores = new Array(10);
}

/**
 *
 * @param state
 */
PlayerData.prototype.setLoggedInState = function(state){
    this.loggedInState = state;
};

/**
 *
 * @returns {boolean|*}
 */
PlayerData.prototype.getLoggedInState = function(){
    return this.loggedInState;
};


/**
 *
 * @param user
 */
PlayerData.prototype.setUserName = function(user){
    this.userName = user;
};

/**
 *
 * @returns {*|string}
 */
PlayerData.prototype.getUserName = function(){
    return this.userName;
};

/**
 * Adds a score to the users high score history.
 *      -keeps the highest score at index 0.
 *      -Cuts off any array elements beyond index 9.
 * @param score
 */
PlayerData.prototype.addToHighScores = function(score){
    for(var i = 0; i < this.highScores.length;i++){
        if(score > this.highScores[i] ) {
            this.highScores.splice(i, 0, score);
            this.highScores.slice(0, 10);
        }
    }
};

/**
 * merge the scores from the current game session with Users score history after login.
 *      -puts the current sessions score
 * @param scoreHistory
 */
PlayerData.prototype.mergeScores = function(scoreHistory){
    var currentScores = this.highScores;
    this.highScores = scoreHistory;
    for(var i = 0; i < currentScores.length; i++){
        this.addToHighScores(currentScores);
    }
};



