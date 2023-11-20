const x = function() {
    var a = 1;
    console.log('IIFE - Imediatamente executada...');
    if (true) {
        console.log(a);
    }
    console.log(a);
}();



