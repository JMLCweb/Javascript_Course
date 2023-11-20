const numero = 5;
var divisores = 2;
var contador = 2;

//do {
//
// } while (condição);

do {
    console.log(contador);
    if (numero % contador == 0) {
        divisores++;
    }
    contador++;
} while (contador < numero && divisores == 2);


if (divisores > 2) {
    console.log("O número não é primo: ",numero);
} else {
    console.log("O número é primo: ",numero);
}