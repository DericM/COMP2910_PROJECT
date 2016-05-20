
function PopupManager() {
    var canvas = CANVAS_MANAGER.popupCanvas;
    var context = canvas.getContext();
    var popups = {};

    popups["death"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {
            //call the menu
        }, RESOURCES.getImage("home")),
        new Button(function() {
            GAME.newGame();
        }, RESOURCES.getImage("newgame")),
        "death");

    popups["victory"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {
            //call the menu
        }, RESOURCES.getImage("home")),
        new Button(function() {
            GAME.newGame();
        }, RESOURCES.getImage("newgame")),
        "victory");

    popups["quit"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {
            POPUPS.removePopup("quit");
        }, RESOURCES.getImage("no")),
        new Button(function() {
            //call the menu
        }, RESOURCES.getImage("yes")),
        "victory");

    popups["login"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {
            POPUPS.removePopup("quit");
        }, RESOURCES.getImage("no")),
        new Button(function() {
            //call the menu
        }, RESOURCES.getImage("yes")),
        "victory");

    this.drawPopup = function(name) {
        canvas.setVisible(true);
        popups[name].draw(canvas);
    };

    this.removePopup = function() {
        context.clearRect(0, 0, canvas.getCanvas().width, canvas.getCanvas().height);
        canvas.setVisible(false);
    };

    /* NOT IN USE
    this.addPopup = function(popup, name) {
        popups[name] = popup;
    }*/
}
