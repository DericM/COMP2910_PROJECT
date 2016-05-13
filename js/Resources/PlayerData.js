/**
 * Stores the Players information.
 * @constructor
 */
function PlayerData(){

    this.currentLevel = 1;
    //var score = 0;

    /*this.reset = function(){
     currentLevel = 1;
     score = 0;
     };*/


}


PlayerData.prototype = {

    /**
     * Returns the current level.
     * @returns {number}
     */
    getLevel: function(){
        return this.currentLevel;
    }
};