function Tutorial() {
	//this.tutorialDone = false;
	//this.exDays = 365;	
}

/*
sets cookie for tutorial
-done: boolean (true / false) 
-exdays : number of days until the cookie expires
*/
Tutorial.prototype.setCookie = function(done, exdays) {
    //this.tutorialDone = done;
    //this.exDays = exdays;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "tutorialDone=" + done + "; " + expires;
}

Tutorial.prototype.readCookie = function() {
 	var x = document.cookie.split(';');
 	if (x.length == 0) {
 		return false;
 	} else {
 		return true;
 	}
}