/**
 * Created by Deric on 2016-05-19.
 */

/**
 *
 * @constructor
 */
function PlayerData(){
    this.loggedInState = false;

    
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

