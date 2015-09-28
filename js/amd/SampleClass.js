define(function () {
    function SampleClass(param1, param2) {
        console.log("(SampleClass.CONSTRUCTORA): "+param1+" - "+param2)
        this.param1 = param1; 
        this.param2 = param2;
    };
    return SampleClass
});