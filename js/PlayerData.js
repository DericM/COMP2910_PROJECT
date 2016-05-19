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
PlayerData.setLoggedInState = function(state){
    this.loggedInState = state;
};

/**
 *
 * @returns {boolean|*}
 */
PlayerData.getLoggedInState = function(){
    return this.loggedInState;
};