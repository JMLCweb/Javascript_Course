const min = 1;
const max = 100;
var aleatorio;
//var maior = 0;
//var menor = 101;
var maior;
var menor;
for (var contador = 1; contador <= 10; contador++) {
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
}
console.log("Maior: ", maior);
console.log("Menor: ", menor);