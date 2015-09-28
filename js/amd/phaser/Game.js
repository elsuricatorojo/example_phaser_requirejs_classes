define(["Phaser", "Emisor", "MiniBt"], function (Phaser, Emisor, MiniBt) { 
    'use strict';
    var Game = function(_game){
        console.log("(Game.CONSTRUCTORA)!")
        this.game = _game
        var emisor = new Emisor("game")// Emisor
        var img1
    }
    Game.prototype = {
        preload: function(){
            console.log("(Game.preload)!")
            this.game.load.image('logo', 'assets/phaser.png');
            //--
            this.game.load.onLoadStart.add(this.onInicioCarga, this);
            this.game.load.onFileComplete.add(this.onExitoCarga, this);
            this.game.load.onLoadComplete.add(this.onTodoCargado, this);
        },
        create: function(){
            console.log("(Game.create)!")
            this.img1 = this.game.add.sprite(100, 100, "logo"); 
            //--
            this.bt = new MiniBt(this.game, "bt_1", "Boton ejemplo")
            this.bt.nuevoEventListener("onBtPress", this.onBtPress, this)
            this.bt.x = 100
            this.bt.y = 100
        },
        update: function(){
            //console.log("(Game.update)!")
        },
        render: function(){
            //console.log("(Game.render)!")
            //game.debug.inputInfo(32, 32);
        }

    }
    Game.prototype.onInicioCarga = function() {
        console.log("(Game.onInicioCarga)!")
    }
    Game.prototype.onExitoCarga = function(progress, cacheKey, success, totalLoaded, totalFiles){
        console.log("(Game.onExitoCarga)!")
        console.log("   progress: "+progress)
        console.log("   cacheKey: "+cacheKey)
        console.log("   success: "+success)
        console.log("   totalLoaded: "+totalLoaded)
        console.log("   totalFiles: "+totalFiles)
    }
    Game.prototype.onTodoCargado = function() {
        console.log("(Game.onTodoCargado)!")
    }
    Game.prototype.onBtPress = function(evento) {
        console.log("(Game.onBtPress)!")
        console.log("   evento.emisorId: "+evento.emisorId)
    }
    //---
    return Game;
});