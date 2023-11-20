const numero = 15;
var divisores = 2;
var contador = 2;
//do {
//
// } while (condição);
for(var anterior = numero - 1; anterior >= 1; anterior--) {
    do {
        if (anterior % contador == 0) {
            divisores++;
        }
        contador++;
    } while (contador < anterior && divisores == 2);
    if (divisores == 2) {
        break;
    } else {
        divisores = 2;
        contador = 2;
    }
}
console.log("Primo anterior: ", anterior);