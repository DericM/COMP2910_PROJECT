
function PopupManager() {
    var canvas = CANVAS_MANAGER.uiCanvas;
    var context = canvas.getContext();
    var popups = {};

    popups["death"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {

        }),
        new Button(function() {
            GAME.newGame();
        }, RESOURCES.getImage("nextlevel")),
        "death");

    popups["login"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {

        }),
        new Button(function() {
            GAME.newGame();
        }, RESOURCES.getImage("nextlevel")),
        "death");

    popups["createaccount"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {

        }),
        new Button(function() {

        }, RESOURCES.getImage("nextlevel")),
        "createaccount");

    popups["areyousure"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {

        }),
        new Button(function() {

        }, RESOURCES.getImage("nextlevel")),
        "areyousure");

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
