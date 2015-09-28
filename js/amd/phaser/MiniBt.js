define(["Phaser", "Game", "Emisor"], function(Phaser, Game, Emisor){
    /* ----------------------
     * CALSE: MiniBt
     * CREADA: 20150926-1935
     * AUTOR: Roberto Ferrero (hola@robertoferrero.es)
     * DEPENDENCIAS: "Phaser", "Game", "Emisor"
     * INFO: Pasado el param 'target' crea muestra los valores de x, y, ancho y alto.
     */
    var MiniBt = function(_game, _btId, _texto, _colorRecuadro){
        console.log("(MiniBt.CONSTRUCTORA)!")
        this.game = _game
        this.btId = _btId
        Phaser.Group.call(this, this.game); // LLamamos a la constructora del super
        //--
        this.emisor = new Emisor(this.btId)
        //--
        // Añadimos el boton
        this.boton = this.game.add.button(0, 0, null, this.onBtPress, this, 1, 0, 1);
        this.boton.input.useHandCursor = true;
        this.add(this.boton)
        // Añadimos recuadro
        var colorRecuadro = _colorRecuadro || 0xFF0000
        this.recuadro = this.game.add.graphics(0, 0);
        this.recuadro.beginFill(0xFF0000, 1);
        this.recuadro.lineStyle(0, 0xFFFFFF, 1);
        this.recuadro.drawRect(0, 0, 10, 10);
        this.recuadro.endFill();
        this.add(this.recuadro)
        // Añadimos texto
        var estilo = {
            font: "10px Arial",
            fill: "#ffffff",
            align: "left"
            }
        this.texto = this.game.add.text(5, 5, _texto, estilo)
        this.texto.lineSpacing = -8
        this.add(this.texto)
        // Adaptamos el recuadro y el boton al texto
        this.recuadro.width = this.texto.width +10
        this.recuadro.height = this.texto.height +5
        this.boton.width = this.recuadro.width 
        this.boton.height = this.recuadro.height 
    }
    MiniBt.prototype = Object.create(Phaser.Group.prototype); // Copiamos el prototype de la clase Phase.Group
    MiniBt.prototype.constructor = MiniBt; // Redireccionamos la constructora a la nueva de la clase.
    //-----------------------
    // METODOS PRIVADOS:
    //-----------------------
    // METODOS PUBLICOS:
    MiniBt.prototype.nuevoEventListener = function(eventoId, listener, scope){
        this.emisor.nuevoEventListener(eventoId, listener, scope)
    }
    MiniBt.prototype.miFuncion = function(){
        console.log("(MiniBt.miFuncion)!")
    }
    //-----------------------
    // METODOS EVENTOS:
    MiniBt.prototype.onBtPress = function(){
        console.log("(MiniBt.onBtPress)!")
        this.emisor.emitir("onBtPress", {})
    }
    //-----------------------
    // Fin clase MiniBt
    //-----------------------
    return MiniBt
});