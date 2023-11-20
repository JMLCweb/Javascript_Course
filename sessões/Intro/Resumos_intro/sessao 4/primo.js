const numero = 16;
var divisores = 2;

for (var contador = 2; contador < numero; contador++) {
    console.log(contador);
    if (numero % contador == 0) {
        divisores++;
        break;
    }
}

if (divisores > 2) {
    console.log("O número não é primo: ",numero);
} else {
    console.log("O número é primo: ",numero);
}