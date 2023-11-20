const min = 1;
const max = 100;
var aleatorio;
var contar = 0;
var pares = 0;
for (var contador = 1; contador <= 100; contador++) {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(aleatorio);
    // se aleatorio > 50 então contar++
    if (aleatorio > 50) {
        contar++;
    }
    // se aleatorio % 2 == 0 então pares++;
    if (aleatorio % 2 == 0) {
        pares++;
    }
}
//mostrar o contar
console.log("Maiores que 50: ",contar);
//mostrar os pares
console.log("Pares: ",pares);