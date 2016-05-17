
function PopupManager(_canvas) {
    var canvas = _canvas;
    var context = canvas.getContext();
    var popups = {};

    popups["nextlevel"] = new Popup(
        canvas,
        new Contents(100, 100),
        new Button(function() {
            //ADD METHOD CALL FOR HOME HERE
        }),
        new Button(function() {
            //ADD METHOD CALL FOR NEXT LEVEL HERE
        }),
        "nextlevel");

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
