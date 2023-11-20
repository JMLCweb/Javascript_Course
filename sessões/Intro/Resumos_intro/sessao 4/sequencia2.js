const min = 1;
const max = 100;
var aleatorio;
var anterior = 0;
var sequencia = 0;
var maiorSequencia = 0;

for (var contador = 1; contador <= 100; contador++) {
    //arranjar forma de guardar o anterior
    //se contador > 1 guardo o anterior, ou seja, o anterior é igual ao aleatorio
    if (contador > 1) {
        anterior = aleatorio;
    }
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
     //se o aleatorio for maior do que anterior temos de incrementar a sequencia
     if (aleatorio > anterior) {
        sequencia++;
     } else {
        sequencia = 1;
     }
     if (sequencia>maiorSequencia) {
        maiorSequencia++;
     }
    console.log(sequencia,anterior,aleatorio);
}
console.log("Maior sequencia: ", maiorSequencia);

