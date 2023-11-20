//const numero = 16;
var divisores = 2;
var contaPrimos = 0;

//Ter um ciclo entre 1 e 1000
for (var numero = 1; numero < 1000; numero++) {
    for (var contador = 2; contador < numero; contador++) {
        //console.log(contador);
        if (numero % contador == 0) {
            divisores++;
            //break;
        }
    }
    if (divisores == 2) {
        //console.log("O número é primo: ",numero);
        contaPrimos++;
    }
    divisores = 2;
}
console.log("Número de primos: ",contaPrimos);

