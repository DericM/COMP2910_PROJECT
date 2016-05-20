function OrientationListener() {
    window.addEventListener("orientationchange", function() {
        console.log("in");
        if(screen.orientation.angle == 0) {
            CANVAS_MANAGER.backgroundCanvas.setVisible(true);
            CANVAS_MANAGER.uiCanvas.setVisible(true);
            CANVAS_MANAGER.gameCanvas.setVisible(true);
            document.getElementById("container").removeChild(document.getElementById("orientImgId"));
            console.log("0");
        } else if(screen.orientation.angle == 90) {
            CANVAS_MANAGER.backgroundCanvas.setVisible(false);
            CANVAS_MANAGER.uiCanvas.setVisible(false);
            CANVAS_MANAGER.gameCanvas.setVisible(false);
            var orientImg = document.createElement("image");
            orientImg = RESOURCES.getImage("orientlistener");
            orientImg.id = "orientImgId";
            document.getElementById("container").appendChild(orientImg);
        }
    });
}