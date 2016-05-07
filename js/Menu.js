function Menu(){

    this.play = function () {

        var player = new PlayerData();


        new Game(player);

    };

    this.play();
}