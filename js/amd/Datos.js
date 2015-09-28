define(function () {
    //-------------------
    /*
    Clase Datos.
    Basada en la clase de AS3: es.robertoferrero.framework.data.Datos
    CREADA: 2015-06-20
    */
    var Datos = function () {
      console.log("(Datos.CONSTRUCTORA)!");
      this.dataItems = {};
      this.arrayItems = [];
    };

    Datos.prototype.nuevoItem = function(itemId, item) {
      //console.log("(Datos.nuevoItem): "+itemId);
      //console.log("   itemId: "+itemId);
      //console.log("   item: "+item);
      if(this.evalExiste(itemId)){
        console.log("(Datos.nuevoItem): "+itemId);
        console.log("ITEM "+itemId+" YA EXISTIA! NO SE HACE NADA.");
      }else{
        this.arrayItems.push(itemId);
        this.dataItems[itemId] = item;
        console.log("   arrayItems: "+this.arrayItems);
      }
    };

    Datos.prototype.getItem = function(itemId) {
      //console.log("(Datos.getItem): "+itemId);
      if(this.evalExiste(itemId)){
        return this.dataItems[itemId];
      }else{
        console.log("(Datos.getItem): "+itemId);
        console.log("ITEM "+itemId+" NO EXISTE! SE DEVUELVE UNDEFINED");
        return undefined;
      }
    };

    Datos.prototype.evalExiste = function(itemId) {
        //console.log("(Datos.evalExiste): "+itemId);
        for(var i=0; i<this.arrayItems.length; i++){
            var valor = this.arrayItems[i];
            if(valor == itemId){
                return true;
            }
        }
        return false;
    };
    //-------------------
    return Datos
});