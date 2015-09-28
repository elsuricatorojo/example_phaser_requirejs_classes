define(["Datos"], function (Datos) {
    /* ----------------------
     * CALSE: Emisor
     * CREADA: 20150620
     * MODIFICADA: 20150924: Se añade param "emisorId", metodod eliminarEventListener
     * AUTOR: Roberto Ferrero (hola@robertoferrero.es)
     * DEPENDENCIAS: Datos
     * INFO: Basada en la clase de AS3: es.robertoferrero.framework.data.Datos
     */
    //-------------------
    // CONSTRUCTORA:
    var Emisor = function (_emisorId) {
        this.emisorId = _emisorId || ""
        console.log("(Emisor.CONSTRUCTORA): "+this.emisorId);
        this.eventos = new Datos();
        this.autonum = 0;
    };
    //-------------------
    // PUBLICOS:
    Emisor.prototype.nuevoEventListener = function(eventoId, listener, scope){
        console.log("(Emisor.nuevoEventListener)!");
        //console.log("   _existeEvento: "+this._existeEvento(eventoId));
        if(this._existeEvento(eventoId)){
            this._nuevoListener(eventoId, listener, scope);
        }else{
            this._nuevoEvento(eventoId);
            this._nuevoListener(eventoId, listener, scope);
        }
    }
    Emisor.prototype.emitir = function(eventoId, data){
        console.log("(Emisor.emitir): "+eventoId);
        if(this.eventos.evalExiste(eventoId)){
            data.type = eventoId
            data.emisorId = this.emisorId
            var evento = this.eventos.getItem(eventoId)
            var listeners = evento.listeners
            for (var i=0; i<listeners.arrayItems.length; i++){
                var listenerId = listeners.arrayItems[i]
                var objListener = evento.listeners.getItem(listenerId)
                var func = objListener.func
                var scope = objListener.scope
                func.call(scope, data)
            }
        }
    }
    //-------------------
    // PRIVADOS:
    Emisor.prototype._nuevoEvento = function(eventoId){
        console.log("(Emisor._nuevoEvento): "+eventoId);
        var evento = {};
        evento.eventoId = eventoId;
        evento.listeners = new Datos();
        this.eventos.nuevoItem(eventoId, evento);  
    }

    Emisor.prototype._nuevoListener = function(eventoId, listener, scope){
        console.log("(Emisor._nuevoListener): "+eventoId);
        console.log("   listener:"+listener) 
        if(this._existeListener(eventoId, listener)){
            console.log("EL LISTENER YA EXISTE!");
        }else{
            this.autonum++;
            console.log(this.autonum)
            var listenerId = "listener_"+this.autonum;
            var evento = this.eventos.getItem(eventoId);
            //--
            var objListener = {}
            objListener.listenerId = listenerId
            objListener.func = listener
            objListener.scope = scope
            //--
            evento.listeners.nuevoItem(listenerId, objListener);
        }
    }


    Emisor.prototype._existeEvento = function(eventoId){
        //console.log("(Emisor._evalExisteEvento)!");
        return this.eventos.evalExiste(eventoId);
    }

    Emisor.prototype._existeListener = function(eventoId, listener){
        console.log("(Emisor._existeListener)!");
        var evento = this.eventos.getItem(eventoId);
        var listeners = evento.listeners
        //console.log("   evento.eventoId: "+evento.eventoId)
        //console.log("   listeners.arrayItems: "+listeners.arrayItems)
        if(listeners.arrayItems.length == 0){
            console.log("*no existe")
            return false
        }else{
            for (var i=0; i<listeners.arrayItems.length; i++){
              var listenerId = listeners.arrayItems[i]
              var listenerAux = evento.listeners.getItem(listenerId).func
              console.log("   listener:"+listener) 
              console.log("   listenerAux:"+listenerAux) 
              if(listener === listenerAux){
                console.log("*existe")
                return true
              }else{
                console.log("*no existe")
                return false   
              }
            }
        }
    }
    //-------------------
    return Emisor
});