const min = 1;
const max = 100;
var aleatorio;
//var maior = 0;
//var menor = 101;
var maior;
var menor;
// var contador = 1
// do {
// ....
//    contador++;
// } while (contador <= 10);
var contador = 1
do {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(aleatorio);
    if (contador == 1) {
        maior = aleatorio;
        menor = aleatorio;
    }
    // se aleatorio > maior então maior = aleatorio
    if (aleatorio > maior) {
        maior = aleatorio;
    }
    if (aleatorio < menor) {
        menor = aleatorio;
    }
    contador++;
} while (contador <= 10);
console.log("Maior: ", maior);
console.log("Menor: ", menor);