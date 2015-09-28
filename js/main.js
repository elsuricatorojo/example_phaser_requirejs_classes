console.log("(main3.js)!")
require.config({
    baseUrl : "./js",
    paths : {
        "Emisor" : "amd/Emisor",
        "Datos" : "amd/Datos",
        "Game" : "amd/phaser/Game",
        "Phaser": 'libs/phaser.min',
        "MiniBt": "amd/phaser/MiniBt"
        
    },
    shim : {
        'Phaser': {
            exports: 'Phaser'
        }
    }
});

define(["Emisor", "Phaser", "Game"], function(Emisor, Phaser, Game) {
    console.log("(define)!")
    //root = parent
    //--
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, "");
    game.state.add("Game", Game)
    game.state.start("Game");
});

