const numero = 496;
var somaDivisores = 1;

for (var contador = 2; contador<=Math.ceil(numero/2); contador++) {
    if (numero % contador == 0) {
        //somar
        //somaDivisores = somaDivisores + contador;
        somaDivisores += contador;
    }
}

//se somaDivisores igual a numero então é perfeito
if (somaDivisores == numero) {
    console.log("Numero é perfeito: ",numero);
} else {
    console.log("Numero não é perfeito: ",numero);
}

