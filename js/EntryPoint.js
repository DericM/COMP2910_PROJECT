var RESOURCES;
function entryPoint() {
    RESOURCES = new ResourceManager();
    RESOURCES.loadImages();
    RESOURCES.loadSounds();
}