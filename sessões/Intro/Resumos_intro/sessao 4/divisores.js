const numero = 16;
var divisores = 2;

for (var contador = 2; contador < numero; contador++) {
    if (numero % contador == 0) {
        divisores++;
        console.log("Divisor: ",contador);
    }
}

console.log("Número de divisores: ", divisores);